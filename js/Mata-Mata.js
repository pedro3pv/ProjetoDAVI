let vencedores = []

let entrada = []

let quartas = []

let jogo = []

let cont = 0
let cont2 = 0

// 0 3 4 7 6 5 2 1 8 11 12 15 10 9 14 13

for (let u = 0; u <= 15; u++) {
        vencedores[u] = localStorage.getItem("vencedores[" + u + "]")
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

function enter() {
        for (let q = 0; q <= 15; q++) {
                if (document.getElementById("O" + q).value != null) {
                        entrada[q] = document.getElementById("O" + q).value
                }
        }
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
        }
}