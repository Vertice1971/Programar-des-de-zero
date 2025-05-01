function iniciarRetallador() {
  const fileInput = document.getElementById('fileInput');
  const iniciMin = document.getElementById('iniciMin');
  const iniciSeg = document.getElementById('iniciSeg');
  const finalMin = document.getElementById('finalMin');
  const finalSeg = document.getElementById('finalSeg');
  const outputName = document.getElementById('outputName');
  const botoRetallar = document.getElementById('botoRetallar');
  const estat = document.getElementById('estat');

  let duradaAudio = 0;
  let blobFitxer = null;

  fileInput.value = '';
  outputName.value = 'retall.mp3';
  estat.textContent = '';
  botoRetallar.disabled = true;

  fileInput.addEventListener('change', () => {
    const fitxer = fileInput.files[0];
    if (!fitxer) return;
    if (fitxer.type !== 'audio/mpeg' && !fitxer.name.toLowerCase().endsWith('.mp3')) {
      alert('Si us plau, selecciona un fitxer MP3.');
      fileInput.value = '';
      return;
    }
    blobFitxer = fitxer;
    const audio = document.createElement('audio');
    audio.src = URL.createObjectURL(fitxer);
    audio.addEventListener('loadedmetadata', () => {
      duradaAudio = audio.duration;
      const mins = Math.floor(duradaAudio / 60);
      const secs = Math.floor(duradaAudio % 60).toString().padStart(2, '0');
      estat.textContent = `Durada: ${mins}:${secs}`;
      botoRetallar.disabled = false;
    });
  });

  botoRetallar.addEventListener('click', () => {
    const inici = parseInt(iniciMin.value) * 60 + parseInt(iniciSeg.value);
    const final = parseInt(finalMin.value) * 60 + parseInt(finalSeg.value);
    if (isNaN(inici) || isNaN(final) || inici >= final || final > duradaAudio) {
      alert('Temps invàlids.');
      return;
    }
    const midaFitxer = blobFitxer.size;
    const iniciByte = Math.floor((inici / duradaAudio) * midaFitxer);
    const finalByte = Math.floor((final / duradaAudio) * midaFitxer);
    const fragment = blobFitxer.slice(iniciByte, finalByte);
    const blob = new Blob([fragment], { type: 'audio/mpeg' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    let nom = outputName.value.trim() || 'retall.mp3';
    if (!nom.toLowerCase().endsWith('.mp3')) nom += '.mp3';
    link.href = url;
    link.download = nom;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    estat.textContent = `Fitxer generat: ${nom}`;
  });
}
