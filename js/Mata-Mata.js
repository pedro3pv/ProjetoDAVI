let vencedores = []

let entrada = []
let entrada2 = []
let entradaQ = []
let entradaS = []
let entradaT = []
let entradaF = []

let quartas = []
let semifinal = []
let lugar3 = []
let final = []
let ganhador = 0

let sequencia = [0,3,4,7,6,5,2,1,8,11,12,15,10,9,14,13]
let sequencia2 = ["1A","2A","1B","2B","1C","2C","1D","2D","1E","2E","1F","2F","1G","2G","1H","2H"]
let divisao = []
let divisao2 = []
let aux = 0
let aux2 = 0
// 0 3 4 7 6 5 2 1 8 11 12 15 10 9 14 13

for (let u = 0; u <= 15; u++) {
        vencedores[u] = localStorage.getItem("vencedores[" + u + "]")
        document.getElementById(sequencia2[u]).innerHTML = vencedores[u]
        entrada2[u] = localStorage.getItem("oitavas"+u)
        document.getElementById("O"+u).value = entrada2[u]
        if(sequencia[u] % 2 == 0){
                divisao[aux] = sequencia[u]
                aux++
        }else if(sequencia[u] % 2 != 0){
                divisao2[aux2] = sequencia[u]
                aux2++
        }
}
for (let z = 0; z <= 7; z++) {
        entradaQ[z] = localStorage.getItem("quartas"+z)
        document.getElementById("Q"+z).value = entradaQ[z]
}
for (let z = 0; z < 4; z++) {
        entradaS[z] = localStorage.getItem("terceiro"+z)
        document.getElementById("S"+z).value = entradaS[z]
}
for (let z = 0; z < 2; z++) {
        entradaT[z] = localStorage.getItem("terceiroE"+z)
        document.getElementById("T"+z).value = entradaT[z]
}
for (let z = 0; z < 2; z++) {
        entradaF[z] = localStorage.getItem("final"+z)
        document.getElementById("F"+z).value = entradaF[z]
}

for (let z = 0; z <= 7; z++) {verificador(divisao[z],divisao2[z],z)}
let contadorJ = 0
for (let z = 0; z < 8; z = z + 2) {
        verificadorQ(z,z+1,contadorJ)
        contadorJ++
}
let contadorJ2 = 0
for (let z = 0; z < 4; z = z + 2) {
        verificadorS(z,z+1,contadorJ2)
        contadorJ2++
}
for (let z = 0; z <= 15; z++) {
        document.getElementById("img"+z).src="img/"+vencedores[sequencia[z]]+".png"
}
for (let z = 0; z < 8; z++) {
        document.getElementById("img"+z+"Q").src="img/"+quartas[z]+".png"
}
for (let z = 0; z < 4; z++) {
        document.getElementById("img"+z+"S").src="img/"+semifinal[z]+".png"
}
for (let z = 0; z < 2; z++) {
        document.getElementById("img"+z+"T").src="img/"+lugar3[z]+".png"
        document.getElementById("img"+z+"F").src="img/"+final[z]+".png"
}

document.oninput = function () {
        for (let z = 0; z <= 7; z++) {
                verificador(divisao[z],divisao2[z],z)
        }
        for (let z = 0; z <= 15; z++) {
                document.getElementById("img"+z).src="img/"+vencedores[sequencia[z]]+".png"
        }
        let contadorJ = 0
        for (let z = 0; z < 8; z = z + 2) {
                verificadorQ(z,z+1,contadorJ)
                contadorJ++
        }
        for (let z = 0; z < 8; z++) {
                document.getElementById("img"+z+"Q").src="img/"+quartas[z]+".png"
        }
        let contadorJ2 = 0
        for (let z = 0; z < 4; z = z + 2) {
                verificadorS(z,z+1,contadorJ2)
                contadorJ2++
        }
        for (let z = 0; z < 4; z++) {
                document.getElementById("img"+z+"S").src="img/"+semifinal[z]+".png"
        }
        for (let z = 0; z < 2; z++) {
                document.getElementById("img"+z+"T").src="img/"+lugar3[z]+".png"
                document.getElementById("img"+z+"F").src="img/"+final[z]+".png"
        }
}

function verificador(x, y, j) {
        enter()
        if (entrada[x] > entrada[y]) {
                quartas[j] = vencedores[x]
                document.getElementById("Q"+j+"T").innerHTML = quartas[j]
        } else if (entrada[x] < entrada[y]) {
                quartas[j] = vencedores[y]
                document.getElementById("Q"+j+"T").innerHTML = quartas[j]
        }
}

function verificadorQ(x,y,j){
        enter()
        if (entradaQ[x] > entradaQ[y] && quartas[x] != undefined) {
                semifinal[j] = quartas[x]
                document.getElementById("S"+j+"T").innerHTML = semifinal[j]
        } else if (entradaQ[x] < entradaQ[y] && quartas[y] != undefined) {
                semifinal[j] = quartas[y]
                document.getElementById("S"+j+"T").innerHTML = semifinal[j]
        }
}

function verificadorS(x,y,j){
        enter()
        if (entradaS[x] > entradaS[y] && semifinal[x] != undefined) {
                lugar3[j] = semifinal[y]
                final[j] = semifinal[x]
                document.getElementById("T"+j+"T").innerHTML = lugar3[j]
                document.getElementById("F"+j+"T").innerHTML = final[j]
        } else if (entradaS[x] < entradaS[y] && semifinal[y] != undefined) {
                lugar3[j] = semifinal[x]
                final[j] = semifinal[y]
                document.getElementById("T"+j+"T").innerHTML = lugar3[j]
                document.getElementById("F"+j+"T").innerHTML = final[j]
        }
}
function verificadorF(x,y){
        enter()
        if (entradaF[x] > entradaF[y] && final[x] != undefined) {
                ganhador = final[x]
        } else if (entradaF[x] < entradaF[y] && final[y] != undefined) {
                ganhador = final[y]
        }
}

function enter() {
        for (let q = 0; q <= 15; q++) {
                if (document.getElementById("O" + q).value != "") {
                        entrada2[q] = document.getElementById("O" + q).value
                }
        }
        for (let a = 0; a <= 7; a++) {
                if (document.getElementById("Q" + a).value != "") {
                        entradaQ[a] = document.getElementById("Q" + a).value
                        localStorage.setItem("quartas" + a, parseInt(entradaQ[a]))
                }
        }
        for (let a = 0; a <= 3; a++) {
                if (document.getElementById("S" + a).value != "") {
                        entradaS[a] = document.getElementById("S" + a).value
                        localStorage.setItem("terceiro" + a, parseInt(entradaS[a]))
                }
        }
        for (let a = 0; a <= 1; a++) {
                if (document.getElementById("T" + a).value != "" && document.getElementById("F" + a).value != null && document.getElementById("F" + a).value != "") {
                        entradaT[a] = document.getElementById("T" + a).value
                        localStorage.setItem("terceiroE" + a, parseInt(entradaT[a]))
                        entradaF[a] = document.getElementById("F" + a).value
                        localStorage.setItem("final" + a, parseInt(entradaF[a]))
                }
        }
        for(let h = 0;h <= 15;h++){
                localStorage.setItem("oitavas" + h, parseInt(entrada2[h]))
                entrada[sequencia[h]] = parseInt(entrada2[h])
        }
}
function vencedor(){
        verificadorF(0,1)
        localStorage.setItem("ganhador",ganhador)
        window.location.href = "vencedor.html"
}
function voltarGrupo(){
        window.location.href = "index.html"  
}