// Toggle menu (for mobile)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Active link switching on scroll + sticky header
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  // Sticky header
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle icon and navbar when clicking link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Smooth scroll for "scroll-to-top" button
document.querySelector('.footer-iconTop a').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// OPTIONAL: Scroll reveal animation (using basic JS, not library)
const revealElements = document.querySelectorAll('.services-box, .portofolio-box, .about-content, .home-content, .contact form');

function revealOnScroll() {
  let windowHeight = window.innerHeight;
  let revealPoint = 100;

  revealElements.forEach(el => {
    let revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

var typed = new Typed(".multiple-text", {
  strings: ["an University Undergraduate","a Software Engineer", "an Aspiring Data Scientist", "a Learner"],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 1000,
  loop: true
});


