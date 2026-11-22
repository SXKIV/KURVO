// KURVO · piloto alpha — interacción mínima, sin librerías.
// Quien visita cambia la tinta (una de las tres direcciones del DESIGN.md)
// y el nivel de desorden. Todo se guarda solo en su navegador.

(function () {
  'use strict';

  var raiz = document.documentElement;
  var TINTAS = ['fotocopia', 'riso', 'herbario'];

  function guardar(clave, valor) {
    try { localStorage.setItem(clave, valor); } catch (e) { /* sin almacenamiento: no pasa nada */ }
  }
  function leer(clave) {
    try { return localStorage.getItem(clave); } catch (e) { return null; }
  }

  // --- Tinta ---
  var radios = document.querySelectorAll('input[name="tinta"]');
  var actual = TINTAS.indexOf(raiz.dataset.tinta) >= 0 ? raiz.dataset.tinta : 'fotocopia';
  radios.forEach(function (r) {
    r.checked = r.value === actual;
    r.addEventListener('change', function () {
      if (!r.checked) return;
      raiz.dataset.tinta = r.value;
      guardar('kurvo-alpha-tinta', r.value);
    });
  });

  // --- Desorden: de "derecho" a "kurvo" ---
  var control = document.getElementById('desorden');
  var inicial = getComputedStyle(raiz).getPropertyValue('--desorden').trim();
  if (inicial) control.value = inicial;
  function describir(v) {
    v = +v;
    return v < 0.2 ? 'derecho' : v > 0.8 ? 'muy kurvo' : 'algo kurvo';
  }
  control.setAttribute('aria-valuetext', describir(control.value));
  control.addEventListener('input', function () {
    raiz.style.setProperty('--desorden', control.value);
    control.setAttribute('aria-valuetext', describir(control.value));
    guardar('kurvo-alpha-desorden', control.value);
  });

  // --- Número de ejemplar: cada navegador recibe el suyo, como un tiraje ---
  var ejemplar = leer('kurvo-alpha-ejemplar');
  if (!ejemplar) {
    ejemplar = String(Math.floor(Math.random() * 999) + 1).padStart(3, '0');
    guardar('kurvo-alpha-ejemplar', ejemplar);
  }
  document.getElementById('ejemplar').textContent = 'n.º ' + ejemplar;
})();
