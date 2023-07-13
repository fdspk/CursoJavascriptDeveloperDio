var precoCombustivel=0
var gastoMedio=0
var distancia=0
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Preço do combustível: ", function(precoCombustivel) { //$/L
     precoCombustivel = precoCombustivel
    rl.question("Gasto medio de combustivel: ", function(gastoMedio) { //L/km
             gastoMedio = gastoMedio
            rl.question("Km rodados: ", function(distancia){ //km
                 distancia = distancia
                 var precoTotal = precoCombustivel*gastoMedio*distancia
                console.log(`Você gastou na sua viagem: ${precoTotal} reais`)
                rl.close();
            })
    })
})

rl.on("close", function() {
    process.exit(0)
});