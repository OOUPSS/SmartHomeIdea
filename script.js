document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.button-panel');

  panels.forEach(panel => {
    panel.addEventListener('click', (e) => {
      if (!e.target.closest('.panel-controls')) {
        panels.forEach(p => {
          if (p !== panel) p.classList.remove('open');
        });
        panel.classList.toggle('open');
      }
    });
  });

  document.querySelector('.light-color')?.addEventListener('change', e => {
    console.log("Lichtfarbe geändert auf", e.target.value);
  });

  document.querySelector('.light-brightness')?.addEventListener('change', e => {
    console.log("Lichthelligkeit установлена на", e.target.value + "%");
  });

  document.querySelector('.temp-control')?.addEventListener('change', e => {
    console.log("Temperatur gesetzt auf", e.target.value + "°C");
  });

  document.querySelector('.camera-toggle')?.addEventListener('change', e => {
    console.log("Kamera", e.target.checked ? "aktiviert" : "deaktiviert");
  });

  document.querySelector('.alarm-toggle')?.addEventListener('change', e => {
    console.log("Alarm", e.target.checked ? "aktiviert" : "deaktiviert");
  });

  document.querySelector('.solar-toggle')?.addEventListener('change', e => {
    console.log("Solarpanel", e.target.checked ? "aktiviert" : "deaktiviert");
  });

  document.querySelector('.blinds-toggle')?.addEventListener('change', e => {
    console.log("Jalousien", e.target.checked ? "geöffnet" : "geschlossen");
  });
});