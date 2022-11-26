// javascript desenvolvido por pedro augusto e João Pedro Monteiro

let jogosH = [];
let jogosHj = [0, 0, 0, 0];
let vitoriasH = [0, 0, 0, 0];
let empatesH = [0, 0, 0, 0];
let derrotaH = [0, 0, 0, 0];
let GPH = [0, 0, 0, 0];
let GCH = [0, 0, 0, 0];
let SGH = [0, 0, 0, 0];
//para mais timesH coloque os nomes dos timesH na array timesH

//o id dos inputs pode ser qualquer nome que voce saiba diferenciar

//sequencia     0        1          2         3
let timesH = ["Portugal", "Gana", "Uruguai", "Coreia do Sul"];
golsH = [];
golsH2 = [];

let pontosH = [0, 0, 0, 0];

let entradaH = [];

for (let z = 0; z <= 11; z++) {
    entradaH[z] = sessionStorage.getItem("entradaH[" + z + "]")
}
document.getElementById("24/11UH").value = entradaH[0]
document.getElementById("24/11CH").value = entradaH[1]
document.getElementById("24/11PH").value = entradaH[2]
document.getElementById("24/11GH").value = entradaH[3]
document.getElementById("28/11CH").value = entradaH[4]
document.getElementById("28/11GH").value = entradaH[5]
document.getElementById("28/11PH").value = entradaH[6]
document.getElementById("28/11UH").value = entradaH[7]
document.getElementById("02/12CH").value = entradaH[8]
document.getElementById("02/12PH").value = entradaH[9]
document.getElementById("02/12GH").value = entradaH[10]
document.getElementById("02/12UH").value = entradaH[11]
calcH(entradaH[0], entradaH[1], 0, 2, 3);
calcH(entradaH[2], entradaH[3], 1, 0, 1);
calcH(entradaH[4], entradaH[5], 2, 3, 1);
calcH(entradaH[6], entradaH[7], 3, 0, 2);
calcH(entradaH[8], entradaH[9], 4, 3, 0);
calcH(entradaH[10], entradaH[11], 5, 1, 2);

// j é o numero do jogo, acada novo jogo, aumentar em 1

// 24/11
document.getElementById("24/11UH").oninput = function () {
    entradaH[0] = document.getElementById("24/11UH").value;
    console.log(entradaH[0])
    calcH(entradaH[0], entradaH[1], 0, 2, 3);
}
document.getElementById("24/11CH").oninput = function () {
    entradaH[1] = document.getElementById("24/11CH").value;
    console.log(entradaH[1])
    calcH(entradaH[0], entradaH[1], 0, 2, 3);
}
// 24/11 2
document.getElementById("24/11PH").oninput = function () {
    entradaH[2] = document.getElementById("24/11PH").value;
    console.log(entradaH[2])
    calcH(entradaH[2], entradaH[3], 1, 0, 1);
}
document.getElementById("24/11GH").oninput = function () {
    entradaH[3] = document.getElementById("24/11GH").value;
    console.log(entradaH[3])
    calcH(entradaH[2], entradaH[3], 1, 0, 1);
}
// 28/11
document.getElementById("28/11CH").oninput = function () {
    entradaH[4] = document.getElementById("28/11CH").value;
    console.log(entradaH[4])
    calcH(entradaH[4], entradaH[5], 2, 3, 1);
}
document.getElementById("28/11GH").oninput = function () {
    entradaH[5] = document.getElementById("28/11GH").value;
    console.log(entradaH[5])
    calcH(entradaH[4], entradaH[5], 2, 3, 1);
}
// 28/11 2
document.getElementById("28/11PH").oninput = function () {
    entradaH[6] = document.getElementById("28/11PH").value;
    console.log(entradaH[6])
    calcH(entradaH[6], entradaH[7], 3, 0, 2);
}
document.getElementById("28/11UH").oninput = function () {
    entradaH[7] = document.getElementById("28/11UH").value;
    console.log(entradaH[7])
    calcH(entradaH[6], entradaH[7], 3, 0, 2);
}
// 02/12
document.getElementById("02/12CH").oninput = function () {
    entradaH[8] = document.getElementById("02/12CH").value;
    console.log(entradaH[8])
    calcH(entradaH[8], entradaH[9], 4, 3, 0);
}
document.getElementById("02/12PH").oninput = function () {
    entradaH[9] = document.getElementById("02/12PH").value;
    console.log(entradaH[9])
    calcH(entradaH[8], entradaH[9], 4, 3, 0);
}
// 02/12 2
document.getElementById("02/12GH").oninput = function () {
    entradaH[10] = document.getElementById("02/12GH").value;
    console.log(entradaH[10])
    calcH(entradaH[10], entradaH[11], 5, 1, 2);
}
document.getElementById("02/12UH").oninput = function () {
    entradaH[11] = document.getElementById("02/12UH").value;
    console.log(entradaH[11])
    calcH(entradaH[10], entradaH[11], 5, 1, 2);
}

function calcH(x, y, j, i, i2) {
    x = parseInt(x)
    y = parseInt(y)
    if (x != "" && y != "" || x === 0 || y === 0) {
        if (jogosH[j] == null) {
            jogosH[j] = 0
        }
        if (jogosH[j] == 1) {
            pontosH[i] = pontosH[i] - 3
            jogosHj[i] = jogosHj[i] - 1
            jogosHj[i2] = jogosHj[i2] - 1
            vitoriasH[i] = vitoriasH[i] - 1
            derrotaH[i2] = derrotaH[i2] - 1
            GPH[i] = GPH[i] - golsH[j]
            GCH[i] = GCH[i] - golsH2[j]
            GPH[i2] = GPH[i2] - golsH2[j]
            GCH[i2] = GCH[i2] - golsH[j]
            jogosH[j] = 0
        }
        if (jogosH[j] == 2) {
            pontosH[i2] = pontosH[i2] - 3
            jogosHj[i] = jogosHj[i] - 1
            jogosHj[i2] = jogosHj[i2] - 1
            vitoriasH[i2] = vitoriasH[i2] - 1
            derrotaH[i] = derrotaH[i] - 1
            GPH[i] = GPH[i] - golsH[j]
            GCH[i] = GCH[i] - golsH2[j]
            GPH[i2] = GPH[i2] - golsH2[j]
            GCH[i2] = GCH[i2] - golsH[j]
            jogosH[j] = 0
        }
        if (jogosH[j] == 3) {
            pontosH[i] = pontosH[i] - 1
            pontosH[i2] = pontosH[i2] - 1
            jogosH[j] = 0
            jogosHj[i] = jogosHj[i] - 1
            empatesH[i] = empatesH[i] - 1
            jogosHj[i2] = jogosHj[i2] - 1
            empatesH[i2] = empatesH[i2] - 1
            GPH[i] = GPH[i] - golsH[j]
            GCH[i] = GCH[i] - golsH2[j]
            GPH[i2] = GPH[i2] - golsH2[j]
            GCH[i2] = GCH[i2] - golsH[j]
        }
        if (x != null && y != null && jogosH[j] == 0) {
            golsH[j] = x
            golsH2[j] = y
            if (x > y) {
                if (pontosH[i] >= 0) {
                    pontosH[i] = parseInt(pontosH[i])
                    pontosH[i] = pontosH[i] + 3
                    jogosHj[i] = jogosHj[i] + 1
                    jogosHj[i2] = jogosHj[i2] + 1
                    vitoriasH[i] = vitoriasH[i] + 1
                    derrotaH[i2] = derrotaH[i2] + 1
                    GPH[i] = GPH[i] + x
                    GCH[i] = GCH[i] + y
                    GPH[i2] = GPH[i2] + y
                    GCH[i2] = GCH[i2] + x
                    jogosH[j] = 1
                }
                console.log(pontosH[i])
            } else if (y > x) {
                if (pontosH[i2] >= 0) {
                    pontosH[i2] = parseInt(pontosH[i2])
                    pontosH[i2] = pontosH[i2] + 3
                    jogosHj[i] = jogosHj[i] + 1
                    jogosHj[i2] = jogosHj[i2] + 1
                    vitoriasH[i2] = vitoriasH[i2] + 1
                    derrotaH[i] = derrotaH[i] + 1
                    jogosH[j] = 2
                    GPH[i] = GPH[i] + x
                    GCH[i] = GCH[i] + y
                    GPH[i2] = GPH[i2] + y
                    GCH[i2] = GCH[i2] + x
                }
                console.log(pontosH[i2])
            } else if (x == y) {
                if (pontosH[i] >= 0) {
                    pontosH[i] = pontosH[i] + 1
                    jogosHj[i] = jogosHj[i] + 1
                    empatesH[i] = empatesH[i] + 1
                    GPH[i] = GPH[i] + x
                    GCH[i] = GCH[i] + y
                }
                console.log(pontosH[i])

                if (pontosH[i2] >= 0) {
                    pontosH[i2] = pontosH[i2] + 1
                    jogosHj[i2] = jogosHj[i2] + 1
                    empatesH[i2] = empatesH[i2] + 1
                    GPH[i2] = GPH[i2] + y
                    GCH[i2] = GCH[i2] + x
                }
                console.log(pontosH[i2])
                jogosH[j] = 3
            }

            SGH[i] = GPH[i] - GCH[i]
            SGH[i2] = GPH[i2] - GCH[i2]

            let n = [];
            let ts = [];
            let jj = [];
            let v = [];
            let ep = [];
            let derr = [];
            let GPH2 = [];
            let GCH2 = [];
            let SGH2 = [];
            let aux = 0

            for (let q = 0; q < timesH.length; q++) {
                n[q] = pontosH[q];
                ts[q] = timesH[q];
                jj[q] = jogosHj[q];
                v[q] = vitoriasH[q];
                ep[q] = empatesH[q]
                derr[q] = derrotaH[q]
                GPH2[q] = GPH[q]
                GCH2[q] = GCH[q]
                SGH2[q] = SGH[q]
            }
            for (let k = 0; k < timesH.length; k++) {
                for (let l = 0; l < timesH.length; l++) {
                    n[l] = parseInt(n[l])
                    if (n[l] < n[l + 1]) {
                        aux = n[l + 1]
                        n[l + 1] = n[l]
                        n[l] = aux

                        aux = ts[l + 1]
                        ts[l + 1] = ts[l]
                        ts[l] = aux

                        aux = jj[l + 1]
                        jj[l + 1] = jj[l]
                        jj[l] = aux

                        aux = v[l + 1]
                        v[l + 1] = v[l]
                        v[l] = aux

                        aux = ep[l + 1]
                        ep[l + 1] = ep[l]
                        ep[l] = aux

                        aux = derr[l + 1]
                        derr[l + 1] = derr[l]
                        derr[l] = aux

                        aux = GPH2[l + 1]
                        GPH2[l + 1] = GPH2[l]
                        GPH2[l] = aux

                        aux = GCH2[l + 1]
                        GCH2[l + 1] = GCH2[l]
                        GCH2[l] = aux

                        aux = SGH2[l + 1]
                        SGH2[l + 1] = SGH2[l]
                        SGH2[l] = aux
                    }
                }
            }
            for (let t = 0; t < timesH.length; t++) {
                document.getElementById("P" + t + "-textH").innerHTML = ts[t]
                document.getElementById("P" + t + "H").innerHTML = n[t]
                document.getElementById("P" + t + "JH").innerHTML = jj[t]
                document.getElementById("P" + t + "VH").innerHTML = v[t]
                document.getElementById("P" + t + "EH").innerHTML = ep[t]
                document.getElementById("P" + t + "DH").innerHTML = derr[t]
                document.getElementById("P" + t + "GPH").innerHTML = GPH2[t]
                document.getElementById("P" + t + "GCH").innerHTML = GCH2[t]
                document.getElementById("P" + t + "SGH").innerHTML = SGH2[t]
            }
            vencedores[14] = ts[0]
            vencedores[15] = ts[1]
        }
    }
    for (let r = 0; r <= 11; r++) {
        sessionStorage.setItem("entradaH[" + r + "]", entradaH[r])
    }
}
function oitavas () {
    for (let u = 0; u <= 15; u++) {
        localStorage.setItem("vencedores[" + u + "]", vencedores[u])
    }
    window.location.href = "oitavas.html"
}