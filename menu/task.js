// Получаем список всех элементов меню
const menuItems = document.querySelectorAll('.menu__item');
// Добавляем обработчик события "наведения курсора мыши" на каждый элемент меню
for (item of menuItems)
 menuItems.forEach(function(item) {
     const link = item.querySelector('.menu__link');
     const subMenu = item.querySelector('.menu_sub');       
// Показываем подменю при наведении курсора мыши на элемент  
   link.addEventListener('mouseover', function() {
   subMenu.classList.add('menu_active');   
   });
   item.addEventListener('mouseleave', function() {
     subMenu.classList.remove('menu_active');
   });    
 });    
