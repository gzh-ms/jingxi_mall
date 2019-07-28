(function () {
  a();

  function a() {
    const d = document.documentElement;
    let b = d.getBoundingClientRect().width || window.innerWidth;
    const max = 640;
    const min = 320;
    if (b > max) {
      b = max;
    }
    if (b < min) {
      b = min;
    }
    d.style.fontSize = b / 750 * 100 + 'px';
  }

  window.onresize = a;
})();
