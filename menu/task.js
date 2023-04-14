const links = Array.from(document.querySelectorAll('.menu__link'));
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const parent = link.closest('.menu__item');       
    const submenu = parent.querySelector('.menu');    
    if (submenu) {
      event.preventDefault();
      submenu.classList.toggle('menu_active');
      if (submenu.classList.contains('menu_active')) {
        const otherSubmenus = Array.from(document.querySelectorAll('.menu_active'));
        otherSubmenus.forEach((otherSubmenu) => {
          if (otherSubmenu !== submenu) {
          otherSubmenu.classList.remove('menu_active');
          }
        });
    }
    }
  });
});