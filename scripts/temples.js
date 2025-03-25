// Toggle navigation menu visibility
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');  // Toggle the menu visibility
    
    // Change the hamburger button to 'X' when clicked
    if (menu.classList.contains('active')) {
      this.innerHTML = '&#10005;';  // 'X' symbol to close
    } else {
      this.innerHTML = '&#9776;';  // Hamburger symbol to open
    }
  });

// Update Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;




