// Shared by the hub and every app page. Load it in <head> (no defer) so the
// right language shows before the first paint.
// Language: ?lang=tr|en, then the visitor's last choice, then the browser language.
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var saved = null;
  try { saved = localStorage.getItem('alperensaglam.lang') || localStorage.getItem('lokma.lang'); } catch (e) {}
  var param = new URLSearchParams(location.search).get('lang');
  var browser = (navigator.language || 'en').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en';
  var lang = param === 'tr' || param === 'en' ? param : saved === 'tr' || saved === 'en' ? saved : browser;

  function apply() {
    root.classList.remove('show-tr', 'show-en');
    root.classList.add('show-' + lang);
    root.lang = lang;
    var title = root.getAttribute('data-title-' + lang);
    if (title) document.title = title;
    var buttons = document.querySelectorAll('.lang button');
    for (var i = 0; i < buttons.length; i++) buttons[i].setAttribute('aria-pressed', String(buttons[i].getAttribute('data-set') === lang));
  }
  apply();

  document.addEventListener('DOMContentLoaded', function () {
    apply();
    var buttons = document.querySelectorAll('.lang button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        lang = this.getAttribute('data-set');
        try { localStorage.setItem('alperensaglam.lang', lang); } catch (e) {}
        apply();
      });
    }

    // The top bar gains its hairline once the page scrolls under it.
    var bar = document.querySelector('.bar');
    if (bar) {
      var onScroll = function () { bar.classList.toggle('is-stuck', window.scrollY > 4); };
      onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Icon shelf: jump to the product band and lift its icon once on arrival.
    var shelf = document.querySelectorAll('.shelf a[href^="#"]');
    for (var j = 0; j < shelf.length; j++) {
      shelf[j].addEventListener('click', function () {
        var icon = document.querySelector(this.getAttribute('href') + ' .product-icon');
        if (!icon) return;
        icon.classList.remove('lift');
        setTimeout(function () { icon.classList.add('lift'); }, 420);
      });
    }
  });
})();
