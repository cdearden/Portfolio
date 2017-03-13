
$(document).ready(function(){

  $('a[name="apps"]').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  var activeLink = 'home';
  var links = $('.navbarLinks > a')

  links.each(function(i, link) {
    if(link.name !== 'apps')
      $(link).on('click', function() {
        $(`.${activeLink}`).toggleClass('hidden');
        $(`.${link.name}`).toggleClass('hidden');
        activeLink = link.name;
      });
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
