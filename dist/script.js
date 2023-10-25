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
  const serviceRadioButtons = document.querySelectorAll('input[name="servicesOffer"]');
  const budgetRadioButtons = document.querySelectorAll('input[name="budgetRange"]');

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
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel-inner');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-item').length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-item').length) % document.querySelectorAll('.carousel-item').length;
  updateCarousel();
});

function updateCarousel() {
  const newTransformValue = -currentIndex * 100 + '%';
  carousel.style.transform = `translateX(${newTransformValue})`;
}

// End Carousel Post Functionality