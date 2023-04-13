const modal_main = document.querySelector(".modal"),
      show_success = document.querySelector(".show_success"),
      btn_danger = document.querySelector('.btn_danger'),
      btn_success = document.querySelector('.btn_success');  
      modal__close = document.querySelector('.modal__close');  

modal_main.style.cssText = `display: flex`;

btn_danger.onclick = function() {    
    btn_danger.className =  btn_success.className;  
    btn_danger.text = btn_success.text;  
    }

modal__close.onclick = function() {
    modal_main.style.cssText = `display: none`;    
}

btn_danger.addEventListener('click', openModal);
modal__close.addEventListener('click', modal__close);