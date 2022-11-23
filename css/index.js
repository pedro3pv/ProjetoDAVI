// javascript desenvolvido por pedro augusto

let jogos = [];
let jogosj = [0,0,0,0];
let vitorias = [0,0,0,0];
let empates = [0,0,0,0];
let derrota = [0,0,0,0];

let times = [];
let pontos = [0,0,0,0];
let n = [0,0,0,0];

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
document.getElementById("20/11Q").onchange = function () {
    qatar[0] = document.getElementById("20/11Q").value;
    console.log(qatar[0])
    calc(qatar[0], equador[0], 0, 0, 1);
}
document.getElementById("20/11E").onchange = function () {
    equador[0] = document.getElementById("20/11E").value;
    console.log(equador[0])
    calc(qatar[0], equador[0], 0, 0, 1);
}
// 21/11
document.getElementById("21/11S").onchange = function () {
    senegal[0] = document.getElementById("21/11S").value;
    console.log(senegal[0])
    calc(senegal[0], holanda[0], 1, 2, 3);
}
document.getElementById("21/11H").onchange = function () {
    holanda[0] = document.getElementById("21/11H").value;
    console.log(holanda[0])
    calc(senegal[0], holanda[0], 1, 2, 3);
}
// 25/11
document.getElementById("25/11Q").onchange = function () {
    qatar[1] = document.getElementById("25/11Q").value;
    console.log(qatar[1])
    calc(qatar[1], senegal[1], 2, 0, 2);
}
document.getElementById("25/11S").onchange = function () {
    senegal[1] = document.getElementById("25/11S").value;
    console.log(senegal[1])
    calc(qatar[1], senegal[1], 2, 0, 2);
}
// 25/11 2
document.getElementById("25/11H").onchange = function () {
    holanda[1] = document.getElementById("25/11H").value;
    console.log(holanda[1])
    calc(holanda[1], equador[1], 3, 3, 1);
}
document.getElementById("25/11E").onchange = function () {
    equador[1] = document.getElementById("25/11E").value;
    console.log(equador[1])
    calc(holanda[1], equador[1], 3, 3, 1);
}
// 29/11
document.getElementById("29/11H").onchange = function () {
    holanda[2] = document.getElementById("29/11H").value;
    console.log(holanda[2])
    calc(holanda[2], qatar[2], 4, 3, 0);
}
document.getElementById("29/11Q").onchange = function () {
    qatar[2] = document.getElementById("29/11Q").value;
    console.log(qatar[2])
    calc(holanda[2], qatar[2], 4, 3, 0);
}
// 29/11 2
document.getElementById("29/11E").onchange = function () {
    equador[2] = document.getElementById("29/11E").value;
    console.log(equador[2])
    calc(equador[2], senegal[2], 5, 1, 2);
}
document.getElementById("29/11S").onchange = function () {
    senegal[2] = document.getElementById("29/11S").value;
    console.log(senegal[2])
    calc(equador[2], senegal[2], 5, 1, 2);
}

function calc(x, y, j, i, i2) {
    let aux = 0
    if (jogos[j] == null) {
        jogos[j] = 0
    }
    if (jogos[j] == 1) {
        pontos[i] = pontos[i] - 3
        jogos[j] = 0
        jogosj[i] = jogosj[i] - 1
        jogosj[i2] = jogosj[i2] - 1
        vitorias[i] = vitorias[i] - 1
        vitorias[i2] = vitorias[i2] - 1
    }
    if (jogos[j] == 2) {
        pontos[i2] = pontos[i2] - 3
        jogos[j] = 0
        jogosj[i] = jogosj[i] - 1
        jogosj[i2] = jogosj[i2] - 1
        vitorias[i] = vitorias[i] - 1
        vitorias[i2] = vitorias[i2] - 1
    }
    if (jogos[j] == 3) {
        pontos[i] = pontos[i] - 1
        pontos[i2] = pontos[i2] - 1
        jogos[j] = 0
        jogosj[i] = jogosj[i] - 1
        jogosj[i2] = jogosj[i2] - 1
        empates[i] = empates[i] - 1
        empates[i2] = empates[i2] - 1
    }
    if (x != null && y != null && x != "" && y != "" && jogos[j] == 0) {
        if (x > y) {
            if (pontos[i] >= 0) {
                pontos[i] = parseInt(pontos[i])
                pontos[i] = pontos[i] + 3
                jogos[j] = 1
                jogosj[i] = jogosj[i] + 1
                jogosj[i2] = jogosj[i2] + 1
                vitorias[i] = vitorias[i] + 1
                derrota[i2] = derrota[i2] + 1
            } else {
                pontos[i] = 3
                jogos[j] = 1
                jogosj[i] = jogosj[i] + 1
                jogosj[i2] = jogosj[i2] + 1
                vitorias[i] = vitorias[i] + 1
                derrota[i2] = derrota[i2] + 1
            }
            console.log(pontos[i])
        } else if (y > x) {
            if (pontos[i2] >= 0) {
                pontos[i2] = parseInt(pontos[i2])
                pontos[i2] = pontos[i2] + 3
                jogos[j] = 2
                jogosj[i] = jogosj[i] + 1
                jogosj[i2] = jogosj[i2] + 1
                vitorias[i2] = vitorias[i2] + 1
                derrota[i] = derrota[i] + 1
            } else {
                pontos[i2] = 3
                jogos[j] = 2
                jogosj[i] = jogosj[i] + 1
                jogosj[i2] = jogosj[i2] + 1
                vitorias[i2] = vitorias[i2] + 1
                derrota[i] = derrota[i] + 1
            }
            console.log(pontos[i2])
        } else if (x == y) {
            if (pontos[i] >= 0) {
                pontos[i] = pontos[i] + 1
                jogosj[i] = jogosj[i] + 1
                empates[i] = empates[i] + 1
            } else {
                pontos[i] = 1
                jogosj[i] = jogosj[i] + 1
                empates[i] = empates[i] + 1
            }
            console.log(pontos[i])

            if (pontos[i2] >= 0) {
                pontos[i2] = pontos[i2] + 1
                jogosj[i2] = jogosj[i2] + 1
                empates[i2] = empates[i2] + 1
            } else {
                pontos[i2] = 1
                jogosj[i2] = jogosj[i2] + 1
                empates[i2] = empates[i2] + 1
            }
            console.log(pontos[i2])
            jogos[j] = 3
        }
        n[0] = pontos[0]
        n[1] = pontos[1]
        n[2] = pontos[2]
        n[3] = pontos[3]

        times[0] = "Qatar"
        times[1] = "Equador"
        times[2] = "Senegal"
        times[3] = "Holanda"
        let aux2 = 0
        let aux3 = 0
        let aux4 = 0
        let aux5 = 0
        let aux6 = 0
        var l = 0;
        var k = 0;
        while (k < 4) {
            l = 0
            while (l < 4) {
                n[l] = parseInt(n[l])
                if (n[l] < n[l + 1]) {
                    aux = n[l + 1]
                    aux2 = times[l + 1]
                    aux3 = jogosj[l + 1]
                    aux4 = vitorias[l + 1]
                    aux5 = empates[l + 1]
                    aux6 = derrota[l + 1]
                    n[l + 1] = n[l]
                    times[l + 1] = times[l]
                    jogosj[l + 1] = jogosj[l]
                    vitorias[l + 1] = vitorias[l]
                    empates[l + 1] = empates[l]
                    derrota[l + 1] = derrota[l]
                    n[l] = aux
                    times[l] = aux2
                    jogosj[l] = aux3
                    vitorias[l] = aux4
                    empates[l] = aux5
                    derrota[l] = aux6
                }
                l++
            }
            k++
        }
        document.getElementById("P1-text").innerHTML = times[0]
        document.getElementById("P2-text").innerHTML = times[1]
        document.getElementById("P3-text").innerHTML = times[2]
        document.getElementById("P4-text").innerHTML = times[3]
        document.getElementById("P1").innerHTML = n[0]
        document.getElementById("P2").innerHTML = n[1]
        document.getElementById("P3").innerHTML = n[2]
        document.getElementById("P4").innerHTML = n[3]
        document.getElementById("P1J").innerHTML = jogosj[0]
        document.getElementById("P2J").innerHTML = jogosj[1]
        document.getElementById("P3J").innerHTML = jogosj[2]
        document.getElementById("P4J").innerHTML = jogosj[3]
        document.getElementById("P1V").innerHTML = vitorias[0]
        document.getElementById("P2V").innerHTML = vitorias[1]
        document.getElementById("P3V").innerHTML = vitorias[2]
        document.getElementById("P4V").innerHTML = vitorias[3]
        document.getElementById("P1E").innerHTML = empates[0]
        document.getElementById("P2E").innerHTML = empates[1]
        document.getElementById("P3E").innerHTML = empates[2]
        document.getElementById("P4E").innerHTML = empates[3]
        document.getElementById("P1D").innerHTML = derrota[0]
        document.getElementById("P2D").innerHTML = derrota[1]
        document.getElementById("P3D").innerHTML = derrota[2]
        document.getElementById("P4D").innerHTML = derrota[3]
    }
}