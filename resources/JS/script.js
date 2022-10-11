// Declare Variables

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu-id');
const closeButton = document.getElementById('close');

// Create event listener functions
function showMenu() {
  menu.classList.replace('hide', 'show');
}

function hideMenu() {
  menu.classList.replace('show', 'hide');
}

// Add event listeners to html elements
menuButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);

const menuItems = document.getElementsByClassName('menu-item');
for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', hideMenu);
}

// Highligh visible section of webpage on window scroll
const sections = document.querySelectorAll('section');
const navLi = document.getElementsByClassName('nav-item');
window.onscroll = () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  for (let i = 0; i < navLi.length; i += 1) {
    navLi[i].classList.remove('active');
    if (navLi[i].classList.contains(current)) {
      navLi[i].classList.add('active');
    }
  }
};

let projects = [
    {
        name: 'Tonic',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        image: './resources/images/desktop-1.png',
        technologies: ['html', 'css', 'javascript'],
        live: '',
        source: ''
    },
    {
        name: 'Multi-Post Stories',
        description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        image: './resources/images/desktop-2.png',
        technologies: ['html', 'css', 'javascript'],
        live: '',
        source: ''
    },
    {
        name: 'Tonic',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        image: './resources/images/desktop-3.png',
        technologies: ['html', 'css', 'javascript'],
        live: '',
        source: ''
    },
    {
        name: 'Multi-Post Stories',
        description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        image: './resources/images/desktop-4.png',
        technologies: ['html', 'css', 'javascript'],
        live: '',
        source: ''
    }
];

