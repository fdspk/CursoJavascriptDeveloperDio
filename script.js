function calcular() {
    var precoCombustivel = Number(document.getElementById('precoCombustivel').value)
    var gastoMedio = Number(document.getElementById('gastoMedio').value)
    var distancia = Number(document.getElementById('distancia').value)
    if (precoCombustivel <= 0 || gastoMedio <= 0 || distancia <= 0) {
        alert('Insira valores válidos')
    }
    else {
        var resp = document.getElementById('resp')
        var calculo = (precoCombustivel * gastoMedio * distancia).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        resp.innerText = calculo
        resp.style.border = '1px solid black'
        resp.style.background = 'white'
    }
}

