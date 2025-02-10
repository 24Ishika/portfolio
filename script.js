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

// Smooth scrolling for internal links only
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');

    // If the link is to another page, allow default behavior
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }

      // Auto close the menu after a link is clicked (for mobile view)
      navLinks.classList.remove('show-nav');
      closeBtn.style.display = 'none';
      menuBtn.style.display = 'block';
    }
  });
});












