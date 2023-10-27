// NavBar Show/Hide on toggle action

function openNav() {
    document.getElementById("navbar").style.display = "block";
    document.getElementById("header-bar").style.display = "none"
}
function closeNav() {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("header-bar").style.display = "block"
}

// End NavBar Show/Hide on toggle action


//  Radio Button Selection On Click
document.addEventListener('DOMContentLoaded', function () {
  const serviceRadioButtons = document.querySelectorAll('input[name="What’s in your mind?"]');
  const budgetRadioButtons = document.querySelectorAll('input[name="How much is your budget range?"]');

  function handleRadioChange(radioButtons) {
      radioButtons.forEach(function (radio) {
          const label = document.querySelector(`label[for="${radio.id}"]`);
          label.classList.remove('active');
          label.style.background = 'none';

          if (radio.checked) {
              label.classList.add('active');
              label.style.background = '#D1D5DB';
          }
      });
  }

  serviceRadioButtons.forEach(function (radio) {
      radio.addEventListener('change', function () {
          handleRadioChange(serviceRadioButtons);
      });
  });

  budgetRadioButtons.forEach(function (radio) {
      radio.addEventListener('change', function () {
          handleRadioChange(budgetRadioButtons);
      });
  });
});


// End Radio Button Selection on Click



// Video play on user view post functionaliy

document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.video');

  const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px',
      threshold: 1, // play video when 100% visible
  };

  const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.play();
          } else {
              entry.target.pause();
          }
      });
  }, options);

  videos.forEach(video => {
      observer.observe(video);
  });
});

// End video play on user view post functionaliy


// Carousel Post Functionality
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:true,
              loop:false
          }
      },
      nav: true,
      autoplay: true, 
      autoplayTimeout: 3000,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    });
  });

// End Carousel Post Functionality