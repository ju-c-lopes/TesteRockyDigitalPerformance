// lista contendo os textos maiores para telas maiores
var txtG = [

    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Labore sequi ducimus temporibus illum laboriosam corrupti, 
    eos, praesentium reiciendis non sapiente facere maxime facilis. 
    Eius, earum accusantium impedit dolorum tempore et.`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Asperiores alias qui voluptates distinctio odio, beatae nam! 
    Eum, tempore. Eos harum dolore vel voluptas, cupiditate quod 
    voluptate aliquam omnis commodi similique? Lorem ipsum dolor`,

    `sit amet, consectetur adipisicing elit. Id earum repudiandae 
    odit placeat unde aliquid! Architecto amet incidunt optio 
    consequatur aut soluta eos exercitationem, neque asperiores 
    quod, itaque eum. Cupiditate?`,

];


// lista contendo os textos menores para telas pequenas
var txtM = [

    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Praesentium aspernatur quod quisquam incidunt ut ducimus`,

    `omnis quibusdam sit nulla dicta perspiciatis, assumenda`, 

    `cum, pariatur, blanditiis dolorem est ex similique soluta.`,

];

var tela = {
    minor: window.matchMedia('(max-width: 620px)'),
    middle: window.matchMedia('(min-width: 621px) and (max-width: 1100px)'),
    greater: window.matchMedia('(min-width: 1101px)')
};

var show = false; // variável de controle para menu mobile (hamburger)
var btserv = false; // variável de controle para submenu serviços
var btdif = false;  // variável de controle para submenu diferenciais

var btn = document.querySelector('.burger');  // Imagem do botão burger
var nav = document.querySelector('.ul');  // lista de menu (full)

// função clique menu hamburger
function clica() {
    if (tela.minor.matches) {
        if (show){
            //  ******** Se o menu estiver aberto ********
            if (btserv === true) subclicar('serv');
            if (btdif === true) subclicar('dif');
            btn.style.background = 'url(./mobile/menu.png) no-repeat';
            btn.style.backgroundSize = 'contain';
            btn.style.left = '3vw';
            nav.style.visibility = 'hidden';
            show = !show;
        } else {
            // ******** Se o menu estiver fechado ********
            btn.style.background = 'url(./mobile/cancel.png) no-repeat';
            btn.style.backgroundSize = 'contain';
            btn.style.left = '45vw';
            nav.style.visibility = 'visible';
            show = !show;
        }
    }
    else {
        // Acionado na mudança de tamanho de tela
        if (btserv === true) subclicar('serv');
        if (btdif === true) subclicar('dif');
        btn.style.background = 'url(./mobile/menu.png) no-repeat';
        btn.style.backgroundSize = 'contain';
        btn.style.left = '3vw';
        show = !show;
    }
}

function subclicar(btname){
    if (show) {
        // Submenus para mobile
        var menuheight = document.querySelector('#barra').offsetHeight;
        var hs = 0;
        var hd = 0;
        if (btname === 'serv'){
            document.querySelector('#imgServ').style.transform = btserv ? 'rotateY(180deg)' : 'rotateX(180deg)';
            document.querySelector('#serv').style.visibility = btserv ? 'hidden' : 'visible';
            document.querySelector('#serv').style.height = btserv ? '0' : '100%';
            document.querySelector('#serv').style.marginTop = btserv ? '0' : '20px';
            btserv = !btserv;
            var hs = btserv ? 110 : -110;
        }
        if (btname === 'dif'){
            document.querySelector('#imgDif').style.transform = btdif ? 'rotateY(180deg)' : 'rotateX(180deg)';
            document.querySelector('#dif').style.visibility = btdif ? 'hidden' : 'visible';
            document.querySelector('#dif').style.height = btdif ? '0' : '100%';
            document.querySelector('#dif').style.marginTop = btdif ? '0' : '20px';
            btdif = !btdif;
            var hd = btdif ? 110 : -110;
        }
        
        menuheight += (hs + hd);
        document.querySelector('#barra').style.height = `${menuheight}px`;
    }
    else {
        // Submenu para telas maiores
        if (btname === 'serv'){
            document.querySelector('#imgServ').style.transform = btserv ? 'rotateY(180deg)' : 'rotateX(180deg)';
            document.querySelector('#serv').style.visibility = btserv ? 'hidden' : 'visible';
            document.querySelector('#serv').style.height = btserv ? '0' : '100%';
            document.querySelector('#serv').style.marginTop = btserv ? '0' : '20px';
            document.querySelector('#contatolink').style.color = 
                (tela.middle.matches && !btserv) ? 'rgba(255, 255, 255, .2)' : 'rgba(255, 255, 255, 1)';
            btserv = !btserv;
        }
        if (btname === 'dif'){
            document.querySelector('#imgDif').style.transform = btdif ? 'rotateY(180deg)' : 'rotateX(180deg)';
            document.querySelector('#dif').style.visibility = btdif ? 'hidden' : 'visible';
            document.querySelector('#dif').style.height = btdif ? '0' : '100%';
            document.querySelector('#dif').style.marginTop = btdif ? '0' : '20px';
            document.querySelector('#bloglink').style.color = 
                (tela.middle.matches && !btdif) ? 'rgba(255, 255, 255, .2)' : 'rgba(255, 255, 255, 1)';
            btdif = !btdif;
        }
    }
}

// Altera detalhes de mudanças de tamanho de tela
function mudar() {
    if (tela.minor.matches) {
        for (let i = 3; i < 5; i++){
            for (let j = 1; j < 4; j++){
                // imagem adequada ao tamanho da tela
                document.querySelector(`#s${i}ft${j}`).src = `./mobile/s${i}-ft${j}.png`;
                if (i === 3) {
                    // textos reduzidos para tela menor
                    document.querySelector(`#txt${j}`).innerText = txtM[j - 1];
                }
            }
        }
        document.querySelector('.logo').src = `./mobile/logo.png`
        zerar();
    }
    else {
        for (let i = 3; i < 5; i++){
            for (let j = 1; j < 4; j++){
                // imagem adequada ao tamanho da tela
                document.querySelector(`#s${i}ft${j}`).src = `./web/s${i}-ft${j}.png`;
                if (i === 3) {
                    // textos mais longos para tela maior
                    document.querySelector(`#txt${j}`).innerText = txtG[j - 1];
                }
            }
        }
        document.querySelector('.logo').src = `./web/logo.png`
        zerar();
    }    
}

function zerar() {
    if(tela.minor.matches) {
        document.querySelector('.ul').style.visibility = 'hidden';
        document.querySelector('#liSobre').style.borderTop = 'none';
        document.querySelector('#liSobre').style.paddingTop = '70px';
        if (show) clica();
        if (btserv) subclicar('serv');
        if (btdif) subclicar('dif');
        document.querySelector('#barra').style.height = '440px';
    }
    else {
        document.querySelector('.ul').style.visibility = 'visible';
        document.querySelector('#liSobre').style.borderTop = '0';
        document.querySelector('#liSobre').style.paddingTop = '15px';
        if (show) clica();
        if (btserv) subclicar('serv');
        if (btdif) subclicar('dif');
        document.querySelector('#barra').style.height = '0';
    }
}

// LISTENERS
tela.minor.addEventListener('change', mudar);
tela.middle.addEventListener('change', mudar);
tela.greater.addEventListener('change', mudar);

window.addEventListener('load', () => {
    if (tela.minor.matches) {
        document.querySelector('.ul').style.visibility = 'hidden';
        document.querySelector('#liSobre').style.borderTop = 'none';
        document.querySelector('#liSobre').style.paddingTop = '70px';
        mudar();
    }
    else {
        document.querySelector('.ul').style.visibility = 'visible';
        document.querySelector('#liSobre').style.borderTop = '0';
        document.querySelector('#liSobre').style.paddingTop = '15px';
        mudar();
    }
});