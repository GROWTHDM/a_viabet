const btn = document.getElementById('btn');

let time01 = document.getElementById('aviatorTime01');
let time02 = document.getElementById('aviatorTime02');




// gerar um numero aleatorio entre min e max
function getRandomDecimal(min, max) {
    return Math.random() * (max - min) + min;
}

// formatar um numero com duas casas decimais
function formatDecimal(number) {
    return number.toFixed(2);
}

// executar o contador
function runDecimalCounter() {
    const valorInicial = 1.00; // valor inicial
    const valorFinal = getRandomDecimal(1.50, 2.50); // valor final aleatório
    const passo = 0.01; // passa (0.01 para manter duas casas decimais)

    let valorAtual = valorInicial;

    const intervalo = setInterval(() => {
        time01.innerHTML = (formatDecimal(valorAtual) + "X");

        if (valorAtual >= valorFinal) {
            clearInterval(intervalo);
        }

        valorAtual += passo;
    }, 30); // intervalo de 100ms entre cada incremento
}


    btn.addEventListener('click', function() {
        runDecimalCounter();
    });



// segundo botão -----



function getRandomDecimalTwo(min, max) {
    return Math.random() * (max - min) + min;
}

// formatar um numero com duas casas decimais
function formatDecimalTwo(number) {
    return number.toFixed(2);
}

// executar o contador
function runDecimalCounterTwo() {
    const valorInicial = 1.00; // valor inicial
    const valorFinal = getRandomDecimalTwo(1.50, 2.50); // valor final aleatório
    const passo = 0.01; // passa (0.01 para manter duas casas decimais)

    let valorAtual = valorInicial;

    const intervalo = setInterval(() => {
        time02.innerHTML = (formatDecimalTwo(valorAtual) + "X");

        if (valorAtual >= valorFinal) {
            clearInterval(intervalo);
        }

        valorAtual += passo;
    }, 30); // intervalo de 100ms entre cada incremento

}

btn.addEventListener('click', function() {
    runDecimalCounterTwo();
});


let countdown = 40;

let countdownTimer = null;

const atualizarBotao = () => {
    --countdown;
    btn.innerText = "PRÓXIMA TENTATIVA EM: " + countdown + "s...";
    btn.style.fontSize = '100%';
    if (countdown === 0) {
        finishCountdownTimer();
    }
}

const finishCountdownTimer = () => {
    clearInterval(countdownTimer);
    btn.innerText = 'A T U A L I Z A R';
    btn.style.fontSize = '100%';
    btn.disabled = false;
    countdown = 40;
}

btn.addEventListener('click', function(e){
    e.preventDefault;
    btn.disabled = true;

    countdownTimer = setInterval(atualizarBotao, 1000)
})