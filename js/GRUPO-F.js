// javascript desenvolvido por pedro augusto e João Pedro Monteiro

let jogosF = [];
let jogosFj = [0, 0, 0, 0];
let vitoriasF = [0, 0, 0, 0];
let empatesF = [0, 0, 0, 0];
let derrotaF = [0, 0, 0, 0];
let GPF = [0, 0, 0, 0];
let GCF = [0, 0, 0, 0];
let SGF = [0, 0, 0, 0];
//para mais timesF coloque os nomes dos timesF n array timesF

//o id dos inputs pode ser qualquer nome que voce saiba diferenciar

//sequencia     0        1          2         3
let timesF = ["Bélgica", "Canadá", "Marrocos", "Croácia"];
golsF = [];
golsF2 = [];

let pontosF = [0, 0, 0, 0];

let entradaF = [];

for (let z = 0; z <= 11; z++) {
    entradaF[z] = localStorage.getItem("entradaF[" + z + "]")
}
document.getElementById("23/11MF").value = entradaF[0]
document.getElementById("23/11CRF").value = entradaF[1]
document.getElementById("23/11BF").value = entradaF[2]
document.getElementById("23/11CAF").value = entradaF[3]
document.getElementById("27/11BF").value = entradaF[4]
document.getElementById("27/11MF").value = entradaF[5]
document.getElementById("27/11CRF").value = entradaF[6]
document.getElementById("27/11CAF").value = entradaF[7]
document.getElementById("01/12CRF").value = entradaF[8]
document.getElementById("01/12BF").value = entradaF[9]
document.getElementById("01/12CAF").value = entradaF[10]
document.getElementById("01/12MF").value = entradaF[11]
calcF(entradaF[0], entradaF[1], 0, 2, 3);
calcF(entradaF[2], entradaF[3], 1, 0, 1);
calcF(entradaF[4], entradaF[5], 2, 0, 2);
calcF(entradaF[6], entradaF[7], 3, 3, 1);
calcF(entradaF[8], entradaF[9], 4, 3, 0);
calcF(entradaF[10], entradaF[11], 5, 1, 2);

//qatar é 0
//equador é 1
//senegal é 2
//holanda é 3
// j é o numero do jogo, acada novo jogo, aumentar em 1

// 23/11
document.getElementById("23/11MF").oninput = function () {
    entradaF[0] = document.getElementById("23/11MF").value;
    console.log(entradaF[0])
    calcF(entradaF[0], entradaF[1], 0, 2, 3);
}
document.getElementById("23/11CRF").oninput = function () {
    entradaF[1] = document.getElementById("23/11CRF").value;
    console.log(entradaF[1])
    calcF(entradaF[0], entradaF[1], 0, 2, 3);
}
// 23/11 2
document.getElementById("23/11BF").oninput = function () {
    entradaF[2] = document.getElementById("23/11BF").value;
    console.log(entradaF[2])
    calcF(entradaF[2], entradaF[3], 1, 0, 1);
}
document.getElementById("23/11CAF").oninput = function () {
    entradaF[3] = document.getElementById("23/11CAF").value;
    console.log(entradaF[3])
    calcF(entradaF[2], entradaF[3], 1, 0, 1);
}
// 27/11
document.getElementById("27/11BF").oninput = function () {
    entradaF[4] = document.getElementById("27/11BF").value;
    console.log(entradaF[4])
    calcF(entradaF[4], entradaF[5], 2, 0, 2);
}
document.getElementById("27/11MF").oninput = function () {
    entradaF[5] = document.getElementById("27/11MF").value;
    console.log(entradaF[5])
    calcF(entradaF[4], entradaF[5], 2, 0, 2);
}
// 27/11 2
document.getElementById("27/11CRF").oninput = function () {
    entradaF[6] = document.getElementById("27/11CRF").value;
    console.log(entradaF[6])
    calcF(entradaF[6], entradaF[7], 3, 3, 1);
}
document.getElementById("27/11CAF").oninput = function () {
    entradaF[7] = document.getElementById("27/11CAF").value;
    console.log(entradaF[7])
    calcF(entradaF[6], entradaF[7], 3, 3, 1);
}
// 01/12
document.getElementById("01/12CRF").oninput = function () {
    entradaF[8] = document.getElementById("01/12CRF").value;
    console.log(entradaF[8])
    calcF(entradaF[8], entradaF[9], 4, 3, 0);
}
document.getElementById("01/12BF").oninput = function () {
    entradaF[9] = document.getElementById("01/12BF").value;
    console.log(entradaF[9])
    calcF(entradaF[8], entradaF[9], 4, 3, 0);
}
// 01/12 2
document.getElementById("01/12CAF").oninput = function () {
    entradaF[10] = document.getElementById("01/12CAF").value;
    console.log(entradaF[10])
    calcF(entradaF[10], entradaF[11], 5, 1, 2);
}
document.getElementById("01/12MF").oninput = function () {
    entradaF[11] = document.getElementById("01/12MF").value;
    console.log(entradaF[11])
    calcF(entradaF[10], entradaF[11], 5, 1, 2);
}

function calcF(x, y, j, i, i2) {
    x = parseInt(x)
    y = parseInt(y)
    if (x != "" && y != "" || x === 0 || y === 0) {
        if (jogosF[j] == null) {
            jogosF[j] = 0
        }
        if (jogosF[j] == 1) {
            pontosF[i] = pontosF[i] - 3
            jogosFj[i] = jogosFj[i] - 1
            jogosFj[i2] = jogosFj[i2] - 1
            vitoriasF[i] = vitoriasF[i] - 1
            derrotaF[i2] = derrotaF[i2] - 1
            GPF[i] = GPF[i] - golsF[j]
            GCF[i] = GCF[i] - golsF2[j]
            GPF[i2] = GPF[i2] - golsF2[j]
            GCF[i2] = GCF[i2] - golsF[j]
            jogosF[j] = 0
        }
        if (jogosF[j] == 2) {
            pontosF[i2] = pontosF[i2] - 3
            jogosFj[i] = jogosFj[i] - 1
            jogosFj[i2] = jogosFj[i2] - 1
            vitoriasF[i2] = vitoriasF[i2] - 1
            derrotaF[i] = derrotaF[i] - 1
            GPF[i] = GPF[i] - golsF[j]
            GCF[i] = GCF[i] - golsF2[j]
            GPF[i2] = GPF[i2] - golsF2[j]
            GCF[i2] = GCF[i2] - golsF[j]
            jogosF[j] = 0
        }
        if (jogosF[j] == 3) {
            pontosF[i] = pontosF[i] - 1
            pontosF[i2] = pontosF[i2] - 1
            jogosF[j] = 0
            jogosFj[i] = jogosFj[i] - 1
            empatesF[i] = empatesF[i] - 1
            jogosFj[i2] = jogosFj[i2] - 1
            empatesF[i2] = empatesF[i2] - 1
            GPF[i] = GPF[i] - golsF[j]
            GCF[i] = GCF[i] - golsF2[j]
            GPF[i2] = GPF[i2] - golsF2[j]
            GCF[i2] = GCF[i2] - golsF[j]
        }
        if (x != null && y != null && jogosF[j] == 0) {
            golsF[j] = x
            golsF2[j] = y
            if (x > y) {
                if (pontosF[i] >= 0) {
                    pontosF[i] = parseInt(pontosF[i])
                    pontosF[i] = pontosF[i] + 3
                    jogosFj[i] = jogosFj[i] + 1
                    jogosFj[i2] = jogosFj[i2] + 1
                    vitoriasF[i] = vitoriasF[i] + 1
                    derrotaF[i2] = derrotaF[i2] + 1
                    GPF[i] = GPF[i] + x
                    GCF[i] = GCF[i] + y
                    GPF[i2] = GPF[i2] + y
                    GCF[i2] = GCF[i2] + x
                    jogosF[j] = 1
                }
                console.log(pontosF[i])
            } else if (y > x) {
                if (pontosF[i2] >= 0) {
                    pontosF[i2] = parseInt(pontosF[i2])
                    pontosF[i2] = pontosF[i2] + 3
                    jogosFj[i] = jogosFj[i] + 1
                    jogosFj[i2] = jogosFj[i2] + 1
                    vitoriasF[i2] = vitoriasF[i2] + 1
                    derrotaF[i] = derrotaF[i] + 1
                    jogosF[j] = 2
                    GPF[i] = GPF[i] + x
                    GCF[i] = GCF[i] + y
                    GPF[i2] = GPF[i2] + y
                    GCF[i2] = GCF[i2] + x
                }
                console.log(pontosF[i2])
            } else if (x == y) {
                if (pontosF[i] >= 0) {
                    pontosF[i] = pontosF[i] + 1
                    jogosFj[i] = jogosFj[i] + 1
                    empatesF[i] = empatesF[i] + 1
                    GPF[i] = GPF[i] + x
                    GCF[i] = GCF[i] + y
                }
                console.log(pontosF[i])

                if (pontosF[i2] >= 0) {
                    pontosF[i2] = pontosF[i2] + 1
                    jogosFj[i2] = jogosFj[i2] + 1
                    empatesF[i2] = empatesF[i2] + 1
                    GPF[i2] = GPF[i2] + y
                    GCF[i2] = GCF[i2] + x
                }
                console.log(pontosF[i2])
                jogosF[j] = 3
            }

            SGF[i] = GPF[i] - GCF[i]
            SGF[i2] = GPF[i2] - GCF[i2]

            let n = [];
            let ts = [];
            let jj = [];
            let v = [];
            let ep = [];
            let derr = [];
            let GPF2 = [];
            let GCF2 = [];
            let SGF2 = [];
            let aux = 0

            for (let q = 0; q < timesF.length; q++) {
                n[q] = pontosF[q];
                ts[q] = timesF[q];
                jj[q] = jogosFj[q];
                v[q] = vitoriasF[q];
                ep[q] = empatesF[q]
                derr[q] = derrotaF[q]
                GPF2[q] = GPF[q]
                GCF2[q] = GCF[q]
                SGF2[q] = SGF[q]
            }
            for (let k = 0; k < timesF.length; k++) {
                for (let l = 0; l < timesF.length; l++) {
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

                        aux = GPF2[l + 1]
                        GPF2[l + 1] = GPF2[l]
                        GPF2[l] = aux

                        aux = GCF2[l + 1]
                        GCF2[l + 1] = GCF2[l]
                        GCF2[l] = aux

                        aux = SGF2[l + 1]
                        SGF2[l + 1] = SGF2[l]
                        SGF2[l] = aux
                    }
                }
            }
            for (let k = 0; k < timesA.length; k++) {
                for (let l = 0; l < timesA.length; l++) {
                    SGF2[l] = parseInt(SGF2[l])
                    n[l] = parseInt(n[l])
                    if (n[l] == n[l + 1]) {
                        if (SGF2[l] < SGF2[l + 1]) {
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

                            aux = GPF2[l + 1]
                            GPF2[l + 1] = GPF2[l]
                            GPF2[l] = aux

                            aux = GCF2[l + 1]
                            GCF2[l + 1] = GCF2[l]
                            GCF2[l] = aux

                            aux = SGF2[l + 1]
                            SGF2[l + 1] = SGF2[l]
                            SGF2[l] = aux
                        }
                    }
                }
            }
            for (let k = 0; k < timesA.length; k++) {
                for (let l = 0; l < timesA.length; l++) {
                    SGF2[l] = parseInt(SGF2[l])
                    n[l] = parseInt(n[l])
                    if (n[l] == n[l + 1]) {
                        if (SGF2[l] == SGF2[l + 1]) {
                        if (GPF2[l] < GPF2[l + 1]) {
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

                            aux = GPF2[l + 1]
                            GPF2[l + 1] = GPF2[l]
                            GPF2[l] = aux

                            aux = GCF2[l + 1]
                            GCF2[l + 1] = GCF2[l]
                            GCF2[l] = aux

                            aux = SGF2[l + 1]
                            SGF2[l + 1] = SGF2[l]
                            SGF2[l] = aux
                        }
                    }
                }
                }
            }
            for (let t = 0; t < timesF.length; t++) {
                document.getElementById("P" + t + "-textF").innerHTML = ts[t]
                document.getElementById("P" + t + "F").innerHTML = n[t]
                document.getElementById("P" + t + "JF").innerHTML = jj[t]
                document.getElementById("P" + t + "VF").innerHTML = v[t]
                document.getElementById("P" + t + "EF").innerHTML = ep[t]
                document.getElementById("P" + t + "DF").innerHTML = derr[t]
                document.getElementById("P" + t + "GPF").innerHTML = GPF2[t]
                document.getElementById("P" + t + "GCF").innerHTML = GCF2[t]
                document.getElementById("P" + t + "SGF").innerHTML = SGF2[t]
            }
            vencedores[10] = ts[0]
            vencedores[11] = ts[1]
        }
    }
    for (let r = 0; r <= 11; r++) {
        localStorage.setItem("entradaF[" + r + "]", entradaF[r])
    }
}