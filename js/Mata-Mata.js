let vencedores = []

let entrada = []
<<<<<<< HEAD
<<<<<<< HEAD

let quartas = []

let jogo = []

let cont = 0
let cont2 = 0

=======
let entrada2 = []

let quartas = []

let j = 0

let sequencia = [0,3,4,7,6,5,2,1,8,11,12,15,10,9,14,13]
let sequencia2 = ["1A","2A","1B","2B","1C","2C","1D","2D","1E","2E","1F","2F","1G","2G","1H","2H"]
let temp = []
let temp2 = []
let aux = 0
let aux2 = 0
>>>>>>> parent of 928cbb9 (javascript pronto)
=======

let quartas = []

let jogo = []

let cont = 0
let cont2 = 0

>>>>>>> parent of 869fe3e (Merge branch 'main' of https://github.com/pedro3pv/ProjetoDAVI)
// 0 3 4 7 6 5 2 1 8 11 12 15 10 9 14 13

for (let u = 0; u <= 15; u++) {
        vencedores[u] = localStorage.getItem("vencedores[" + u + "]")
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 869fe3e (Merge branch 'main' of https://github.com/pedro3pv/ProjetoDAVI)
}
document.getElementById("1A").innerHTML = vencedores[0]
document.getElementById("2A").innerHTML = vencedores[1]
document.getElementById("1B").innerHTML = vencedores[2]
document.getElementById("2B").innerHTML = vencedores[3]
document.getElementById("1C").innerHTML = vencedores[4]
document.getElementById("2C").innerHTML = vencedores[5]
document.getElementById("1D").innerHTML = vencedores[6]
document.getElementById("2D").innerHTML = vencedores[7]
document.getElementById("1E").innerHTML = vencedores[8]
document.getElementById("2E").innerHTML = vencedores[9]
document.getElementById("1F").innerHTML = vencedores[10]
document.getElementById("2F").innerHTML = vencedores[11]
document.getElementById("1G").innerHTML = vencedores[12]
document.getElementById("2G").innerHTML = vencedores[13]
document.getElementById("1H").innerHTML = vencedores[14]
document.getElementById("2H").innerHTML = vencedores[15]

<<<<<<< HEAD
=======
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
>>>>>>> parent of 928cbb9 (javascript pronto)
=======
>>>>>>> parent of 869fe3e (Merge branch 'main' of https://github.com/pedro3pv/ProjetoDAVI)
function enter() {
        for (let q = 0; q <= 15; q++) {
                if (document.getElementById("O" + q).value != null) {
                        entrada[q] = document.getElementById("O" + q).value
                }
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 869fe3e (Merge branch 'main' of https://github.com/pedro3pv/ProjetoDAVI)
}

document.getElementById("O0").oninput = function () {
        enter()
        verificador(0, 3, 0)
}
document.getElementById("O1").oninput = function () {
        enter()
        verificador(0, 3, 0)
}
document.getElementById("O2").oninput = function () {
        enter()
        verificador(4, 7, 1)
}
document.getElementById("O3").oninput = function () {
        enter()
        verificador(4, 7, 1)
}
document.getElementById("O4").oninput = function () {
        enter()
        verificador(6, 5, 2)
}
document.getElementById("O5").oninput = function () {
        enter()
        verificador(6, 5, 2)
}
document.getElementById("O6").oninput = function () {
        enter()
        verificador(2, 1, 3)
}
document.getElementById("O7").oninput = function () {
        enter()
        verificador(2, 1, 3)
}
document.getElementById("O8").oninput = function () {
        enter()
        verificador(8, 11, 4)
}
document.getElementById("O9").oninput = function () {
        enter()
        verificador(8, 11, 4)
}
document.getElementById("O10").oninput = function () {
        enter()
        verificador(12, 15, 5)
}
document.getElementById("O11").oninput = function () {
        enter()
        verificador(12, 15, 5)
}
document.getElementById("O12").oninput = function () {
        enter()
        verificador(10, 9, 6)
}
document.getElementById("O13").oninput = function () {
        enter()
        verificador(10, 9, 6)
}
document.getElementById("O14").oninput = function () {
        enter()
        verificador(14, 13, 7)
}
document.getElementById("O15").oninput = function () {
        enter()
        verificador(14, 13, 7)
}

function verificador(x, y, j) {
        if(jogo[j] == null){
                jogo[j] = 0
        }else if (jogo[j] == 1) {
                cont--
                jogo[j] = 0
        } else if (jogo[j] == 2) {
                cont2--
                jogo[j] = 0
        }
        if (entrada[x] > entrada[y] && entrada[y] != "" && entrada[x] != "" && jogo[j] == 0) {
                if (cont >= 7) { cont = 0 }
                quartas[cont] = vencedores[x]
                console.log(quartas[cont])
                cont++
                jogo[j] = 1
                for(let g = 0; g <= 7;g++){
                        if(quartas[g] != null){
                document.getElementById("Q"+g+"T").innerHTML = quartas[g]
                        }
                }
        } else if (entrada[y] > entrada[x] && entrada[y] != "" && entrada[x] != "" && jogo[j] == 0) {
                if (cont2 >= 7) { cont2 = 0 }
                quartas[cont2] = vencedores[y]
                console.log(quartas[cont2])
                cont2++
                jogo[j] = 2
                for(let g = 0; g <= 7;g++){
                        if(quartas[g] != null){
                document.getElementById("Q"+g+"T").innerHTML = quartas[g]
                        }
                }
<<<<<<< HEAD
=======
        for(let h = 0;h <= 15;h++){
                        sessionStorage.setItem("oitavas" + h, parseInt(entrada2[h]))
                        entrada[sequencia[h]] = parseInt(entrada2[h])
>>>>>>> parent of 928cbb9 (javascript pronto)
=======
>>>>>>> parent of 869fe3e (Merge branch 'main' of https://github.com/pedro3pv/ProjetoDAVI)
        }
}