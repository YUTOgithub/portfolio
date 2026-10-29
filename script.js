(function () {
  document.documentElement.classList.add('js');

  var t = document.querySelector('.nav-toggle');
  var n = document.getElementById('nav');
  if (t && n) {
    t.addEventListener('click', function () {
      var open = n.classList.toggle('open');
      t.setAttribute('aria-expanded', open);
    });
  }

  // 画面に入ったとき、ふわっと1回だけ表示する
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.hero, .section, .card, .item, .steps li, .stats li, .faq').forEach(function (el) {
    el.classList.add('reveal');
    io.observe(el);
  });
})();
