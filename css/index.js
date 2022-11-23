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
let times = ["Qatar","Equador","Senegal","Holanda"];
gols = [];
gols2 = [];

let pontos = [0, 0, 0, 0];

let entrada = 0
let entrada2 = 0

let qatar = [];
let equador = [];
let senegal = [];
let holanda = [];

//qatar é 0
//equador é 1
//senegal é 2
//holanda é 3
// j é o numero do jogo, acada novo jogo, aumentar em 1

// 20/11
document.getElementById("20/11Q").oninput = function () {
    qatar[0] = document.getElementById("20/11Q").value;
    console.log(qatar[0])
    calc(qatar[0], equador[0], 0, 0, 1);
}
document.getElementById("20/11E").oninput = function () {
    equador[0] = document.getElementById("20/11E").value;
    console.log(equador[0])
    calc(qatar[0], equador[0], 0, 0, 1);
}
// 21/11
document.getElementById("21/11S").oninput = function () {
    senegal[0] = document.getElementById("21/11S").value;
    console.log(senegal[0])
    calc(senegal[0], holanda[0], 1, 2, 3);
}
document.getElementById("21/11H").oninput = function () {
    holanda[0] = document.getElementById("21/11H").value;
    console.log(holanda[0])
    calc(senegal[0], holanda[0], 1, 2, 3);
}
// 25/11
document.getElementById("25/11Q").oninput = function () {
    qatar[1] = document.getElementById("25/11Q").value;
    console.log(qatar[1])
    calc(qatar[1], senegal[1], 2, 0, 2);
}
document.getElementById("25/11S").oninput = function () {
    senegal[1] = document.getElementById("25/11S").value;
    console.log(senegal[1])
    calc(qatar[1], senegal[1], 2, 0, 2);
}
// 25/11 2
document.getElementById("25/11H").oninput = function () {
    holanda[1] = document.getElementById("25/11H").value;
    console.log(holanda[1])
    calc(holanda[1], equador[1], 3, 3, 1);
}
document.getElementById("25/11E").oninput = function () {
    equador[1] = document.getElementById("25/11E").value;
    console.log(equador[1])
    calc(holanda[1], equador[1], 3, 3, 1);
}
// 29/11
document.getElementById("29/11H").oninput = function () {
    holanda[2] = document.getElementById("29/11H").value;
    console.log(holanda[2])
    calc(holanda[2], qatar[2], 4, 3, 0);
}
document.getElementById("29/11Q").oninput = function () {
    qatar[2] = document.getElementById("29/11Q").value;
    console.log(qatar[2])
    calc(holanda[2], qatar[2], 4, 3, 0);
}
// 29/11 2
document.getElementById("29/11E").oninput = function () {
    equador[2] = document.getElementById("29/11E").value;
    console.log(equador[2])
    calc(equador[2], senegal[2], 5, 1, 2);
}
document.getElementById("29/11S").oninput = function () {
    senegal[2] = document.getElementById("29/11S").value;
    console.log(senegal[2])
    calc(equador[2], senegal[2], 5, 1, 2);
}

function calc(x, y, j, i, i2) {
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
            document.getElementById("P" + t + "-text").innerHTML = ts[t]
            document.getElementById("P" + t).innerHTML = n[t]
            document.getElementById("P" + t + "J").innerHTML = jj[t]
            document.getElementById("P" + t + "V").innerHTML = v[t]
            document.getElementById("P" + t + "E").innerHTML = ep[t]
            document.getElementById("P" + t + "D").innerHTML = derr[t]
            document.getElementById("P" + t + "GP").innerHTML = GP2[t]
            document.getElementById("P" + t + "GC").innerHTML = GC2[t]
            document.getElementById("P" + t + "SG").innerHTML = SG2[t]
        }
    }
}
}