// modal abre e fecha tela iniciar jogo
const Modal = {
    open() {
        //Abrir modal
        // Adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active');

    },
    close() {
        // fechar o modal
        // remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active');


    },
    winOpen() {
        debugger;
        document
            .querySelector('.modalVencedor')
            .classList
            .add('active');
        debugger;
    },
    winClose() {
        debugger;
        document
            .querySelector('.modalVencedor')
            .classList
            .remove('active');
        debugger;
    }
}




// * definindo o objeto do jogadores com nome, opção X ou O e Sua jogadas
const jogadorX = {};
const jogadorO = {};




// * pegando as divs de jogo
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');



//* criando um array das divs para usar em loops    
const box = [box1, box2, box3, box4, box5, box6, box7, box8, box9];


//* placar

const placarX = document.getElementById('placarX')
const placarO = document.getElementById('placarO')



// * Sessão das functions



function ocultaBox() {
    debugger;
    for (let i = 0; i < 9; i++) {
        box[i].hidden = true;
    };
};
ocultaBox();

let pontoX = 0
let pontoO = 0

function mostrarBox() {
    debugger;
    for (let i = 0; i < 9; i++) {
        box[i].hidden = false;
    };
    document.querySelector('.main-header').classList.remove('hidden');
    document.getElementById("playerX").innerHTML = jogadorX.nome
    document.getElementById("escolhaX").innerHTML = jogadorX.escolha
    document.getElementById("playerO").innerHTML = jogadorO.nome
    document.getElementById("escolhaO").innerHTML = jogadorO.escolha
    debugger;
    placarX.innerHTML = pontoX
    placarO.innerHTML = pontoO
};

function posVitoria() {
    debugger;
    ocultaBox();
    for (let i = 0; i < 9; i++) {
        box[i].hidden = false;
        debugger;
    };
    const jX = jogadorX.nome
    const jXCho = jogadorX.escolha
    const jO = jogadorO.nome
    const jOcho = jogadorO.escolha
    document.querySelector('.main-header').classList.remove('hidden');
    document.getElementById("playerX").innerHTML = jX
    document.getElementById("escolhaX").innerHTML = jXCho
    document.getElementById("playerO").innerHTML = jO
    document.getElementById("escolhaO").innerHTML = jOcho
    debugger;
    placarX.innerHTML = pontoX
    placarO.innerHTML = pontoO
    debugger;
    Modal.winClose();
}

function identificaPlayer() {
    debugger;
    const valueoption1 = document.getElementById('choose1').value;
    const valueoption2 = document.getElementById('choose2').value;


    if (valueoption1 == 'X') {
        jogadorX.nome = document.getElementById('nome1').value;
        jogadorX.escolha = valueoption1;
        //jogadorX.jogadas = [];

        jogadorO.nome = document.getElementById('nome2').value;
        jogadorO.escolha = valueoption2;
        //jogadorO.jogadas = [];
    } else {
        jogadorX.nome = document.getElementById('nome2').value;
        jogadorX.escolha = valueoption2;
        //jogadorX.jogadas = [];

        jogadorO.nome = document.getElementById('nome1').value;
        jogadorO.escolha = valueoption1;
        //jogadorO.jogadas = [];  
    }



}
// ! botão cancelar partida
const cancelar = document.getElementById('cancelar');
cancelar.addEventListener('click', () => {
    Modal.close();
})

// ! botão Inciar partida
const btnNovoJogo = document.getElementById('iniciar');

btnNovoJogo.addEventListener('click', () => {
    identificaPlayer();
    mostrarBox();
    Modal.close();
    jogadorAleatorio();

});

function rodada1() {
    debugger;
    //VerificaSeGanhou();
    document.getElementById('suaVez').innerHTML = `Sua vez ${jogadorX.nome}`;
    for (let j = 0; j < box.length; j++) {
        debugger;
        if (box[j].value != 'O') {
            box[j].innerHTML = 'X'
        }
    }



    box1.onclick = () => {
        debugger;
        box1.style.color = "#000000"
        debugger;
        box1.value = 'X'
        debugger;
        //jogadorX.jogadas.push(1)
        VerificaSeGanhou1();
    }
    box2.onclick = () => {
        debugger;
        box2.style.color = "#000000"
        debugger;
        box2.value = 'X'
        debugger;
        //jogadorX.jogadas.push(2)
        VerificaSeGanhou1();
    }
    box3.onclick = () => {
        debugger;
        box3.style.color = "#000000"
        debugger;
        box3.value = 'X'
        debugger;
        //jogadorX.jogadas.push(3)
        VerificaSeGanhou1();
    }
    box4.onclick = () => {
        debugger;
        box4.style.color = "#000000"
        debugger;
        box4.value = 'X'
        debugger;
        //jogadorX.jogadas.push(4)
        VerificaSeGanhou1();

    }
    box5.onclick = () => {
        debugger;
        box5.style.color = "#000000"
        debugger;
        box5.value = 'X'
        debugger;
        //jogadorX.jogadas.push(5)
        VerificaSeGanhou1();
    }
    box6.onclick = () => {
        debugger;
        box6.style.color = "#000000"
        debugger;
        box6.value = 'X'
        debugger;
        //jogadorX.jogadas.push(6)
        VerificaSeGanhou1();
    }
    box7.onclick = () => {
        debugger;
        box7.style.color = "#000000"
        debugger;
        box7.value = 'X'
        debugger;
        //jogadorX.jogadas.push(7)
        VerificaSeGanhou1();
    }
    box8.onclick = () => {
        debugger;
        box8.style.color = "#000000"
        debugger;
        box8.value = 'X'
        debugger;
        //jogadorX.jogadas.push(8)
        VerificaSeGanhou1();
    }
    box9.onclick = () => {
        debugger;
        box9.style.color = "#000000"
        debugger;
        box9.value = 'X'
        debugger;
        //jogadorX.jogadas.push(9)
        VerificaSeGanhou1();
    }
}

function rodada2() {
    debugger;
    document.getElementById('suaVez').innerHTML = `Sua vez ${jogadorO.nome}`;
    debugger;
    for (let j = 0; j < box.length; j++) {
        debugger;
        if (box[j].value != 'X') {
            box[j].innerHTML = 'O'
        }

    }
    
    box1.onclick = () => {
        debugger;
        box1.style.color = "#000000"
        debugger;
        box1.value = 'O'
        debugger;
        //jogadorO.jogadas.push(1)
        VerificaSeGanhou2();
    }
    box2.onclick = () => {
        debugger;
        box2.style.color = "#000000"
        debugger;
        box2.value = 'O'
        debugger;
        //jogadorO.jogadas.push(2)
        VerificaSeGanhou2();
    }
    box3.onclick = () => {
        debugger;
        box3.style.color = "#000000"
        debugger;
        box3.value = 'O'
        debugger;
        //jogadorO.jogadas.push(3)
        VerificaSeGanhou2();
    }
    box4.onclick = () => {
        debugger;
        debugger;
        box4.style.color = "#000000"
        debugger;
        box4.value = 'O'
        debugger;
        //jogadorO.jogadas.push(4)
        VerificaSeGanhou2();
    }
    box5.onclick = () => {
        debugger;
        box5.style.color = "#000000"
        debugger;
        box5.value = 'O'
        debugger;
        //jogadorO.jogadas.push(5)
        VerificaSeGanhou2();
    }
    box6.onclick = () => {
        debugger;
        box6.style.color = "#000000"
        debugger;
        box6.value = 'O'
        debugger;
        //jogadorO.jogadas.push(6)
        VerificaSeGanhou2();
    }
    box7.onclick = () => {
        debugger;
        box7.style.color = "#000000"
        debugger;
        box7.value = 'O'
        debugger;
        //jogadorO.jogadas.push(7)
        VerificaSeGanhou2();
    }
    box8.onclick = () => {
        debugger;
        box8.style.color = "#000000"
        debugger;
        box8.value = 'O'
        debugger;
        //jogadorO.jogadas.push(8)
        VerificaSeGanhou2();
    }
    box9.onclick = () => {
        debugger;
        box9.style.color = "#000000"
        debugger;
        box9.value = 'O'
        debugger;
        //jogadorO.jogadas.push(9)
        VerificaSeGanhou2();
    }
}

function VerificaSeGanhou1() {
    //* Verificando se o Jogador X ganhou

    if (box1.value === 'X' &&
        box2.value === 'X' &&
        box3.value === 'X') {


        debugger;

        debugger;
        pontoX++
        debugger;
        placarX.innerHTML = pontoX
        debugger;
        modalVencedorX();


    }


    else if (box1.value === 'X' &&
        box4.value === 'X' &&
        box7.value === 'X') {



        debugger;

        debugger;
        pontoX++
        debugger;
        placarX.innerHTML = pontoX
        debugger;
        modalVencedorX();

    }


    else if (box1.value === 'X' &&
        box5.value === 'X' &&
        box9.value === 'X') {



        debugger;

        debugger;
        pontoX++
        debugger;
        placarX.innerHTML = pontoX
        debugger;
        modalVencedorX();

    }


    else if (box2.value === 'X' &&
        box5.value === 'X' &&
        box8.value === 'X') {



        debugger;

        debugger;
        pontoX++
        debugger;
        placarX.innerHTML = pontoX
        debugger;
        modalVencedorX();


    }
    else if (box3.value === 'X' &&
        box6.value === 'X' &&
        box9.value === 'X') {

        debugger;

        debugger;
        pontoX++
        debugger;
        placarX.innerHTML = pontoX
        debugger;
        modalVencedorX();

    }



    else if (box4.value === 'X' &&
        box5.value === 'X' &&
        box6.value === 'X') {


        debugger;
        debugger;
        pontoX++
        debugger;
        placarX.innerHTML = pontoX
        debugger;
        modalVencedorX();

    }


    else if (box7.value === 'X' &&
        box8.value === 'X' &&
        box9.value === 'X') {

        debugger;

        debugger;
        pontoX++
        debugger;
        placarX.innerHTML = pontoX
        debugger;
        modalVencedorX();

    }
    
    else if (
        box3.value === 'X' &&
        box5.value === 'X' &&
        box7.value === 'X') {

        debugger;
        debugger;
        pontoX++
        debugger;
        placarX.innerHTML = pontoX
        debugger;
        modalVencedorX();
    }
    else if (box1.value === "X" || box1.value === "O") {
        debugger;
        if (box2.value === "X" || box2.value === "O") {
            debugger;
            if (box3.value === "X" || box3.value === "O") {
                debugger;
                if (box4.value === "X" || box4.value === "O") {
                    debugger;
                    if (box5.value === "X" || box5.value === "O") {
                        debugger;
                        if (box6.value === "X" || box6.value === "O") {
                            debugger;
                            if (box7.value === "X" || box7.value === "O") {
                                debugger;
                                if (box8.value === "X" || box8.value === "O") {
                                    debugger;
                                    if (box9.value === "X" || box9.value === "O") {
                                        modalEmpate();
                                    } else rodada2();
                                } else rodada2();
                            } else rodada2();
                        } else rodada2();
                    } else rodada2();
                } else rodada2();
            } else rodada2();
        } else rodada2();

    }
           
    else {

        rodada2();

    }


}

function VerificaSeGanhou2() {
    debugger;


    //* Verificando se o Jogador O ganhou

    if (box1.value === 'O' &&
        box2.value === 'O' &&
        box3.value === 'O') {
        debugger;




        //* chamando função de Vitoria que pergunta se quer continuar o jogo somando os ponto ou parar o jogo

        debugger;
        pontoO++
        debugger;
        placarO.innerHTML = pontoO
        debugger;
        modalVencedorO();
    }

    else if (box1.value === 'O' &&
        box4.value === 'O' &&
        box7.value === 'O') {
        debugger;


        debugger;
        pontoO++
        debugger;
        placarO.innerHTML = pontoO
        debugger;
        modalVencedorO();
    }

    else if (box1.value === 'O' &&
        box5.value === 'O' &&
        box9.value === 'O') {

        debugger;

        debugger;
        pontoO++
        debugger;
        placarO.innerHTML = pontoO
        debugger;
        modalVencedorO();


    }


    else if (box2.value === 'O' &&
        box5.value === 'O' &&
        box8.value === 'O') {

        debugger;

        debugger;
        pontoO++
        debugger;
        placarO.innerHTML = pontoO
        debugger;
        modalVencedorO();
    }


    else if (box3.value === 'O' &&
        box6.value === 'O' &&
        box9.value === 'O') {

        debugger;


        debugger;
        pontoO++
        debugger;
        placarO.innerHTML = pontoO
        debugger;
        modalVencedorO();

    }


    else if (box4.value === 'O' &&
        box5.value === 'O' &&
        box6.value === 'O') {


        debugger;

        debugger;
        pontoO++
        debugger;
        placarO.innerHTML = pontoO
        debugger;
        modalVencedorO();

    }


    else if (box7.value === 'O' &&
        box8.value === 'O' &&
        box9.value === 'O') {

        debugger;

        debugger;
        pontoO++
        debugger;
        placarO.innerHTML = pontoO
        debugger;
        modalVencedorO();

    }

    else if (box3.value === 'O' &&
        box5.value === 'O' &&
        box7.value === 'O') {


        debugger;

        debugger;
        pontoO++
        debugger;
        placarO.innerHTML = pontoO
        debugger;
        modalVencedorO();

    } else if (box1.value === "X" || box1.value === "O") {
        debugger;
        if (box2.value === "X" || box2.value === "O") {
            debugger;
            if (box3.value === "X" || box3.value === "O") {
                debugger;
                if (box4.value === "X" || box4.value === "O") {
                    debugger;
                    if (box5.value === "X" || box5.value === "O") {
                        debugger;
                        if (box6.value === "X" || box6.value === "O") {
                            debugger;
                            if (box7.value === "X" || box7.value === "O") {
                                debugger;
                                if (box8.value === "X" || box8.value === "O") {
                                    debugger;
                                    if (box9.value === "X" || box9.value === "O") {
                                        modalEmpate();
                                    } else rodada1();
                                } else rodada1();
                            } else rodada1();
                        } else rodada1();
                    } else rodada1();
                } else rodada1();
            } else rodada1();
        } else rodada1();

    }
    else {
        console.log('Passou!')
        rodada1();

    }


}




const CONTINUAR = document.getElementById('continuar')
const PARAR = document.getElementById('parar')


function modalVencedorX() {
    debugger;


    let vencedor = document.getElementById('vencedor')
    vencedor.innerHTML = jogadorX.nome + " Venceu a partida"



    Modal.winOpen();


    debugger;
    CONTINUAR.addEventListener('click', () => {



        limpando();
        jogadorAleatorio();


    })


    PARAR.addEventListener('click', () => {

        debugger;
        document.location.reload(true);


    })

}
function modalVencedorO() {
    debugger;


    let vencedor = document.getElementById('vencedor')
    vencedor.innerHTML = jogadorO.nome + " Venceu a partida"



    Modal.winOpen();


    debugger;
    CONTINUAR.addEventListener('click', () => {

        limpando();
        jogadorAleatorio();
    })



    PARAR.addEventListener('click', () => {

        debugger;
        document.location.reload(true);


    })

}
function modalEmpate() {
    debugger;


    let vencedor = document.getElementById('vencedor')
    vencedor.innerHTML = "Empate <br> Deseja  continuar?"



    Modal.winOpen();


    debugger;
    CONTINUAR.addEventListener('click', () => {

        limpando();
        jogadorAleatorio();
    })



    PARAR.addEventListener('click', () => {

        debugger;
        document.location.reload(true);


    })

}

function limpando() {
    debugger;
    for (let i = 0; i < box.length; i++) {
        box[i].innerHTML = ''
        box[i].value = ''
        box[i].style.color = '#0d95ca'
        debugger;
    }
    posVitoria();
    debugger;
    //document.location.reload(true);

    debugger;
    //jogadorAleatorio();


}



function jogadorAleatorio() {
    let quemComeça = Math.floor(Math.random() * 10);
    debugger;

    if (quemComeça % 2 == 0) {
        debugger;
        rodada1();
    }
    else if (quemComeça % 2 == 1) {
        debugger;
        rodada2();
    }
}

