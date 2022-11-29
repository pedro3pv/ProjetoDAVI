// javascript desenvolvido por pedro augusto e João Pedro Monteiro

let jogosG = [];
let jogosGj = [0, 0, 0, 0];
let vitoriasG = [0, 0, 0, 0];
let empatesG = [0, 0, 0, 0];
let derrotaG = [0, 0, 0, 0];
let GPG = [0, 0, 0, 0];
let GCG = [0, 0, 0, 0];
let SGG = [0, 0, 0, 0];
//para mais timesG coloque os nomes dos timesG n array timesG

//o id dos inputs pode ser qualquer nome que voce saiba diferenciar

//sequencia     0        1          2         3
let timesG = ["Brasil","Sérvia","Suíça","Camarões"];
golsG = [];
golsG2 = [];

let pontosG = [0, 0, 0, 0];

let entradaG = [];

for(let z = 0; z <= 11;z++){
    entradaG[z] = localStorage.getItem("entradaG["+z+"]")
    }
    document.getElementById("24/11SUG").value = entradaG[0]
    document.getElementById("24/11CG").value = entradaG[1] 
    document.getElementById("24/11BG").value = entradaG[2] 
    document.getElementById("24/11SEG").value = entradaG[3] 
    document.getElementById("28/11CG").value = entradaG[4] 
    document.getElementById("28/11SEG").value = entradaG[5] 
    document.getElementById("28/11BG").value = entradaG[6] 
    document.getElementById("28/11SUG").value = entradaG[7] 
    document.getElementById("02/12CG").value = entradaG[8] 
    document.getElementById("02/12BG").value = entradaG[9] 
    document.getElementById("02/12SEG").value = entradaG[10] 
    document.getElementById("02/12SUG").value = entradaG[11] 
    calcG(entradaG[0], entradaG[1], 0, 2, 3);
    calcG(entradaG[2], entradaG[3], 1, 0, 1);
    calcG(entradaG[4], entradaG[5], 2, 3, 1);
    calcG(entradaG[6], entradaG[7], 3, 0, 2);
    calcG(entradaG[8], entradaG[9], 4, 3, 0);
    calcG(entradaG[10], entradaG[11], 5, 1, 2);

//qatar é 0
//equador é 1
//senegal é 2
//holanda é 3
// j é o numero do jogo, acada novo jogo, aumentar em 1

// 24/11
document.getElementById("24/11SUG").oninput = function () {
    entradaG[0] = document.getElementById("24/11SUG").value;
    console.log(entradaG[0])
    calcG(entradaG[0], entradaG[1], 0, 2, 3);
}
document.getElementById("24/11CG").oninput = function () {
    entradaG[1] = document.getElementById("24/11CG").value;
    console.log(entradaG[1])
    calcG(entradaG[0], entradaG[1], 0, 2, 3);
}
// 24/11 2
document.getElementById("24/11BG").oninput = function () {
    entradaG[2] = document.getElementById("24/11BG").value;
    console.log(entradaG[2])
    calcG(entradaG[2], entradaG[3], 1, 0, 1);
}
document.getElementById("24/11SEG").oninput = function () {
    entradaG[3] = document.getElementById("24/11SEG").value;
    console.log(entradaG[3])
    calcG(entradaG[2], entradaG[3], 1, 0, 1);
}
// 28/11
document.getElementById("28/11CG").oninput = function () {
    entradaG[4] = document.getElementById("28/11CG").value;
    console.log(entradaG[4])
    calcG(entradaG[4], entradaG[5], 2, 3, 1);
}
document.getElementById("28/11SEG").oninput = function () {
    entradaG[5] = document.getElementById("28/11SEG").value;
    console.log(entradaG[5])
    calcG(entradaG[4], entradaG[5], 2, 3, 1);
}
// 28/11 2
document.getElementById("28/11BG").oninput = function () {
    entradaG[6] = document.getElementById("28/11BG").value;
    console.log(entradaG[6])
    calcG(entradaG[6], entradaG[7], 3, 0, 2);
}
document.getElementById("28/11SUG").oninput = function () {
    entradaG[7] = document.getElementById("28/11SUG").value;
    console.log(entradaG[7])
    calcG(entradaG[6], entradaG[7], 3, 0, 2);
}
// 02/11
document.getElementById("02/12CG").oninput = function () {
    entradaG[8] = document.getElementById("02/12CG").value;
    console.log(entradaG[8])
    calcG(entradaG[8], entradaG[9], 4, 3, 0);
}
document.getElementById("02/12BG").oninput = function () {
    entradaG[9] = document.getElementById("02/12BG").value;
    console.log(entradaG[9])
    calcG(entradaG[8], entradaG[9], 4, 3, 0);
}
// 02/11 2
document.getElementById("02/12SEG").oninput = function () {
    entradaG[10] = document.getElementById("02/12SEG").value;
    console.log(entradaG[10])
    calcG(entradaG[10], entradaG[11], 5, 1, 2);
}
document.getElementById("02/12SUG").oninput = function () {
    entradaG[11] = document.getElementById("02/12SUG").value;
    console.log(entradaG[11])
    calcG(entradaG[10], entradaG[11], 5, 1, 2);
}

function calcG(x, y, j, i, i2) {
    x = parseInt(x)
    y = parseInt(y)
    if(x != "" && y != "" || x === 0 || y === 0){
    if (jogosG[j] == null) {
        jogosG[j] = 0
    }
    if (jogosG[j] == 1) {
        pontosG[i] = pontosG[i] - 3
        jogosGj[i] = jogosGj[i] - 1
        jogosGj[i2] = jogosGj[i2] - 1
        vitoriasG[i] = vitoriasG[i] - 1
        derrotaG[i2] = derrotaG[i2] - 1
        GPG[i] = GPG[i] - golsG[j]
        GCG[i] = GCG[i] - golsG2[j]
        GPG[i2] = GPG[i2] - golsG2[j]
        GCG[i2] = GCG[i2] - golsG[j]
        jogosG[j] = 0
    }
    if (jogosG[j] == 2) {
        pontosG[i2] = pontosG[i2] - 3
        jogosGj[i] = jogosGj[i] - 1
        jogosGj[i2] = jogosGj[i2] - 1
        vitoriasG[i2] = vitoriasG[i2] - 1
        derrotaG[i] = derrotaG[i] - 1
        GPG[i] = GPG[i] - golsG[j]
        GCG[i] = GCG[i] - golsG2[j]
        GPG[i2] = GPG[i2] - golsG2[j]
        GCG[i2] = GCG[i2] - golsG[j]
        jogosG[j] = 0
    }
    if (jogosG[j] == 3) {
        pontosG[i] = pontosG[i] - 1
        pontosG[i2] = pontosG[i2] - 1
        jogosG[j] = 0
        jogosGj[i] = jogosGj[i] - 1
        empatesG[i] = empatesG[i] - 1
        jogosGj[i2] = jogosGj[i2] - 1
        empatesG[i2] = empatesG[i2] - 1
        GPG[i] = GPG[i] - golsG[j]
        GCG[i] = GCG[i] - golsG2[j]
        GPG[i2] = GPG[i2] - golsG2[j]
        GCG[i2] = GCG[i2] - golsG[j]
    }
    if (x != null && y != null && jogosG[j] == 0) {
        golsG[j] = x
        golsG2[j] = y
        if (x > y) {
            if (pontosG[i] >= 0) {
                pontosG[i] = parseInt(pontosG[i])
                pontosG[i] = pontosG[i] + 3
                jogosGj[i] = jogosGj[i] + 1
                jogosGj[i2] = jogosGj[i2] + 1
                vitoriasG[i] = vitoriasG[i] + 1
                derrotaG[i2] = derrotaG[i2] + 1
                GPG[i] = GPG[i] + x
                GCG[i] = GCG[i] + y
                GPG[i2] = GPG[i2] + y
                GCG[i2] = GCG[i2] + x
                jogosG[j] = 1
            }
            console.log(pontosG[i])
        } else if (y > x) {
            if (pontosG[i2] >= 0) {
                pontosG[i2] = parseInt(pontosG[i2])
                pontosG[i2] = pontosG[i2] + 3
                jogosGj[i] = jogosGj[i] + 1
                jogosGj[i2] = jogosGj[i2] + 1
                vitoriasG[i2] = vitoriasG[i2] + 1
                derrotaG[i] = derrotaG[i] + 1
                jogosG[j] = 2
                GPG[i] = GPG[i] + x
                GCG[i] = GCG[i] + y
                GPG[i2] = GPG[i2] + y
                GCG[i2] = GCG[i2] + x
            }
            console.log(pontosG[i2])
        } else if (x == y) {
            if (pontosG[i] >= 0) {
                pontosG[i] = pontosG[i] + 1
                jogosGj[i] = jogosGj[i] + 1
                empatesG[i] = empatesG[i] + 1
                GPG[i] = GPG[i] + x
                GCG[i] = GCG[i] + y
            }
            console.log(pontosG[i])

            if (pontosG[i2] >= 0) {
                pontosG[i2] = pontosG[i2] + 1
                jogosGj[i2] = jogosGj[i2] + 1
                empatesG[i2] = empatesG[i2] + 1
                GPG[i2] = GPG[i2] + y
                GCG[i2] = GCG[i2] + x
            }
            console.log(pontosG[i2])
            jogosG[j] = 3
        }

        SGG[i] = GPG[i] - GCG[i]
        SGG[i2] = GPG[i2] - GCG[i2]

        let n = [];
        let ts = [];
        let jj = [];
        let v = [];
        let ep = [];
        let derr = [];
        let GPG2 = [];
        let GCG2 = [];
        let SGG2 = [];
        let aux = 0

        for (let q = 0; q < timesG.length; q++) {
            n[q] = pontosG[q];
            ts[q] = timesG[q];
            jj[q] = jogosGj[q];
            v[q] = vitoriasG[q];
            ep[q] = empatesG[q]
            derr[q] = derrotaG[q]
            GPG2[q] = GPG[q]
            GCG2[q] = GCG[q]
            SGG2[q] = SGG[q]
        }
        for (let k = 0; k < timesG.length; k++) {
            for (let l = 0; l < timesG.length; l++) {
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

                    aux = GPG2[l + 1]
                    GPG2[l + 1] = GPG2[l]
                    GPG2[l] = aux

                    aux = GCG2[l + 1]
                    GCG2[l + 1] = GCG2[l]
                    GCG2[l] = aux

                    aux = SGG2[l + 1]
                    SGG2[l + 1] = SGG2[l]
                    SGG2[l] = aux
                }
            }
        }
        for (let k = 0; k < timesA.length; k++) {
            for (let l = 0; l < timesA.length; l++) {
                SGG2[l] = parseInt(SGG2[l])
                n[l] = parseInt(n[l])
                if (n[l] == n[l + 1]) {
                    if (SGG2[l] < SGG2[l + 1]) {
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

                        aux = GPG2[l + 1]
                        GPG2[l + 1] = GPG2[l]
                        GPG2[l] = aux

                        aux = GCG2[l + 1]
                        GCG2[l + 1] = GCG2[l]
                        GCG2[l] = aux

                        aux = SGG2[l + 1]
                        SGG2[l + 1] = SGG2[l]
                        SGG2[l] = aux
                    }
                }
            }
        }
        for (let k = 0; k < timesA.length; k++) {
            for (let l = 0; l < timesA.length; l++) {
                SGG2[l] = parseInt(SGG2[l])
                n[l] = parseInt(n[l])
                if (n[l] == n[l + 1]) {
                    if (SGG2[l] == SGG2[l + 1]) {
                    if (GPG2[l] < GPG2[l + 1]) {
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

                        aux = GPG2[l + 1]
                        GPG2[l + 1] = GPG2[l]
                        GPG2[l] = aux

                        aux = GCG2[l + 1]
                        GCG2[l + 1] = GCG2[l]
                        GCG2[l] = aux

                        aux = SGG2[l + 1]
                        SGG2[l + 1] = SGG2[l]
                        SGG2[l] = aux
                    }
                }
            }
            }
        }
        for (let t = 0; t < timesG.length; t++) {
            document.getElementById("P" + t + "-textG").innerHTML = ts[t]
            document.getElementById("P" + t + "G").innerHTML = n[t]
            document.getElementById("P" + t + "JG").innerHTML = jj[t]
            document.getElementById("P" + t + "VG").innerHTML = v[t]
            document.getElementById("P" + t + "EG").innerHTML = ep[t]
            document.getElementById("P" + t + "DG").innerHTML = derr[t]
            document.getElementById("P" + t + "GPG").innerHTML = GPG2[t]
            document.getElementById("P" + t + "GCG").innerHTML = GCG2[t]
            document.getElementById("P" + t + "SGG").innerHTML = SGG2[t]
        }
        vencedores[12] = ts[0]
        vencedores[13] = ts[1]
    }
}
for(let r = 0; r <= 11;r++){
    localStorage.setItem("entradaG["+r+"]",entradaG[r])
    }
}