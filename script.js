// Selecting the menu and close buttons
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.querySelector('.nav-links');

// Initially hide the close button
closeBtn.style.display = 'none';

// Toggle menu visibility when clicking the menu button (☰)
menuBtn.addEventListener('click', () => {
  navLinks.classList.add('show-nav');  // Show the navigation links
  menuBtn.style.display = 'none';      // Hide the hamburger menu (☰)
  closeBtn.style.display = 'block';    // Show the close button (✖)
});

// Hide the menu when clicking the close button (✖)
closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('show-nav'); // Hide the navigation links
  closeBtn.style.display = 'none';       // Hide the close button (✖)
  menuBtn.style.display = 'block';       // Show the hamburger menu (☰)
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });

    // Auto close the menu after a link is clicked (for mobile view)
    navLinks.classList.remove('show-nav');
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
  });
});


// Add a parallax effect for About, Skills, Projects, Contact, and Footer Sections
const aboutSection = document.querySelector('#about');
const skillsSection = document.querySelector('#skills');
const projectsSection = document.querySelector('#projects');
const contactSection = document.querySelector('#contact');
const footerSection = document.querySelector('#footer');

window.addEventListener('scroll', () => {
  const aboutRect = aboutSection.getBoundingClientRect();
  const skillsRect = skillsSection.getBoundingClientRect();
  const projectsRect = projectsSection.getBoundingClientRect();
  const contactRect = contactSection.getBoundingClientRect();

  // Freeze About Section
  if (aboutRect.bottom >= window.innerHeight / 2 && skillsRect.top <= window.innerHeight) {
    aboutSection.style.position = 'sticky';
    aboutSection.style.top = '0';
  } else {
    aboutSection.style.position = 'relative';
  }

  // Freeze Skills Section
  if (skillsRect.bottom >= window.innerHeight / 2 && projectsRect.top <= window.innerHeight) {
    skillsSection.style.position = 'sticky';
    skillsSection.style.top = '0';
  } else {
    skillsSection.style.position = 'relative';
  }

  // Freeze Projects Section
  if (projectsRect.bottom >= window.innerHeight / 2 && contactRect.top <= window.innerHeight) {
    projectsSection.style.position = 'sticky';
    projectsSection.style.top = '0';
  } else {
    projectsSection.style.position = 'relative';
  }

});

