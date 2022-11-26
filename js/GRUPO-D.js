// javascript desenvolvido por pedro augusto e João Pedro Monteiro

let jogosD = [];
let jogosDj = [0, 0, 0, 0];
let vitoriasD = [0, 0, 0, 0];
let empatesD = [0, 0, 0, 0];
let derrotaD = [0, 0, 0, 0];
let GPD = [0, 0, 0, 0];
let GCD = [0, 0, 0, 0];
let SGD = [0, 0, 0, 0];
//para mais timesD coloque os nomes dos timesD na array timesD

//o id dos inputs pode ser qualquer nome que voce saiba diferenciar

//sequencia     0        1          2         3
let timesD = ["França", "Austrália", "Dinamarca", "Tunísia"];
golsD = [];
golsD2 = [];

let pontosD = [0, 0, 0, 0];

let entradaD = [];

for (let z = 0; z <= 11; z++) {
    entradaD[z] = sessionStorage.getItem("entradaD[" + z + "]")
}
document.getElementById("22/11DD").value = entradaD[0]
document.getElementById("22/11TD").value = entradaD[1]
document.getElementById("22/11FD").value = entradaD[2]
document.getElementById("22/11AD").value = entradaD[3]
document.getElementById("26/11TD").value = entradaD[4]
document.getElementById("26/11AD").value = entradaD[5]
document.getElementById("26/11FD").value = entradaD[6]
document.getElementById("26/11DD").value = entradaD[7]
document.getElementById("30/11TD").value = entradaD[8]
document.getElementById("30/11FD").value = entradaD[9]
document.getElementById("30/11AD").value = entradaD[10]
document.getElementById("30/11DD").value = entradaD[11]
calcD(entradaD[0], entradaD[1], 0, 0, 1);
calcD(entradaD[2], entradaD[3], 1, 2, 3);
calcD(entradaD[4], entradaD[5], 2, 3, 1);
calcD(entradaD[6], entradaD[7], 3, 0, 2);
calcD(entradaD[8], entradaD[9], 4, 3, 0);
calcD(entradaD[10], entradaD[11], 5, 1, 2);

//qatar é 0
//equador é 1
//senegal é 2
//holanda é 3
// j é o numero do jogo, acada novo jogo, aumentar em 1

// 22/11
document.getElementById("22/11DD").oninput = function () {
    entradaD[0] = document.getElementById("22/11DD").value;
    console.log(entradaD[0])
    calcD(entradaD[0], entradaD[1], 0, 2, 3);
}
document.getElementById("22/11TD").oninput = function () {
    entradaD[1] = document.getElementById("22/11TD").value;
    console.log(entradaD[1])
    calcD(entradaD[0], entradaD[1], 0, 2, 3);
}
// 22/11 2
document.getElementById("22/11FD").oninput = function () {
    entradaD[2] = document.getElementById("22/11FD").value;
    console.log(entradaD[2])
    calcD(entradaD[2], entradaD[3], 1, 0, 1);
}
document.getElementById("22/11AD").oninput = function () {
    entradaD[3] = document.getElementById("22/11AD").value;
    console.log(entradaD[3])
    calcD(entradaD[2], entradaD[3], 1, 0, 1);
}
// 26/11
document.getElementById("26/11TD").oninput = function () {
    entradaD[4] = document.getElementById("26/11TD").value;
    console.log(entradaD[4])
    calcD(entradaD[4], entradaD[5], 2, 3, 1);
}
document.getElementById("26/11AD").oninput = function () {
    entradaD[5] = document.getElementById("26/11AD").value;
    console.log(entradaD[5])
    calcD(entradaD[4], entradaD[5], 2, 3, 1);
}
// 26/11 2
document.getElementById("26/11FD").oninput = function () {
    entradaD[6] = document.getElementById("26/11FD").value;
    console.log(entradaD[6])
    calcD(entradaD[6], entradaD[7], 3, 0, 2);
}
document.getElementById("26/11DD").oninput = function () {
    entradaD[7] = document.getElementById("26/11DD").value;
    console.log(entradaD[7])
    calcD(entradaD[6], entradaD[7], 3, 0, 2);
}
// 30/11
document.getElementById("30/11TD").oninput = function () {
    entradaD[8] = document.getElementById("30/11TD").value;
    console.log(entradaD[8])
    calcD(entradaD[8], entradaD[9], 4, 3, 0);
}
document.getElementById("30/11FD").oninput = function () {
    entradaD[9] = document.getElementById("30/11FD").value;
    console.log(entradaD[9])
    calcD(entradaD[8], entradaD[9], 4, 3, 0);
}
// 30/11 2
document.getElementById("30/11AD").oninput = function () {
    entradaD[10] = document.getElementById("30/11AD").value;
    console.log(entradaD[10])
    calcD(entradaD[10], entradaD[11], 5, 1, 2);
}
document.getElementById("30/11DD").oninput = function () {
    entradaD[11] = document.getElementById("30/11DD").value;
    console.log(entradaD[11])
    calcD(entradaD[10], entradaD[11], 5, 1, 2);
}

function calcD(x, y, j, i, i2) {
    x = parseInt(x)
    y = parseInt(y)
    if (x != "" && y != "" || x === 0 || y === 0) {
        if (jogosD[j] == null) {
            jogosD[j] = 0
        }
        if (jogosD[j] == 1) {
            pontosD[i] = pontosD[i] - 3
            jogosDj[i] = jogosDj[i] - 1
            jogosDj[i2] = jogosDj[i2] - 1
            vitoriasD[i] = vitoriasD[i] - 1
            derrotaD[i2] = derrotaD[i2] - 1
            GPD[i] = GPD[i] - golsD[j]
            GCD[i] = GCD[i] - golsD2[j]
            GPD[i2] = GPD[i2] - golsD2[j]
            GCD[i2] = GCD[i2] - golsD[j]
            jogosD[j] = 0
        }
        if (jogosD[j] == 2) {
            pontosD[i2] = pontosD[i2] - 3
            jogosDj[i] = jogosDj[i] - 1
            jogosDj[i2] = jogosDj[i2] - 1
            vitoriasD[i2] = vitoriasD[i2] - 1
            derrotaD[i] = derrotaD[i] - 1
            GPD[i] = GPD[i] - golsD[j]
            GCD[i] = GCD[i] - golsD2[j]
            GPD[i2] = GPD[i2] - golsD2[j]
            GCD[i2] = GCD[i2] - golsD[j]
            jogosD[j] = 0
        }
        if (jogosD[j] == 3) {
            pontosD[i] = pontosD[i] - 1
            pontosD[i2] = pontosD[i2] - 1
            jogosD[j] = 0
            jogosDj[i] = jogosDj[i] - 1
            empatesD[i] = empatesD[i] - 1
            jogosDj[i2] = jogosDj[i2] - 1
            empatesD[i2] = empatesD[i2] - 1
            GPD[i] = GPD[i] - golsD[j]
            GCD[i] = GCD[i] - golsD2[j]
            GPD[i2] = GPD[i2] - golsD2[j]
            GCD[i2] = GCD[i2] - golsD[j]
        }
        if (x != null && y != null && jogosD[j] == 0) {
            golsD[j] = x
            golsD2[j] = y
            if (x > y) {
                if (pontosD[i] >= 0) {
                    pontosD[i] = parseInt(pontosD[i])
                    pontosD[i] = pontosD[i] + 3
                    jogosDj[i] = jogosDj[i] + 1
                    jogosDj[i2] = jogosDj[i2] + 1
                    vitoriasD[i] = vitoriasD[i] + 1
                    derrotaD[i2] = derrotaD[i2] + 1
                    GPD[i] = GPD[i] + x
                    GCD[i] = GCD[i] + y
                    GPD[i2] = GPD[i2] + y
                    GCD[i2] = GCD[i2] + x
                    jogosD[j] = 1
                }
                console.log(pontosD[i])
            } else if (y > x) {
                if (pontosD[i2] >= 0) {
                    pontosD[i2] = parseInt(pontosD[i2])
                    pontosD[i2] = pontosD[i2] + 3
                    jogosDj[i] = jogosDj[i] + 1
                    jogosDj[i2] = jogosDj[i2] + 1
                    vitoriasD[i2] = vitoriasD[i2] + 1
                    derrotaD[i] = derrotaD[i] + 1
                    jogosD[j] = 2
                    GPD[i] = GPD[i] + x
                    GCD[i] = GCD[i] + y
                    GPD[i2] = GPD[i2] + y
                    GCD[i2] = GCD[i2] + x
                }
                console.log(pontosD[i2])
            } else if (x == y) {
                if (pontosD[i] >= 0) {
                    pontosD[i] = pontosD[i] + 1
                    jogosDj[i] = jogosDj[i] + 1
                    empatesD[i] = empatesD[i] + 1
                    GPD[i] = GPD[i] + x
                    GCD[i] = GCD[i] + y
                }
                console.log(pontosD[i])

                if (pontosD[i2] >= 0) {
                    pontosD[i2] = pontosD[i2] + 1
                    jogosDj[i2] = jogosDj[i2] + 1
                    empatesD[i2] = empatesD[i2] + 1
                    GPD[i2] = GPD[i2] + y
                    GCD[i2] = GCD[i2] + x
                }
                console.log(pontosD[i2])
                jogosD[j] = 3
            }

            SGD[i] = GPD[i] - GCD[i]
            SGD[i2] = GPD[i2] - GCD[i2]

            let n = [];
            let ts = [];
            let jj = [];
            let v = [];
            let ep = [];
            let derr = [];
            let GPD2 = [];
            let GCD2 = [];
            let SGD2 = [];
            let aux = 0

            for (let q = 0; q < timesD.length; q++) {
                n[q] = pontosD[q];
                ts[q] = timesD[q];
                jj[q] = jogosDj[q];
                v[q] = vitoriasD[q];
                ep[q] = empatesD[q]
                derr[q] = derrotaD[q]
                GPD2[q] = GPD[q]
                GCD2[q] = GCD[q]
                SGD2[q] = SGD[q]
            }
            for (let k = 0; k < timesD.length; k++) {
                for (let l = 0; l < timesD.length; l++) {
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

                        aux = GPD2[l + 1]
                        GPD2[l + 1] = GPD2[l]
                        GPD2[l] = aux

                        aux = GCD2[l + 1]
                        GCD2[l + 1] = GCD2[l]
                        GCD2[l] = aux

                        aux = SGD2[l + 1]
                        SGD2[l + 1] = SGD2[l]
                        SGD2[l] = aux
                    }
                }
            }
            for (let t = 0; t < timesD.length; t++) {
                document.getElementById("P" + t + "-textD").innerHTML = ts[t]
                document.getElementById("P" + t + "D").innerHTML = n[t]
                document.getElementById("P" + t + "JD").innerHTML = jj[t]
                document.getElementById("P" + t + "VD").innerHTML = v[t]
                document.getElementById("P" + t + "ED").innerHTML = ep[t]
                document.getElementById("P" + t + "DD").innerHTML = derr[t]
                document.getElementById("P" + t + "GPD").innerHTML = GPD2[t]
                document.getElementById("P" + t + "GCD").innerHTML = GCD2[t]
                document.getElementById("P" + t + "SGD").innerHTML = SGD2[t]
            }
            vencedores[6] = ts[0]
            vencedores[7] = ts[1]
        }
    }
    for (let r = 0; r <= 11; r++) {
        sessionStorage.setItem("entradaD[" + r + "]", entradaD[r])
    }
}