// ======== joc.js amb fallos didàctics =========
// Tomás Cuesta – Versió d’examen
// ---------------------------------------------

let cançonsDisponibles = [];
let cançonsFallades = [];
const cançonsUsades = new Set();

let numRondes = 0;
let rondaActual = 1;
let jugadors = [];
let jugadorActualIndex = 0;

let audioElement = null;
let temporitzadorId = null;
let timeoutResultatId = null;
let compteEnrere = 6;

const imatgesJoc = [
  'imatges/fons1.jpg', 'imatges/fons2.jpg', 'imatges/fons3.jpg'
];
const imatgeFinal = 'imatges/final.jpg';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function aleatori(max) {
  return Math.floor(Math.random() * max);
}

// ==== FALLO 13: funció de beep buida ====
function reproduirBeep(tipus = 'encert') {
  // No fa res
}

function triarImatgeFons(llista) {
  const url = llista[aleatori(llista.length)];
  document.body.style.backgroundImage = `url('${url}')`;

  // ==== FALLO 11: imatge final amb 'cover' en lloc de 'contain' ====
  if (llista.length === 1 && llista[0] === imatgeFinal) {
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
  } else {
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  }
}

function netejarFons() {
  document.body.style.backgroundImage = '';
}

async function seleccionarCarpeta() {
  try {
    if (!('showDirectoryPicker' in window)) {
      alert('El teu navegador no suporta la API showDirectoryPicker()');
      return;
    }

    const dirHandle = await window.showDirectoryPicker();
    cançonsDisponibles = [];

    for await (const [nom, handle] of dirHandle.entries()) {
      if (handle.kind === 'file' && nom.toLowerCase().endsWith('.mp3')) {
        cançonsDisponibles.push({
          titol: nom.replace(/\.mp3$/i, ''),
          handle
        });
      }
    }

    if (cançonsDisponibles.length === 0) {
      alert('No s’han trobat fitxers MP3 a la carpeta seleccionada.');
      return;
    }

    $('#numCanciones').textContent = `Cançons carregades: ${cançonsDisponibles.length}`;
    demanarConfiguracio();
  } catch (err) {
    console.error(err);
    alert('Error en accedir a la carpeta.');
  }
}

function demanarConfiguracio() {
  const maxRondes = cançonsDisponibles.length;

  let rondes;
  while (true) {
    const entrada = prompt(`Quantes rondes vols jugar? (1 ‑ ${maxRondes})`, '10'); // FALLO 9
    rondes = parseInt(entrada, 10);
    if (!isNaN(rondes) && rondes >= 1 && rondes <= maxRondes) break;
    alert(`Si us plau, introdueix un número entre 1 i ${maxRondes}.`);
  }
  numRondes = rondes;

  let numJugadors;
  while (true) {
    const entrada = prompt('Quants jugadors? (1 ‑ 4)', '1');
    numJugadors = parseInt(entrada, 10);
    if (!isNaN(numJugadors) && numJugadors >= 1 && numJugadors <= 4) break;
    alert('Introdueix un número vàlid entre 1 i 4.');
  }

  jugadors = [];
  for (let i = 0; i < numJugadors; i++) {
    let nom;
    do {
      nom = prompt(`Nom del jugador ${i + 1}:`, `Jugador ${i + 1}`);
    } while (!nom || nom.trim() === '');
    jugadors.push({ nom: nom.trim(), punts: 0 });
  }

  renderitzarPuntuacions();
  $('#seleccionCarpeta').style.display = 'none';
  $('#zonaJoc').style.display = 'block';
  audioElement = $('#audio');
  següentRonda();
}

async function següentRonda() {
  if (rondaActual > numRondes || cançonsDisponibles.length === 0) {
    finalitzarJoc();
    return;
  }

  $('#ronda').textContent = rondaActual;
  $('#infoTorn').textContent = `Torn de ${jugadors[jugadorActualIndex].nom}`;

  const index = aleatori(cançonsDisponibles.length);
  const cançó = cançonsDisponibles[index];

  await reproduirFragment(cançó);
  mostrarOpcions(cançó);
  iniciarTemporitzador(() => gestionarRespostaTempsEsgotat(cançó));
}

async function reproduirFragment(cançó) {
  try {
    const fitxer = await cançó.handle.getFile();
    const url = URL.createObjectURL(fitxer);

    triarImatgeFons(imatgesJoc);

    return new Promise((resolve) => {
      audioElement.src = url;
      audioElement.load();
      audioElement.onloadedmetadata = () => {
        const durada = audioElement.duration;
        const fragment = 10;
        let inici = 0;
        if (durada > fragment + 5) {
          inici = aleatori(Math.floor(durada - fragment - 5)) + 2;
        }
        audioElement.currentTime = inici;
        audioElement.play();

        // ==== FALLO 12: barra de temps comentada ====
        /*
        const barra = $('#barraTemps');
        barra.style.transition = 'none';
        barra.style.width = '100%';
        void barra.offsetWidth;
        barra.style.transition = `width ${fragment}s linear`;
        barra.style.width = '0%';
        */

        setTimeout(() => {
          audioElement.pause();
          URL.revokeObjectURL(url);
          //barra.style.transition = 'none';
          //barra.style.width = '0%';
          resolve();
        }, fragment * 1000);
      };
    });
  } catch (e) {
    console.error(e);
    alert('No s’ha pogut reproduir el fragment. Passarem a la següent cançó.');
  }
}

function mostrarOpcions(cançóCorrecta) {
  const opcionsDiv = $('#opcions');
  opcionsDiv.innerHTML = '';

  const opcions = [cançóCorrecta.titol];
  const altres = cançonsDisponibles.filter(c => c.titol !== cançóCorrecta.titol);
  while (opcions.length < 3 && altres.length) {
    const idx = aleatori(altres.length);
    const extra = altres.splice(idx, 1)[0].titol;
    if (!opcions.includes(extra)) opcions.push(extra);
  }

  opcions.sort(() => Math.random() - 0.5);

  for (const titol of opcions) {
    const btn = document.createElement('button');
    btn.textContent = titol;
    btn.classList.add('opcio-boto');
    btn.onclick = () => gestionarResposta(titol, cançóCorrecta);
    opcionsDiv.appendChild(btn);
  }
}

function iniciarTemporitzador(onTimeout) {
  compteEnrere = 6; // FALLO 10: podries voler menys, però mantens aquest valor
  $('#temporitzador').textContent = `Temps: ${compteEnrere}s`;
  temporitzadorId = setInterval(() => {
    compteEnrere--;
    $('#temporitzador').textContent = `Temps: ${compteEnrere}s`;
    if (compteEnrere <= 0) {
      clearInterval(temporitzadorId);
      onTimeout();
    }
  }, 1000);
}

function pararTemporitzador() {
  if (temporitzadorId) clearInterval(temporitzadorId);
  $('#temporitzador').textContent = '';
}

function gestionarRespostaTempsEsgotat(cançó) {
  reproduirBeep('error');
  mostrarResultat(false, cançó.titol, 'Temps esgotat!');
  continuarDesprésResultat();
}

function gestionarResposta(titolSeleccionat, cançóCorrecta) {
  pararTemporitzador();

  $$('#opcions .opcio-boto').forEach(btn => {
    btn.disabled = true;
  });

  const encert = titolSeleccionat === cançóCorrecta.titol;

  if (encert) {
    reproduirBeep('encert');
    jugadors[jugadorActualIndex].punts += 1;
    cançonsDisponibles = cançonsDisponibles.filter(c => c.titol !== cançóCorrecta.titol);
    cançonsUsades.add(cançóCorrecta.titol);
  } else {
    reproduirBeep('error');
    cançonsFallades.push(cançóCorrecta);
  }

  mostrarResultat(encert, cançóCorrecta.titol);
  renderitzarPuntuacions();
  continuarDesprésResultat();
}

function mostrarResultat(encert, titolCorrecte, textExtra = '') {
  const res = $('#resultat');
  res.textContent = encert ? `✅ Correcte! Era "${titolCorrecte}".` : `❌ Incorrecte. Era "${titolCorrecte}".`;
  if (textExtra) res.textContent += '\n' + textExtra;
}

function continuarDesprésResultat() {
  timeoutResultatId = setTimeout(() => {
    // ==== FALLO 8: sempre es mostra encara que no hi hagi més cançons ====
    $('#avisSeguent').textContent = 'Pròxima cançó en 3 segons…';

    setTimeout(() => {
      $('#resultat').textContent = '';
      $('#avisSeguent').textContent = '';
      $('#opcions').innerHTML = '';
      netejarFons();
      avançarTorn();
      següentRonda();
    }, 3000);
  }, 5000);
}

function avançarTorn() {
  jugadorActualIndex = (jugadorActualIndex + 1) % jugadors.length;
  if (jugadorActualIndex === 0) {
    rondaActual += 1;
  }
}

function renderitzarPuntuacions(final = false) {
  const cont = $('#puntuacions');
  cont.innerHTML = '';
  jugadors.forEach(j => {
    const p = document.createElement('p');
    p.textContent = `${j.nom}: ${j.punts} punt(s)`;
    if (final) p.classList.add('final-puntuacio');
    cont.appendChild(p);
  });
}

function finalitzarJoc() {
  triarImatgeFons([imatgeFinal]);

  $('#infoTorn').textContent = 'Fi de la partida';
  $('#infoTorn').classList.add('final-text');

  $('#resultat').textContent = 'Marcador final:';
  $('#resultat').classList.add('final-text');

  $('#ronda').parentElement.classList.add('final-puntuacio');

  renderitzarPuntuacions(true);

  $('#opcions').innerHTML = '';
  $('#temporitzador').textContent = '';
}

window.seleccionarCarpeta = seleccionarCarpeta;
