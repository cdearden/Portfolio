// import $ from 'jquery';

$(document).ready(() => {
  $('a[name="apps"]').on('click', (event) => {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = '#apps';
      $('html, body').animate({
        scrollTop: $(hash).offset().top - $('.mainNavbar').offsetHeight(),
      }, 800, () => {
        window.location.hash = hash;
      });
    }
  });

  $('.myWorkButton').on('click', (event) => {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = '#apps';
      $('html, body').animate({
        scrollTop: $(hash).offset().top - $('.mainNavbar').offsetHeight(),
      }, 800, () => {
        window.location.hash = hash;
      });
    }
  });

  let activeLink = 'home';
  const links = $('.navbarLinks > a');

  links.each((i, link) => {
    if (link.name !== 'apps') {
      $(link).on('click', () => {
        $(`.${activeLink}`).toggleClass('hidden');
        $(`.${link.name}`).toggleClass('hidden');
        activeLink = link.name;
      });
    }
  });


  // const images = document.querySelectorAll('img');


  // function checkSlider(e) {
  //   console.log(window.scrollY);
  //   images.forEach(function(image) {
  //     const imageTop = image.offsetTop + image.height / 2;
  //     const screenBottom = window.scrollY + window.innerHeight;
  //     const imageBottom = image.offsetTop + image.height;
  //     const screenTop = window.scrollY;

  //     if(imageTop > screenBottom && imageBottom < screenTop) {
  //       image.classList.add('active');
  //     } else {
  //       image.classList.remove('active');
  //     }

  //   });
  // }

  // window.addEventListener("scroll", checkSlider);
  // console.log('hi');
  // // window.on('scroll', checkSlider);

});
console.log('loaded');
