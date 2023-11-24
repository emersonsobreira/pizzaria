let interacao = true;
const menuContant = document.querySelector(' .content');
const menuToggle = menuContant.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () =>{
    menuContant.classList.toggle('on', interacao);
    interacao =!interacao;

    
});
