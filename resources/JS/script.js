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

// Create projects array
const projects = [
  {
    name: 'Tonic',
    mobileDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: '<img src="./resources/images/desktop-1.png" alt="project-one" class="project-img hov-img">',
    popupImage: '<img src="./resources/images/desktop-1.png" alt="project" class="project-img" id="popup-img">',
    technologies: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    name: 'Multi-Post Stories',
    mobileDesc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    desktopDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: '<img src="./resources/images/desktop-2.png" alt="project-two" class="project-img hov-img" id="project-img2">',
    popupImage: '<img src="./resources/images/desktop-2.png" alt="project" class="project-img" id="popup-img">',
    technologies: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    name: 'Tonic',
    mobileDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: '<img src="./resources/images/desktop-3.png" alt="project-three" class="project-img hov-img">',
    popupImage: '<img src="./resources/images/desktop-3.png" alt="project" class="project-img" id="popup-img">',
    technologies: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    name: 'Multi-Post Stories',
    mobileDesc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    desktopDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: '<img src="./resources/images/desktop-4.png" alt="project-four" class="project-img hov-img" id="project-img4">',
    popupImage: '<img src="./resources/images/desktop-4.png" alt="project" class="project-img" id="popup-img">',
    technologies: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
];

// Select portfolio section of html document
const portfolio = document.getElementById('portfolio');

// Loop through each project and create a new project div and append it to the portfolio section
projects.forEach((element) => {
  const project = document.createElement('div');
  project.className = 'project';
  project.innerHTML = `
    ${element.image}
    <div>
      <h2>${element.name}</h2>
      <div class="project-type">
        <h3 class="text-font">CANOPY</h3>
        <img src="./resources/images/counter.svg" alt="counter" />
        <h4 class="text-font">Back End Dev</h4>
        <img src="./resources/images/counter.svg" alt="counter" />
        <h4 class="text-font">2015</h4>
      </div>
      <p>
        ${element.mobileDesc}
      </p>
      <ul>
        <li>${element.technologies[0]}</li>
        <li>${element.technologies[1]}</li>
        <li>${element.technologies[2]}</li>
      </ul>
      <button class="pro-res popup-button">See Project</button>
    </div>
  `;
  portfolio.appendChild(project);
});

// Function to show popup window when see project button is clicked
function showPopup(number) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.id = 'popup-id';
  popup.innerHTML = `
    <div class="popup-card">
      <div class="flex">
        <h2>${projects[number].name}</h2>
        <button id="popup-close">
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
      <div class="project-type popup-type">
        <h3 class="text-font">CANOPY</h3>
        <img src="./resources/images/counter.svg" alt="counter" />
        <h4 class="text-font">Back End Dev</h4>
        <img src="./resources/images/counter.svg" alt="counter" />
        <h4 class="text-font">2015</h4>
      </div>
      ${projects[number].popupImage}
      <div class="popup-bottom">
        <div class="popup-text">
          <p>${projects[number].desktopDesc}</p>
        </div>
        <div>
          <ul>
            <li>${projects[number].technologies[0]}</li>
            <li>${projects[number].technologies[1]}</li>
            <li>${projects[number].technologies[2]}</li>
          </ul>
          <hr>
          <div class="center">
            <a href="#" class="pro-res right">See Live <img src="./resources/images/live.svg" alt="live"></a>
            <a href="#" class="pro-res">See Source <img src="./resources/images/source.svg" alt="source"></a>
          </div>
        </div>
      </div>
    </div>
  `;
  portfolio.appendChild(popup);

  // Create event listener for close button to remove the popup window on click
  const popupClose = document.getElementById('popup-close');
  popupClose.addEventListener('click', () => {
    const popup = document.getElementById('popup-id');
    portfolio.removeChild(popup);
  });
}

// Select all the see project buttons and add a click event to call the show popup function
// with the correct index
const popupButtons = document.getElementsByClassName('popup-button');
for (let i = 0; i < popupButtons.length; i += 1) {
  popupButtons[i].addEventListener('click', () => {
    showPopup(i);
  });
}

// Function to show error message
function showMessage(input, message) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  msg.className = 'error';
}

// Function to pass error message to showMessage function
function showError(input, message) {
  return showMessage(input, message);
}

// Function to validate email address
function validateEmail(input, invalidMsg) {
  const email = input.value.trim();
  if (!(email === String(email).toLowerCase())) {
    return showError(input, invalidMsg);
  }
  return true;
}

// Select form element using form id
const form = document.querySelector('#form-id');

// Default email error message
const errorMessage = 'Enter email in lowercase';

// Add submit event listener to form
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValid = validateEmail(form.elements.email, errorMessage);
  if (emailValid) {
    form.submit();
  }
});

// Create form data object
const formData = {
  name: '',
  email: '',
  message: '',
};

// Get reference to each form input element
const nameInput = document.getElementById('fname');
const emailInput = document.getElementById('email');
const textInput = document.getElementById('textarea');

// Add event listeners to each input element to update local storage on input change
nameInput.addEventListener('input', () => {
  formData.name = nameInput.value;
  localStorage.setItem('data', JSON.stringify(formData));
});

emailInput.addEventListener('input', () => {
  formData.email = emailInput.value;
  localStorage.setItem('data', JSON.stringify(formData));
});

textInput.addEventListener('input', () => {
  formData.message = textInput.value;
  localStorage.setItem('data', JSON.stringify(formData));
});

// Use local storage data to fill form inputs
if (localStorage.getItem('data')) {
  let formObject = localStorage.getItem('data');
  formObject = JSON.parse(formObject);

  document.getElementById('fname').value = formObject.name;
  document.getElementById('email').value = formObject.email;
  document.getElementById('textarea').value = formObject.message;
}