// ========  joc.js  =========
// Tomás Cuesta – Abril 2025

let cancionesDisponibles = [];
let cancionesFalladas = [];
const cancionesUsadas = new Set();

let numRondas = 0;
let rondaActual = 1;
let jugadores = [];
let jugadorActualIndice = 0;

let audioElement = null;
let temporizadorId = null;
let timeoutResultadoId = null;
let cuentaRegresiva = 6;

const imagenesJuego = [
  'imatges/fondo1.jpg', 'imatges/fondo2.jpg', 'imatges/fondo3.jpg'
];
const imagenFinal = 'imatges/final.jpg';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function aleatorio(max) {
  return Math.floor(Math.random() * max);
}

function reproducirBeep(tipo = 'acierto') {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';

  if (tipo === 'acierto') {
    osc.frequency.value = 880;
    gain.gain.value = 0.2;
  } else {
    osc.frequency.value = 220;
    gain.gain.value = 0.3;
  }

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.25);
}

function elegirImagenFondo(lista) {
  const url = lista[aleatorio(lista.length)];
  document.body.style.backgroundImage = `url('${url}')`;

  if (lista.length === 1 && lista[0] === imagenFinal) {
    document.body.style.backgroundSize = 'contain';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
  } else {
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  }
}

function limpiarFondo() {
  document.body.style.backgroundImage = '';
}

async function seleccionarCarpeta() {
  try {
    if (!('showDirectoryPicker' in window)) {
      alert("El teu navegador no suporta l'API showDirectoryPicker()");
      return;
    }

    const dirHandle = await window.showDirectoryPicker();
    cancionesDisponibles = [];

    for await (const [nombre, handle] of dirHandle.entries()) {
      if (handle.kind === 'file' && nombre.toLowerCase().endsWith('.mp3')) {
        cancionesDisponibles.push({
          titulo: nombre.replace(/\.mp3$/i, ''),
          handle
        });
      }
    }

    if (cancionesDisponibles.length === 0) {
      alert("No s'han trobat fitxers MP3 a la carpeta seleccionada.");
      return;
    }

    $('#numCanciones').textContent = `Cançons carregades: ${cancionesDisponibles.length}`;
    pedirConfiguracion();
  } catch (err) {
    console.error(err);
    alert('Error en accedir a la carpeta.');
  }
}

function pedirConfiguracion() {
  const maxRondas = cancionesDisponibles.length;

  let rondas;
  while (true) {
    const entrada = prompt(`Quantes rondes vols jugar? (1 ‑ ${maxRondas})`, '1');
    rondas = parseInt(entrada, 10);
    if (!isNaN(rondas) && rondas >= 1 && rondas <= maxRondas) break;
    alert(`Si us plau, introdueix un nombre entre 1 i ${maxRondas}.`);
  }
  numRondas = rondas;

  let numJugadores;
  while (true) {
    const entrada = prompt('Quants jugadors? (1 ‑ 4)', '1');
    numJugadores = parseInt(entrada, 10);
    if (!isNaN(numJugadores) && numJugadores >= 1 && numJugadores <= 4) break;
    alert('Introdueix un nombre vàlid entre 1 i 4.');
  }

  jugadores = [];
  for (let i = 0; i < numJugadores; i++) {
    let nombre;
    do {
      nombre = prompt(`Nom del jugador ${i + 1}:`, `Jugador ${i + 1}`);
    } while (!nombre || nombre.trim() === '');
    jugadores.push({ nombre: nombre.trim(), puntos: 0 });
  }

  renderPuntuaciones();
  $('#seleccionCarpeta').style.display = 'none';
  $('#zonaJuego').style.display = 'block';
  audioElement = $('#audio');
  siguienteRonda();
}

async function siguienteRonda() {
  if (rondaActual > numRondas || cancionesDisponibles.length === 0) {
    finalizarJuego();
    return;
  }

  $('#ronda').textContent = rondaActual;
  $('#infoTurno').textContent = `Torn de ${jugadores[jugadorActualIndice].nombre}`;

  const indice = aleatorio(cancionesDisponibles.length);
  const cancion = cancionesDisponibles[indice];

  await reproducirFragmento(cancion);
  mostrarOpciones(cancion);
  iniciarTemporizador(() => manejarRespuestaTiempoAgotado(cancion));
}

async function reproducirFragmento(cancion) {
  try {
    const file = await cancion.handle.getFile();
    const url = URL.createObjectURL(file);

    elegirImagenFondo(imagenesJuego);

    return new Promise((resolve) => {
      audioElement.src = url;
      audioElement.load();
      audioElement.onloadedmetadata = () => {
        const dur = audioElement.duration;
        const fragmento = 10;
        let inicio = 0;
        if (dur > fragmento + 5) {
          inicio = aleatorio(Math.floor(dur - fragmento - 5)) + 2;
        }
        audioElement.currentTime = inicio;
        audioElement.play();

        const barra = $('#barraTiempo');
        barra.style.transition = 'none';
        barra.style.width = '100%';
        void barra.offsetWidth;
        barra.style.transition = `width ${fragmento}s linear`;
        barra.style.width = '0%';

        setTimeout(() => {
          audioElement.pause();
          URL.revokeObjectURL(url);
          barra.style.transition = 'none';
          barra.style.width = '0%';
          resolve();
        }, fragmento * 1000);
      };
    });
  } catch (e) {
    console.error(e);
    alert("No s'ha pogut reproduir el fragment. Es passarà a la següent cançó.");
  }
}

function mostrarOpciones(cancionCorrecta) {
  const opcionesDiv = $('#opciones');
  opcionesDiv.innerHTML = '';

  const opciones = [cancionCorrecta.titulo];
  const otros = cancionesDisponibles.filter(c => c.titulo !== cancionCorrecta.titulo);
  while (opciones.length < 3 && otros.length) {
    const idx = aleatorio(otros.length);
    const extra = otros.splice(idx, 1)[0].titulo;
    if (!opciones.includes(extra)) opciones.push(extra);
  }

  opciones.sort(() => Math.random() - 0.5);

  for (const titulo of opciones) {
    const btn = document.createElement('button');
    btn.textContent = titulo;
    btn.classList.add('opcion-boton');
    btn.onclick = () => manejarRespuesta(titulo, cancionCorrecta);
    opcionesDiv.appendChild(btn);
  }
}

function iniciarTemporizador(onTimeout) {
  cuentaRegresiva = 6;
  $('#temporizador').textContent = `Temps: ${cuentaRegresiva}s`;
  temporizadorId = setInterval(() => {
    cuentaRegresiva--;
    $('#temporizador').textContent = `Temps: ${cuentaRegresiva}s`;
    if (cuentaRegresiva <= 0) {
      clearInterval(temporizadorId);
      onTimeout();
    }
  }, 1000);
}

function pararTemporizador() {
  if (temporizadorId) clearInterval(temporizadorId);
  $('#temporizador').textContent = '';
}

function manejarRespuestaTiempoAgotado(cancion) {
  reproducirBeep('fallo');
  mostrarResultado(false, cancion.titulo, 'Temps esgotat!');
  continuarFlujoDespuesDeResultado();
}

function manejarRespuesta(tituloSeleccionado, cancionCorrecta) {
  pararTemporizador();

  $$('#opciones .opcion-boton').forEach(btn => {
    btn.disabled = true;
  });

  const acierto = tituloSeleccionado === cancionCorrecta.titulo;

  if (acierto) {
    reproducirBeep('acierto');
    jugadores[jugadorActualIndice].puntos += 1;
    cancionesDisponibles = cancionesDisponibles.filter(c => c.titulo !== cancionCorrecta.titulo);
    cancionesUsadas.add(cancionCorrecta.titulo);
  } else {
    reproducirBeep('fallo');
    cancionesFalladas.push(cancionCorrecta);
  }

  mostrarResultado(acierto, cancionCorrecta.titulo);
  renderPuntuaciones();
  continuarFlujoDespuesDeResultado();
}

function mostrarResultado(acierto, tituloCorrecto, textoExtra = '') {
  const res = $('#resultado');
  res.textContent = acierto
    ? `✅ Correcte! Era "${tituloCorrecto}".`
    : `❌ Incorrecte. Era "${tituloCorrecto}".`;
  if (textoExtra) res.textContent += '\n' + textoExtra;
}

function continuarFlujoDespuesDeResultado() {
  timeoutResultadoId = setTimeout(() => {
    const quedanRondas = rondaActual < numRondas || (jugadorActualIndice + 1) % jugadores.length !== 0;

    if (quedanRondas) {
      $('#avisoSiguiente').textContent = 'Propera cançó en 3 segons…';
    }

    setTimeout(() => {
      $('#resultado').textContent = '';
      $('#avisoSiguiente').textContent = '';
      $('#opciones').innerHTML = '';
      limpiarFondo();
      avanzarTurno();
      siguienteRonda();
    }, 3000);
  }, 5000);
}

function avanzarTurno() {
  jugadorActualIndice = (jugadorActualIndice + 1) % jugadores.length;
  if (jugadorActualIndice === 0) {
    rondaActual += 1;
  }
}

function renderPuntuaciones(final = false) {
  const cont = $('#puntuaciones');
  cont.innerHTML = '';
  jugadores.forEach((j) => {
    const p = document.createElement('p');
    p.textContent = `${j.nombre}: ${j.puntos} punt(s)`;
    if (final) p.classList.add('final-puntuacion');
    cont.appendChild(p);
  });
}

function finalizarJuego() {
  elegirImagenFondo([imagenFinal]);

  $('#infoTurno').textContent = 'Fi de la partida';
  $('#infoTurno').classList.add('final-texto');

  $('#resultado').textContent = 'Marcador final:';
  $('#resultado').classList.add('final-texto');

  $('#ronda').parentElement.classList.add('final-puntuacion');

  renderPuntuaciones(true);

  $('#opciones').innerHTML = '';
  $('#temporizador').textContent = '';
}

window.seleccionarCarpeta = seleccionarCarpeta;
