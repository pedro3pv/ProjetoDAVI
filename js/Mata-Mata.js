let vencedores = []

let entrada = []
let entrada2 = []

let quartas = []

let j = 0

let sequencia = [0,3,4,7,6,5,2,1,8,11,12,15,10,9,14,13]
let sequencia2 = ["1A","2A","1B","2B","1C","2C","1D","2D","1E","2E","1F","2F","1G","2G","1H","2H"]
let temp = []
let temp2 = []
let aux = 0
let aux2 = 0
// 0 3 4 7 6 5 2 1 8 11 12 15 10 9 14 13

for (let u = 0; u <= 15; u++) {
        vencedores[u] = localStorage.getItem("vencedores[" + u + "]")
        entrada2[u] = sessionStorage.getItem("oitavas"+u)
        document.getElementById("O"+u).value = entrada2[u]
        if(sequencia[u] % 2 == 0){
                temp[aux] = sequencia[u]
                aux++
        }else if(sequencia[u] % 2 != 0){
                temp2[aux2] = sequencia[u]
                aux2++
        }
}

for (let z = 0; z <= 7; z++) {verificador(temp[z],temp2[z],z)}

document.oninput = function () {for (let z = 0; z <= 7; z++) {verificador(temp[z],temp2[z],z)}}

for (let g = 0; g <= 15; g++) document.getElementById(sequencia2[g]).innerHTML = vencedores[g]

function verificador(x, y, j) {
        enter()
        if (entrada[x] > entrada[y] && entrada[y] != "" && entrada[x] != "") {
                quartas[j] = vencedores[x]
                document.getElementById("Q"+j+"T").innerHTML = quartas[j]
        } else if (entrada[x] < entrada[y] && entrada[y] != "" && entrada[x] != "") {
                quartas[j] = vencedores[y]
                document.getElementById("Q"+j+"T").innerHTML = quartas[j]
        }
}
function enter() {
        for (let q = 0; q <= 15; q++) {
                if (document.getElementById("O" + q).value != null && document.getElementById("O" + q).value != "") {
                        entrada2[q] = document.getElementById("O" + q).value
                }
        }
        for(let h = 0;h <= 15;h++){
                        sessionStorage.setItem("oitavas" + h, parseInt(entrada2[h]))
                        entrada[sequencia[h]] = parseInt(entrada2[h])
        }
}