function iniciarTallador() {
  const fileInput = document.getElementById('fileInput');
  const startMin = document.getElementById('startMin');
  const startSec = document.getElementById('startSec');
  const endMin = document.getElementById('endMin');
  const endSec = document.getElementById('endSec');
  const outputName = document.getElementById('outputName');
  const cutButton = document.getElementById('cutButton');
  const status = document.getElementById('status');

  let duradaAudio = 0;
  let fitxerBlob = null;

  fileInput.value = '';
  outputName.value = 'retall.mp3';
  status.textContent = '';
  cutButton.disabled = true;

  fileInput.addEventListener('change', () => {
    const fitxer = fileInput.files[0];
    if (!fitxer) return;
    if (fitxer.type !== 'audio/mpeg' && !fitxer.name.toLowerCase().endsWith('.mp3')) {
      alert('Si us plau, selecciona un fitxer MP3.');
      fileInput.value = '';
      return;
    }
    fitxerBlob = fitxer;
    const audio = document.createElement('audio');
    audio.src = URL.createObjectURL(fitxer);
    audio.addEventListener('loadedmetadata', () => {
      duradaAudio = audio.duration;
      const mins = Math.floor(duradaAudio / 60);
      const secs = Math.floor(duradaAudio % 60).toString().padStart(2, '0');
      status.textContent = `Durada: ${mins}:${secs}`;
      cutButton.disabled = false;
    });
  });

  cutButton.addEventListener('click', () => {
    const inici = parseInt(startMin.value) * 60 + parseInt(startSec.value);
    const fi = parseInt(endMin.value) * 60 + parseInt(endSec.value);
    if (isNaN(inici) || isNaN(fi) || inici >= fi || fi > duradaAudio) {
      alert('Temps no vàlids.');
      return;
    }
    const midaFitxer = fitxerBlob.size;
    const iniciByte = Math.floor((inici / duradaAudio) * midaFitxer);
    const fiByte = Math.floor((fi / duradaAudio) * midaFitxer);
    const tallat = fitxerBlob.slice(iniciByte, fiByte);
    const blob = new Blob([tallat], { type: 'audio/mpeg' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    let nom = outputName.value.trim() || 'retall.mp3';
    if (!nom.toLowerCase().endsWith('.mp3')) nom += '.mp3';
    link.href = url;
    link.download = nom;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    status.textContent = `Fitxer generat: ${nom}`;
  });
}
