// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

// Check if both elements exist to avoid errors
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation links container
    navLinks.classList.toggle('active');
    
    // Update the aria-expanded attribute for accessibility
    const isOpen = navLinks.classList.contains('active');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close the mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    // Check if the mobile menu is open (via screen width)
    if (window.innerWidth < 640) {
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', false);
    }
  }));
}

// Filters (for projects and certificates)
function applyFilter(group, value){
  document.querySelectorAll(`.filter[data-group="${group}"]`)
    .forEach(btn => btn.classList.toggle('is-active', btn.dataset.filter === value));
  document.querySelectorAll(`[data-group="${group}"][data-tags]`)
    .forEach(el => {
      const tags = (el.dataset.tags || '').split(',').map(t => t.trim());
      const show = value === 'all' || tags.includes(value);
      el.style.display = show ? '' : 'none';
    });
}
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => applyFilter(btn.dataset.group, btn.dataset.filter));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();