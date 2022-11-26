// javascript desenvolvido por pedro augusto e João Pedro Monteiro

let jogosE = [];
let jogosEj = [0, 0, 0, 0];
let vitoriasE = [0, 0, 0, 0];
let empatesE = [0, 0, 0, 0];
let derrotaE = [0, 0, 0, 0];
let GPE = [0, 0, 0, 0];
let GCE = [0, 0, 0, 0];
let SGE = [0, 0, 0, 0];
//para mais timesE coloque os nomes dos timesE na array timesE

//o id dos inputs pode ser qualquer nome que voce saiba diferenciar

//sequencia     0        1          2         3
let timesE = ["Espanha", "Costa Rica", "Alemanha", "Japão"];
golsE = [];
golsE2 = [];

let pontosE = [0, 0, 0, 0];

let entradaE = [];

for (let z = 0; z <= 11; z++) {
    entradaE[z] = sessionStorage.getItem("entradaE[" + z + "]")
}
document.getElementById("23/11AE").value = entradaE[0]
document.getElementById("23/11JE").value = entradaE[1]
document.getElementById("23/11EE").value = entradaE[2]
document.getElementById("23/11CE").value = entradaE[3]
document.getElementById("27/11JE").value = entradaE[4]
document.getElementById("27/11CE").value = entradaE[5]
document.getElementById("27/11EE").value = entradaE[6]
document.getElementById("27/11AE").value = entradaE[7]
document.getElementById("01/12JE").value = entradaE[8]
document.getElementById("01/12EE").value = entradaE[9]
document.getElementById("01/12CE").value = entradaE[10]
document.getElementById("01/12AE").value = entradaE[11]
calcE(entradaE[0], entradaE[1], 0, 0, 1);
calcE(entradaE[2], entradaE[3], 1, 2, 3);
calcE(entradaE[4], entradaE[5], 2, 3, 1);
calcE(entradaE[6], entradaE[7], 3, 0, 2);
calcE(entradaE[8], entradaE[9], 4, 3, 0);
calcE(entradaE[10], entradaE[11], 5, 1, 2);

//qatar é 0
//equador é 1
//senegal é 2
//holanda é 3
// j é o numero do jogo, acada novo jogo, aumentar em 1

// 23/11
document.getElementById("23/11AE").oninput = function () {
    entradaE[0] = document.getElementById("23/11AE").value;
    console.log(entradaE[0])
    calcE(entradaE[0], entradaE[1], 0, 2, 3);
}
document.getElementById("23/11JE").oninput = function () {
    entradaE[1] = document.getElementById("23/11JE").value;
    console.log(entradaE[1])
    calcE(entradaE[0], entradaE[1], 0, 2, 3);
}
// 23/11 2
document.getElementById("23/11EE").oninput = function () {
    entradaE[2] = document.getElementById("23/11EE").value;
    console.log(entradaE[2])
    calcE(entradaE[2], entradaE[3], 1, 0, 1);
}
document.getElementById("23/11CE").oninput = function () {
    entradaE[3] = document.getElementById("23/11CE").value;
    console.log(entradaE[3])
    calcE(entradaE[2], entradaE[3], 1, 0, 1);
}
// 27/11
document.getElementById("27/11JE").oninput = function () {
    entradaE[4] = document.getElementById("27/11JE").value;
    console.log(entradaE[4])
    calcE(entradaE[4], entradaE[5], 2, 3, 1);
}
document.getElementById("27/11CE").oninput = function () {
    entradaE[5] = document.getElementById("27/11CE").value;
    console.log(entradaE[5])
    calcE(entradaE[4], entradaE[5], 2, 3, 1);
}
// 27/11 2
document.getElementById("27/11EE").oninput = function () {
    entradaE[6] = document.getElementById("27/11EE").value;
    console.log(entradaE[6])
    calcE(entradaE[6], entradaE[7], 3, 0, 2);
}
document.getElementById("27/11AE").oninput = function () {
    entradaE[7] = document.getElementById("27/11AE").value;
    console.log(entradaE[7])
    calcE(entradaE[6], entradaE[7], 3, 0, 2);
}
// 01/12
document.getElementById("01/12JE").oninput = function () {
    entradaE[8] = document.getElementById("01/12JE").value;
    console.log(entradaE[8])
    calcE(entradaE[8], entradaE[9], 4, 3, 0);
}
document.getElementById("01/12EE").oninput = function () {
    entradaE[9] = document.getElementById("01/12EE").value;
    console.log(entradaE[9])
    calcE(entradaE[8], entradaE[9], 4, 3, 0);
}
// 01/12 2
document.getElementById("01/12CE").oninput = function () {
    entradaE[10] = document.getElementById("01/12CE").value;
    console.log(entradaE[10])
    calcE(entradaE[10], entradaE[11], 5, 1, 2);
}
document.getElementById("01/12AE").oninput = function () {
    entradaE[11] = document.getElementById("01/12AE").value;
    console.log(entradaE[11])
    calcE(entradaE[10], entradaE[11], 5, 1, 2);
}

function calcE(x, y, j, i, i2) {
    x = parseInt(x)
    y = parseInt(y)
    if (x != "" && y != "" || x === 0 || y === 0) {
        if (jogosE[j] == null) {
            jogosE[j] = 0
        }
        if (jogosE[j] == 1) {
            pontosE[i] = pontosE[i] - 3
            jogosEj[i] = jogosEj[i] - 1
            jogosEj[i2] = jogosEj[i2] - 1
            vitoriasE[i] = vitoriasE[i] - 1
            derrotaE[i2] = derrotaE[i2] - 1
            GPE[i] = GPE[i] - golsE[j]
            GCE[i] = GCE[i] - golsE2[j]
            GPE[i2] = GPE[i2] - golsE2[j]
            GCE[i2] = GCE[i2] - golsE[j]
            jogosE[j] = 0
        }
        if (jogosE[j] == 2) {
            pontosE[i2] = pontosE[i2] - 3
            jogosEj[i] = jogosEj[i] - 1
            jogosEj[i2] = jogosEj[i2] - 1
            vitoriasE[i2] = vitoriasE[i2] - 1
            derrotaE[i] = derrotaE[i] - 1
            GPE[i] = GPE[i] - golsE[j]
            GCE[i] = GCE[i] - golsE2[j]
            GPE[i2] = GPE[i2] - golsE2[j]
            GCE[i2] = GCE[i2] - golsE[j]
            jogosE[j] = 0
        }
        if (jogosE[j] == 3) {
            pontosE[i] = pontosE[i] - 1
            pontosE[i2] = pontosE[i2] - 1
            jogosE[j] = 0
            jogosEj[i] = jogosEj[i] - 1
            empatesE[i] = empatesE[i] - 1
            jogosEj[i2] = jogosEj[i2] - 1
            empatesE[i2] = empatesE[i2] - 1
            GPE[i] = GPE[i] - golsE[j]
            GCE[i] = GCE[i] - golsE2[j]
            GPE[i2] = GPE[i2] - golsE2[j]
            GCE[i2] = GCE[i2] - golsE[j]
        }
        if (x != null && y != null && jogosE[j] == 0) {
            golsE[j] = x
            golsE2[j] = y
            if (x > y) {
                if (pontosE[i] >= 0) {
                    pontosE[i] = parseInt(pontosE[i])
                    pontosE[i] = pontosE[i] + 3
                    jogosEj[i] = jogosEj[i] + 1
                    jogosEj[i2] = jogosEj[i2] + 1
                    vitoriasE[i] = vitoriasE[i] + 1
                    derrotaE[i2] = derrotaE[i2] + 1
                    GPE[i] = GPE[i] + x
                    GCE[i] = GCE[i] + y
                    GPE[i2] = GPE[i2] + y
                    GCE[i2] = GCE[i2] + x
                    jogosE[j] = 1
                }
                console.log(pontosE[i])
            } else if (y > x) {
                if (pontosE[i2] >= 0) {
                    pontosE[i2] = parseInt(pontosE[i2])
                    pontosE[i2] = pontosE[i2] + 3
                    jogosEj[i] = jogosEj[i] + 1
                    jogosEj[i2] = jogosEj[i2] + 1
                    vitoriasE[i2] = vitoriasE[i2] + 1
                    derrotaE[i] = derrotaE[i] + 1
                    jogosE[j] = 2
                    GPE[i] = GPE[i] + x
                    GCE[i] = GCE[i] + y
                    GPE[i2] = GPE[i2] + y
                    GCE[i2] = GCE[i2] + x
                }
                console.log(pontosE[i2])
            } else if (x == y) {
                if (pontosE[i] >= 0) {
                    pontosE[i] = pontosE[i] + 1
                    jogosEj[i] = jogosEj[i] + 1
                    empatesE[i] = empatesE[i] + 1
                    GPE[i] = GPE[i] + x
                    GCE[i] = GCE[i] + y
                }
                console.log(pontosE[i])

                if (pontosE[i2] >= 0) {
                    pontosE[i2] = pontosE[i2] + 1
                    jogosEj[i2] = jogosEj[i2] + 1
                    empatesE[i2] = empatesE[i2] + 1
                    GPE[i2] = GPE[i2] + y
                    GCE[i2] = GCE[i2] + x
                }
                console.log(pontosE[i2])
                jogosE[j] = 3
            }

            SGE[i] = GPE[i] - GCE[i]
            SGE[i2] = GPE[i2] - GCE[i2]

            let n = [];
            let ts = [];
            let jj = [];
            let v = [];
            let ep = [];
            let derr = [];
            let GPE2 = [];
            let GCE2 = [];
            let SGE2 = [];
            let aux = 0

            for (let q = 0; q < timesE.length; q++) {
                n[q] = pontosE[q];
                ts[q] = timesE[q];
                jj[q] = jogosEj[q];
                v[q] = vitoriasE[q];
                ep[q] = empatesE[q]
                derr[q] = derrotaE[q]
                GPE2[q] = GPE[q]
                GCE2[q] = GCE[q]
                SGE2[q] = SGE[q]
            }
            for (let k = 0; k < timesE.length; k++) {
                for (let l = 0; l < timesE.length; l++) {
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

                        aux = GPE2[l + 1]
                        GPE2[l + 1] = GPE2[l]
                        GPE2[l] = aux

                        aux = GCE2[l + 1]
                        GCE2[l + 1] = GCE2[l]
                        GCE2[l] = aux

                        aux = SGE2[l + 1]
                        SGE2[l + 1] = SGE2[l]
                        SGE2[l] = aux
                    }
                }
            }
            for (let t = 0; t < timesE.length; t++) {
                document.getElementById("P" + t + "-textE").innerHTML = ts[t]
                document.getElementById("P" + t + "E").innerHTML = n[t]
                document.getElementById("P" + t + "JE").innerHTML = jj[t]
                document.getElementById("P" + t + "VE").innerHTML = v[t]
                document.getElementById("P" + t + "EE").innerHTML = ep[t]
                document.getElementById("P" + t + "DE").innerHTML = derr[t]
                document.getElementById("P" + t + "GPE").innerHTML = GPE2[t]
                document.getElementById("P" + t + "GCE").innerHTML = GCE2[t]
                document.getElementById("P" + t + "SGE").innerHTML = SGE2[t]
            }
            vencedores[8] = ts[0]
            vencedores[9] = ts[1]
        }
    }
    for (let r = 0; r <= 11; r++) {
        sessionStorage.setItem("entradaE[" + r + "]", entradaE[r])
    }
}