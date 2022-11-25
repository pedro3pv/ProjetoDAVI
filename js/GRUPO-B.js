// javascript desenvolvido por pedro augusto

let jogos = [];
let jogosj = [0, 0, 0, 0];
let vitorias = [0, 0, 0, 0];
let empates = [0, 0, 0, 0];
let derrota = [0, 0, 0, 0];
let GP = [0, 0, 0, 0];
let GC = [0, 0, 0, 0];
let SG = [0, 0, 0, 0];
//para mais times coloque os nomes dos times na array times

//o id dos inputs pode ser qualquer nome que voce saiba diferenciar

//sequencia     0        1          2         3
let times = ["Inglaterra","Irã","Estados Unidos","País de Gales"];
gols = [];
gols2 = [];

let pontos = [0, 0, 0, 0];

let entradaB = [];

window.onload = function() {
    for(let z = 0; z <= 11;z++){
        entradaB[z] = sessionStorage.getItem("entradaB["+z+"]")
        }
        let str = entradaB.join(",")
        console.log("B")
        console.log(str)
        document.getElementById("21/11IB").value = entradaB[0]
        document.getElementById("21/11IRB").value = entradaB[1] 
        document.getElementById("21/11EB").value = entradaB[2] 
        document.getElementById("21/11PB").value = entradaB[3] 
        document.getElementById("25/11PB").value = entradaB[4] 
        document.getElementById("25/11IRB").value = entradaB[5] 
        document.getElementById("25/11IB").value = entradaB[6] 
        document.getElementById("25/11EB").value = entradaB[7] 
        document.getElementById("29/11PB").value = entradaB[8] 
        document.getElementById("29/11IB").value = entradaB[9] 
        document.getElementById("29/11IRB").value = entradaB[10] 
        document.getElementById("29/11EB").value = entradaB[11] 
}

//qatar é 0
//equador é 1
//senegal é 2
//holanda é 3
// j é o numero do jogo, acada novo jogo, aumentar em 1

// 21/11
document.getElementById("21/11IB").oninput = function () {
    entradaB[0] = document.getElementById("21/11IB").value;
    console.log(entradaB[0])
    calcB(entradaB[0], entradaB[1], 0, 0, 1);
}
document.getElementById("21/11IRB").oninput = function () {
    entradaB[1] = document.getElementById("21/11IRB").value;
    console.log(entradaB[1])
    calcB(entradaB[0], entradaB[1], 0, 0, 1);
}
// 21/11
document.getElementById("21/11EB").oninput = function () {
    entradaB[2] = document.getElementById("21/11EB").value;
    console.log(entradaB[2])
    calcB(entradaB[2], entradaB[3], 1, 2, 3);
}
document.getElementById("21/11PB").oninput = function () {
    entradaB[3] = document.getElementById("21/11PB").value;
    console.log(entradaB[3])
    calcB(entradaB[2], entradaB[3], 1, 2, 3);
}
// 25/11
document.getElementById("25/11PB").oninput = function () {
    entradaB[4] = document.getElementById("25/11PB").value;
    console.log(entradaB[4])
    calcB(entradaB[4], entradaB[5], 2, 3, 1);
}
document.getElementById("25/11IRB").oninput = function () {
    entradaB[5] = document.getElementById("25/11IRB").value;
    console.log(entradaB[5])
    calcB(entradaB[4], entradaB[5], 2, 3, 1);
}
// 25/11 2
document.getElementById("25/11IB").oninput = function () {
    entradaB[6] = document.getElementById("25/11IB").value;
    console.log(entradaB[6])
    calcB(entradaB[6], entradaB[7], 3, 0, 2);
}
document.getElementById("25/11EB").oninput = function () {
    entradaB[7] = document.getElementById("25/11EB").value;
    console.log(entradaB[7])
    calcB(entradaB[6], entradaB[7], 3, 0, 2);
}
// 29/11
document.getElementById("29/11PB").oninput = function () {
    entradaB[8] = document.getElementById("29/11PB").value;
    console.log(entradaB[8])
    calcB(entradaB[8], entradaB[9], 4, 3, 0);
}
document.getElementById("29/11IB").oninput = function () {
    entradaB[9] = document.getElementById("29/11IB").value;
    console.log(entradaB[9])
    calcB(entradaB[8], entradaB[9], 4, 3, 0);
}
// 29/11 2
document.getElementById("29/11IRB").oninput = function () {
    entradaB[10] = document.getElementById("29/11IRB").value;
    console.log(entradaB[10])
    calcB(entradaB[10], entradaB[11], 5, 1, 2);
}
document.getElementById("29/11EB").oninput = function () {
    entradaB[11] = document.getElementById("29/11EB").value;
    console.log(entradaB[11])
    calcB(entradaB[10], entradaB[11], 5, 1, 2);
}

function calcB(x, y, j, i, i2) {
    x = parseInt(x)
    y = parseInt(y)
    if(x != "" && y != "" || x === 0 || y === 0){
    if (jogos[j] == null) {
        jogos[j] = 0
    }
    if (jogos[j] == 1) {
        pontos[i] = pontos[i] - 3
        jogosj[i] = jogosj[i] - 1
        jogosj[i2] = jogosj[i2] - 1
        vitorias[i] = vitorias[i] - 1
        derrota[i2] = derrota[i2] - 1
        GP[i] = GP[i] - gols[j]
        GC[i] = GC[i] - gols2[j]
        GP[i2] = GP[i2] - gols2[j]
        GC[i2] = GC[i2] - gols[j]
        jogos[j] = 0
    }
    if (jogos[j] == 2) {
        pontos[i2] = pontos[i2] - 3
        jogosj[i] = jogosj[i] - 1
        jogosj[i2] = jogosj[i2] - 1
        vitorias[i2] = vitorias[i2] - 1
        derrota[i] = derrota[i] - 1
        GP[i] = GP[i] - gols[j]
        GC[i] = GC[i] - gols2[j]
        GP[i2] = GP[i2] - gols2[j]
        GC[i2] = GC[i2] - gols[j]
        jogos[j] = 0
    }
    if (jogos[j] == 3) {
        pontos[i] = pontos[i] - 1
        pontos[i2] = pontos[i2] - 1
        jogos[j] = 0
        jogosj[i] = jogosj[i] - 1
        empates[i] = empates[i] - 1
        jogosj[i2] = jogosj[i2] - 1
        empates[i2] = empates[i2] - 1
        GP[i] = GP[i] - gols[j]
        GC[i] = GC[i] - gols2[j]
        GP[i2] = GP[i2] - gols2[j]
        GC[i2] = GC[i2] - gols[j]
    }
    if (x != null && y != null && jogos[j] == 0) {
        gols[j] = x
        gols2[j] = y
        if (x > y) {
            if (pontos[i] >= 0) {
                pontos[i] = parseInt(pontos[i])
                pontos[i] = pontos[i] + 3
                jogosj[i] = jogosj[i] + 1
                jogosj[i2] = jogosj[i2] + 1
                vitorias[i] = vitorias[i] + 1
                derrota[i2] = derrota[i2] + 1
                GP[i] = GP[i] + x
                GC[i] = GC[i] + y
                GP[i2] = GP[i2] + y
                GC[i2] = GC[i2] + x
                jogos[j] = 1
            }
            console.log(pontos[i])
        } else if (y > x) {
            if (pontos[i2] >= 0) {
                pontos[i2] = parseInt(pontos[i2])
                pontos[i2] = pontos[i2] + 3
                jogosj[i] = jogosj[i] + 1
                jogosj[i2] = jogosj[i2] + 1
                vitorias[i2] = vitorias[i2] + 1
                derrota[i] = derrota[i] + 1
                jogos[j] = 2
                GP[i] = GP[i] + x
                GC[i] = GC[i] + y
                GP[i2] = GP[i2] + y
                GC[i2] = GC[i2] + x
            }
            console.log(pontos[i2])
        } else if (x == y) {
            if (pontos[i] >= 0) {
                pontos[i] = pontos[i] + 1
                jogosj[i] = jogosj[i] + 1
                empates[i] = empates[i] + 1
                GP[i] = GP[i] + x
                GC[i] = GC[i] + y
            }
            console.log(pontos[i])

            if (pontos[i2] >= 0) {
                pontos[i2] = pontos[i2] + 1
                jogosj[i2] = jogosj[i2] + 1
                empates[i2] = empates[i2] + 1
                GP[i2] = GP[i2] + y
                GC[i2] = GC[i2] + x
            }
            console.log(pontos[i2])
            jogos[j] = 3
        }

        SG[i] = GP[i] - GC[i]
        SG[i2] = GP[i2] - GC[i2]

        let n = [];
        let ts = [];
        let jj = [];
        let v = [];
        let ep = [];
        let derr = [];
        let GP2 = [];
        let GC2 = [];
        let SG2 = [];
        let aux = 0

        for (let q = 0; q < times.length; q++) {
            n[q] = pontos[q];
            ts[q] = times[q];
            jj[q] = jogosj[q];
            v[q] = vitorias[q];
            ep[q] = empates[q]
            derr[q] = derrota[q]
            GP2[q] = GP[q]
            GC2[q] = GC[q]
            SG2[q] = SG[q]
        }
        for (let k = 0; k < times.length; k++) {
            for (let l = 0; l < times.length; l++) {
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

                    aux = GP2[l + 1]
                    GP2[l + 1] = GP2[l]
                    GP2[l] = aux

                    aux = GC2[l + 1]
                    GC2[l + 1] = GC2[l]
                    GC2[l] = aux

                    aux = SG2[l + 1]
                    SG2[l + 1] = SG2[l]
                    SG2[l] = aux
                }
            }
        }
        for (let t = 0; t < times.length; t++) {
            document.getElementById("P" + t + "-textB").innerHTML = ts[t]
            document.getElementById("P" + t + "B").innerHTML = n[t]
            document.getElementById("P" + t + "JB").innerHTML = jj[t]
            document.getElementById("P" + t + "VB").innerHTML = v[t]
            document.getElementById("P" + t + "EB").innerHTML = ep[t]
            document.getElementById("P" + t + "DB").innerHTML = derr[t]
            document.getElementById("P" + t + "GPB").innerHTML = GP2[t]
            document.getElementById("P" + t + "GCB").innerHTML = GC2[t]
            document.getElementById("P" + t + "SGB").innerHTML = SG2[t]
        }
    }
}
for(let r = 0; r <= 11;r++){
    sessionStorage.setItem("entradaB["+r+"]",entradaB[r])
    }
}