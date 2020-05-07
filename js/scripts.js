(function () {
  /* Проверка наличия класса у элемента */
  function hasClass(el, cls) {
    return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
  }

  /* Открытие меню */
  let menuOpen = document.getElementById('open-menu');
  if (menuOpen) {
    let body = document.querySelector('body');
    let languageNavigation = document.getElementById('language-navigation');
    let menuClose = document.getElementById('close-menu');

    menuOpen.addEventListener('click', function (event) {
      event.preventDefault();

      languageNavigation.classList.add('open');
      body.classList.add('overflow');
    });

    menuClose.addEventListener('click', function (event) {
      event.preventDefault();

      languageNavigation.classList.remove('open');
      body.classList.remove('overflow');
    });
  }

  /* Языковой спойлер */
  let languageToggler = document.getElementsByClassName('language-toggler');
  if(languageToggler) {
    for(let i = 0; i < languageToggler.length; i++) {
      languageToggler[i].addEventListener('click', function(event) {
        event.preventDefault();
        if (hasClass(this.parentNode, 'open')) {
          this.classList.remove('active');
          this.parentNode.classList.remove('open');
        } else {
          this.classList.add('active');
          this.parentNode.classList.add('open');
        }
      })
    }
  }


  /* Эффект паралакса */
  const paralaxImg = document.getElementById('paralax');
  const tabMaxScreen = 1199;
  if (paralaxImg && (screen.width > tabMaxScreen)) {
    let countStart = 222.6;
    let count = countStart;
    const paralaxSpeed = 5; // 8

    paralaxImg.style.transform = 'translate3d(0, ' + countStart + 'px, 0)';

    window.addEventListener('scroll', function() {
      let scrollPosition = pageYOffset;
      count = countStart - scrollPosition / paralaxSpeed;
      if (count <= (-104)) {
        count = -104;
      }
      paralaxImg.style.transform = 'translate3d(0, ' + count + 'px, 0)';
    });
  }

  /* Подмена вьюпорта */
  const viewPort = document.querySelector('[name="viewport"]');
  if (viewPort) {
    if (screen.width < 980) {
      viewPort.setAttribute('content','width=320, user-scalable=yes');
    } else {
      viewPort.setAttribute('content','width=980, user-scalable=yes');
    }
  }

  /* Плавный скролл */
  let listNav = document.getElementsByClassName('js--scroll-link');
  if(listNav) {
    let body = document.querySelector('body');
    let languageNavigation = document.getElementById('language-navigation');

    for(let i = 0; i < listNav.length; i++) {
      listNav[i].addEventListener('click', function(event) {
        event.preventDefault();

        if (hasClass(body, 'overflow')) {
          body.classList.remove('overflow');
          languageNavigation.classList.remove('open');
        }

        let section, heightPlus;
        heightPlus = 0;
        section = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
          top: section.offsetTop - heightPlus,
          behavior: "smooth"
        });
      })
    }
  }
})();