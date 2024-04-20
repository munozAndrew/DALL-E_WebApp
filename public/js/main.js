document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a'); // Select all navbar links


    menuIcon.addEventListener('click', function() {
      menuIcon.style.display = 'none'; // Hide the menu icon
      closeIcon.style.display = 'inline-flex'; // Show the close icon
      navbar.style.height = '17.7rem';
      navLinks.forEach(link => link.classList.add('active')); // Add active class to links


    });
  
    closeIcon.addEventListener('click', function() {
      closeIcon.style.display = 'none'; // Hide the close icon
      menuIcon.style.display = 'inline-flex'; // Show the menu icon
      navbar.style.height = 0
      navLinks.forEach(link => link.classList.remove('active')); // Remove active class from links

    });

    
  });
  