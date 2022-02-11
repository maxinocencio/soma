let sorteado1 = Math.floor(Math.random() * (100)+1)
let sorteado2 = Math.floor(Math.random() * (100)+1)

let pontuacao = 0;

onload =  sortear()

function sortear() {
    let valor1 = document.getElementById('valor1')
    let valor2 = document.getElementById('valor2')
    valor1.innerText = sorteado1
    valor2.innerText = sorteado2
}

document.getElementById("confirma").onclick = function() {

    let mostraresultado = document.getElementById('resultado')

    if (document.getElementById('check').value.length == 0) {
        alert('Digite o resultado')
    }

    else {
        let checar = document.getElementById("check").value
        let resultado = sorteado1 + sorteado2
    
        if (checar != resultado) {
            mostraresultado.innerText = 'Errado'
            /*setTimeout(() => {
                location.reload();
            }, 1000); */
        }
        else {
            mostraresultado.innerText = 'Certo'
            pontuacao += 1
            console.log(pontuacao)
            /*setTimeout(() => {
                location.reload();
            }, 1000); */
        }
    }
} 