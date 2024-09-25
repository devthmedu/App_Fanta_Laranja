var tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.two',
    start: '0% 95%',
    end: '70% 50%',
    scrub: true,
    // markers: true,
  },
});

tl.to(
  '#fanta',
  {
    top: '120%',
    left: '0%',
  },
  'orange',
);
tl.to(
  '#orange-cut',
  {
    top: '160%',
    left: '23%',
  },
  'orange',
);
tl.to(
  '#orange',
  {
    width: '15%',
    top: '160%',
    right: '0%',
  },
  'orange',
);
tl.to(
  '#leaf',
  {
    top: '100%',
    rotate: '130deg',
    left: '80%',
  },
  'orange',
);
tl.to(
  '#leaf2',
  {
    top: '110%',
    rotate: '130deg',
    left: '0%',
  },
  'orange',
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.three',
    start: '0% 95%',
    end: '20% 50%',
    scrub: true,
    // markers: true,
  },
});

tl2.from(
  '.lemon1',
  {
    rotate: '-90deg',
    left: '-100%',
    top: '110%',
  },
  'ca',
);
tl2.from(
  '#Fanta-limao',
  {
    rotate: '-90deg',
    top: '110%',
    left: '-100%',
  },
  'ca',
);

tl2.from(
  '.lemon2',
  {
    rotate: '90deg',
    left: '100%',
    top: '110%',
  },
  'ca',
);
tl2.from(
  '#Fanta-morango',
  {
    rotate: '90deg',
    top: '110%',
    left: '100%',
  },
  'ca',
);

tl2.to(
  '#orange-cut',
  {
    width: '18%',
    left: '42%',
    top: '204%',
  },
  'ca',
);
tl2.to(
  '#fanta',
  {
    width: '35%',
    top: '210%',
    left: '33%',
  },
  'ca',
);

const productsContainer = document.querySelector('.products-container');
const cards = Array.from(document.querySelectorAll('.product-card-box'));
const totalCards = cards.length;
const visibleCards = 3;

let currentIndex = 0;

function createVisibleCards() {
  productsContainer.innerHTML = '';
  for (let i = 0; i < visibleCards; i++) {
    const cardIndex = (currentIndex + i) % totalCards;
    productsContainer.appendChild(cards[cardIndex].cloneNode(true));
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarousel();
}

function updateCarousel() {
  createVisibleCards();
  updateBullets();
}

function updateBullets() {
  const bullets = document.querySelectorAll('.bullet');
  bullets.forEach((bullet, index) => {
    bullet.classList.remove('active-bullet');
    if (index === Math.floor(currentIndex / visibleCards)) {
      bullet.classList.add('active-bullet');
    }
  });
}

// Event Listeners for Bullets
const bullets = document.querySelectorAll('.bullet');
bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    currentIndex = index * visibleCards;
    updateCarousel();
  });
});

// Initialize carousel
updateCarousel();

// Optional: Automate carousel transition
setInterval(nextSlide, 3000);




