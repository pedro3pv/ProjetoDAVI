// javascript desenvolvido por pedro augusto

let jogosC = [];
let jogosCj = [0, 0, 0, 0];
let vitoriasC = [0, 0, 0, 0];
let empatesC = [0, 0, 0, 0];
let derrotaC = [0, 0, 0, 0];
let GPC = [0, 0, 0, 0];
let GCC = [0, 0, 0, 0];
let SGC = [0, 0, 0, 0];
//para mais timesC coloque os nomes dos timesC na array timesC

//o id dos inputs pode ser qualquer nome que voce saiba diferenciar

//sequencia     0        1          2         3
let timesC = ["Argentina","Arábia Saudita","México","Polônia"];
golsC = [];
golsC2 = [];

let pontosC = [0, 0, 0, 0];

let entradaC = [];

window.onload = function() {
    for(let z = 0; z <= 11;z++){
        entradaA[z] = sessionStorage.getItem("entradaA["+z+"]")
        }
        document.getElementById("20/11QA").value = entradaA[0]
        document.getElementById("20/11EA").value = entradaA[1] 
        document.getElementById("21/11SA").value = entradaA[2] 
        document.getElementById("21/11HA").value = entradaA[3] 
        document.getElementById("25/11QA").value = entradaA[4] 
        document.getElementById("25/11SA").value = entradaA[5] 
        document.getElementById("25/11HA").value = entradaA[6] 
        document.getElementById("25/11EA").value = entradaA[7] 
        document.getElementById("29/11HA").value = entradaA[8] 
        document.getElementById("29/11QA").value = entradaA[9] 
        document.getElementById("29/11EA").value = entradaA[10] 
        document.getElementById("29/11SA").value = entradaA[11] 
}

//qatar é 0
//equador é 1
//senegal é 2
//holanda é 3
// j é o numero do jogo, acada novo jogo, aumentar em 1

// 22/11
document.getElementById("22/11AC").oninput = function () {
    entradaC[0] = document.getElementById("22/11AC").value;
    console.log(entradaC[0])
    calcC(entradaC[0], entradaC[1], 0, 0, 1);
}
document.getElementById("22/11ARC").oninput = function () {
    entradaC[1] = document.getElementById("22/11ARC").value;
    console.log(entradaC[1])
    calcC(entradaC[0], entradaC[1], 0, 0, 1);
}
// 22/11 2
document.getElementById("22/11MC").oninput = function () {
    entradaC[2] = document.getElementById("22/11MC").value;
    console.log(entradaC[2])
    calcC(entradaC[2], entradaC[3], 1, 2, 3);
}
document.getElementById("22/11PC").oninput = function () {
    entradaC[3] = document.getElementById("22/11PC").value;
    console.log(entradaC[3])
    calcC(entradaC[2], entradaC[3], 1, 2, 3);
}
// 26/11
document.getElementById("26/11PC").oninput = function () {
    entradaC[4] = document.getElementById("26/11PC").value;
    console.log(entradaC[4])
    calcC(entradaC[4], entradaC[5], 2, 1, 3);
}
document.getElementById("26/11ARC").oninput = function () {
    entradaC[5] = document.getElementById("26/11ARC").value;
    console.log(entradaC[5])
    calcC(entradaC[4], entradaC[5], 2, 1, 3);
}
// 26/11 2
document.getElementById("26/11AC").oninput = function () {
    entradaC[6] = document.getElementById("26/11AC").value;
    console.log(entradaC[6])
    calcC(entradaC[6], entradaC[7], 3, 0, 2);
}
document.getElementById("26/11MC").oninput = function () {
    entradaC[7] = document.getElementById("26/11MC").value;
    console.log(entradaC[7])
    calcC(entradaC[6], entradaC[7], 3, 0, 2);
}
// 30/11
document.getElementById("30/11PC").oninput = function () {
    entradaC[8] = document.getElementById("30/11PC").value;
    console.log(entradaC[8])
    calcC(entradaC[8], entradaC[9], 4, 3, 0);
}
document.getElementById("30/11AC").oninput = function () {
    entradaC[9] = document.getElementById("30/11AC").value;
    console.log(entradaC[9])
    calcC(entradaC[8], entradaC[9], 4, 3, 0);
}
// 30/11 2
document.getElementById("30/11ARC").oninput = function () {
    entradaC[10] = document.getElementById("30/11ARC").value;
    console.log(entradaC[10])
    calcC(entradaC[10], entradaC[11], 5, 1, 2);
}
document.getElementById("30/11MC").oninput = function () {
    entradaC[11] = document.getElementById("30/11MC").value;
    console.log(entradaC[11])
    calcC(entradaC[10], entradaC[11], 5, 1, 2);
}

function calcC(x, y, j, i, i2) {
    x = parseInt(x)
    y = parseInt(y)
    if(x != "" && y != "" || x === 0 || y === 0){
    if (jogosC[j] == null) {
        jogosC[j] = 0
    }
    if (jogosC[j] == 1) {
        pontosC[i] = pontosC[i] - 3
        jogosCj[i] = jogosCj[i] - 1
        jogosCj[i2] = jogosCj[i2] - 1
        vitoriasC[i] = vitoriasC[i] - 1
        derrotaC[i2] = derrotaC[i2] - 1
        GPC[i] = GPC[i] - golsC[j]
        GCC[i] = GCC[i] - golsC2[j]
        GPC[i2] = GPC[i2] - golsC2[j]
        GCC[i2] = GCC[i2] - golsC[j]
        jogosC[j] = 0
    }
    if (jogosC[j] == 2) {
        pontosC[i2] = pontosC[i2] - 3
        jogosCj[i] = jogosCj[i] - 1
        jogosCj[i2] = jogosCj[i2] - 1
        vitoriasC[i2] = vitoriasC[i2] - 1
        derrotaC[i] = derrotaC[i] - 1
        GPC[i] = GPC[i] - golsC[j]
        GCC[i] = GCC[i] - golsC2[j]
        GPC[i2] = GPC[i2] - golsC2[j]
        GCC[i2] = GCC[i2] - golsC[j]
        jogosC[j] = 0
    }
    if (jogosC[j] == 3) {
        pontosC[i] = pontosC[i] - 1
        pontosC[i2] = pontosC[i2] - 1
        jogosC[j] = 0
        jogosCj[i] = jogosCj[i] - 1
        empatesC[i] = empatesC[i] - 1
        jogosCj[i2] = jogosCj[i2] - 1
        empatesC[i2] = empatesC[i2] - 1
        GPC[i] = GPC[i] - golsC[j]
        GCC[i] = GCC[i] - golsC2[j]
        GPC[i2] = GPC[i2] - golsC2[j]
        GCC[i2] = GCC[i2] - golsC[j]
    }
    if (x != null && y != null && jogosC[j] == 0) {
        golsC[j] = x
        golsC2[j] = y
        if (x > y) {
            if (pontosC[i] >= 0) {
                pontosC[i] = parseInt(pontosC[i])
                pontosC[i] = pontosC[i] + 3
                jogosCj[i] = jogosCj[i] + 1
                jogosCj[i2] = jogosCj[i2] + 1
                vitoriasC[i] = vitoriasC[i] + 1
                derrotaC[i2] = derrotaC[i2] + 1
                GPC[i] = GPC[i] + x
                GCC[i] = GCC[i] + y
                GPC[i2] = GPC[i2] + y
                GCC[i2] = GCC[i2] + x
                jogosC[j] = 1
            }
            console.log(pontosC[i])
        } else if (y > x) {
            if (pontosC[i2] >= 0) {
                pontosC[i2] = parseInt(pontosC[i2])
                pontosC[i2] = pontosC[i2] + 3
                jogosCj[i] = jogosCj[i] + 1
                jogosCj[i2] = jogosCj[i2] + 1
                vitoriasC[i2] = vitoriasC[i2] + 1
                derrotaC[i] = derrotaC[i] + 1
                jogosC[j] = 2
                GPC[i] = GPC[i] + x
                GCC[i] = GCC[i] + y
                GPC[i2] = GPC[i2] + y
                GCC[i2] = GCC[i2] + x
            }
            console.log(pontosC[i2])
        } else if (x == y) {
            if (pontosC[i] >= 0) {
                pontosC[i] = pontosC[i] + 1
                jogosCj[i] = jogosCj[i] + 1
                empatesC[i] = empatesC[i] + 1
                GPC[i] = GPC[i] + x
                GCC[i] = GCC[i] + y
            }
            console.log(pontosC[i])

            if (pontosC[i2] >= 0) {
                pontosC[i2] = pontosC[i2] + 1
                jogosCj[i2] = jogosCj[i2] + 1
                empatesC[i2] = empatesC[i2] + 1
                GPC[i2] = GPC[i2] + y
                GCC[i2] = GCC[i2] + x
            }
            console.log(pontosC[i2])
            jogosC[j] = 3
        }

        SGC[i] = GPC[i] - GCC[i]
        SGC[i2] = GPC[i2] - GCC[i2]

        let n = [];
        let ts = [];
        let jj = [];
        let v = [];
        let ep = [];
        let derr = [];
        let GPC2 = [];
        let GCC2 = [];
        let SGC2 = [];
        let aux = 0

        for (let q = 0; q < timesC.length; q++) {
            n[q] = pontosC[q];
            ts[q] = timesC[q];
            jj[q] = jogosCj[q];
            v[q] = vitoriasC[q];
            ep[q] = empatesC[q]
            derr[q] = derrotaC[q]
            GPC2[q] = GPC[q]
            GCC2[q] = GCC[q]
            SGC2[q] = SGC[q]
        }
        for (let k = 0; k < timesC.length; k++) {
            for (let l = 0; l < timesC.length; l++) {
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

                    aux = GPC2[l + 1]
                    GPC2[l + 1] = GPC2[l]
                    GPC2[l] = aux

                    aux = GCC2[l + 1]
                    GCC2[l + 1] = GCC2[l]
                    GCC2[l] = aux

                    aux = SGC2[l + 1]
                    SGC2[l + 1] = SGC2[l]
                    SGC2[l] = aux
                }
            }
        }
        for (let t = 0; t < timesC.length; t++) {
            document.getElementById("P" + t + "-textC").innerHTML = ts[t]
            document.getElementById("P" + t + "C").innerHTML = n[t]
            document.getElementById("P" + t + "JC").innerHTML = jj[t]
            document.getElementById("P" + t + "VC").innerHTML = v[t]
            document.getElementById("P" + t + "EC").innerHTML = ep[t]
            document.getElementById("P" + t + "DC").innerHTML = derr[t]
            document.getElementById("P" + t + "GPC").innerHTML = GPC2[t]
            document.getElementById("P" + t + "GCC").innerHTML = GCC2[t]
            document.getElementById("P" + t + "SGC").innerHTML = SGC2[t]
        }
    }
}
for(let r = 0; r <= 11;r++){
    sessionStorage.setItem("entradaA["+r+"]",entradaA[r])
    }
}