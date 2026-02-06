const botaoMenu = document.querySelector('.menu-btn');
const imagemBotao = document.querySelector('#menu-icon');
const menuNav = document.querySelector('.nav');


botaoMenu.addEventListener('click', () => {
    menuNav.classList.toggle('aberto');
    botaoMenu.classList.toggle('ativo');
    console.log("cliquei");
    const estaAberto =  menuNav.classList.contains('aberto');

    if(estaAberto) {
        imagemBotao.src = "./src/images/icon-menu-close.svg";
    } else {
        imagemBotao.src = "./src/images/icon-menu.svg";
    }
});