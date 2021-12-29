'use strict';

// modal

const menuBtn = document.querySelector('.menu-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

// sticky nav

const header = document.querySelector('.header');
const mainBar = document.querySelector('.main-bar');
const navBar = document.querySelector('.navbar');
const navHeight = navBar.getBoundingClientRect().height;

const stickyNav = (entries) => {
  const [entry] = entries;

  if (!entry.isInterSecting) navBar.classList.add('sticky');
  else navBar.classList.remove('sticky');
};

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

navObserver.observe(header);

// navigation btns

document.querySelector('.main-bar').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// section roll

const allSection = document.querySelectorAll('.section');

const rollSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(rollSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});
