// javascript desenvolvido por pedro augusto

let jogos = [];

let times = [];
let pontos = [0,0,0,0]
let n = [0,0,0,0]

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
    calc(qatar[1], senegal[1], 1, 0, 2);
}
document.getElementById("25/11S").onchange = function () {
    senegal[1] = document.getElementById("25/11S").value;
    console.log(senegal[1])
    calc(qatar[1], senegal[1], 1, 0, 2);
}
// 25/11 2
document.getElementById("25/11H").onchange = function () {
    holanda[1] = document.getElementById("25/11H").value;
    console.log(holanda[1])
    calc(holanda[1], equador[1], 2, 3, 1);
}
document.getElementById("25/11E").onchange = function () {
    equador[1] = document.getElementById("25/11E").value;
    console.log(equador[1])
    calc(holanda[1], equador[1], 2, 3, 1);
}
// 29/11
document.getElementById("29/11H").onchange = function () {
    holanda[2] = document.getElementById("29/11H").value;
    console.log(holanda[2])
    calc(holanda[2], qatar[2], 3, 3, 0);
}
document.getElementById("29/11Q").onchange = function () {
    qatar[2] = document.getElementById("29/11Q").value;
    console.log(qatar[2])
    calc(holanda[2], qatar[2], 3, 3, 0);
}
// 29/11 2
document.getElementById("29/11E").onchange = function () {
    equador[2] = document.getElementById("29/11E").value;
    console.log(equador[2])
    calc(equador[2], senegal[2], 4, 1, 2);
}
document.getElementById("29/11S").onchange = function () {
    senegal[2] = document.getElementById("29/11S").value;
    console.log(senegal[2])
    calc(equador[2], senegal[2], 4, 1, 2);
}

function calc(x, y, j, i, i2) {
    let aux = 0
    if (jogos[j] == null) {
        jogos[j] = 0
    }
    if (jogos[j] == 1) {
        pontos[i] = pontos[i] - 3
        jogos[j] = 0
    }
    if (jogos[j] == 2) {
        pontos[i2] = pontos[i2] - 3
        jogos[j] = 0
    }
    if (jogos[j] == 3) {
        pontos[i] = pontos[i] - 1
        pontos[i2] = pontos[i2] - 1
        jogos[j] = 0
    }
    if (x != null && y != null && x != "" && y != "" && jogos[j] == 0) {
        if (x > y) {
            if (pontos[i] >= 0) {
                pontos[i] = parseInt(pontos[i])
                pontos[i] = pontos[i] + 3
                jogos[j] = 1
            } else {
                pontos[i] = 3
                jogos[j] = 1
            }
            console.log(pontos[i])
        } else if (y > x) {
            if (pontos[i2] >= 0) {
                pontos[i2] = parseInt(pontos[i2])
                pontos[i2] = pontos[i2] + 3
                jogos[j] = 2
            } else {
                pontos[i2] = 3
                jogos[j] = 2
            }
            console.log(pontos[i2])
        } else if (x == y) {
            if (pontos[i] >= 0) {
                pontos[i] = pontos[i] + 1
                jogos[j] = 1
            } else {
                pontos[i] = 1
                jogos[j] = 1
            }
            console.log(pontos[i])

            if (pontos[i2] >= 0) {
                pontos[i2] = pontos[i2] + 1
                jogos[j] = 2
            } else {
                pontos[i2] = 1
                jogos[j] = 2
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
        var l = 0;
        var k = 0;
        while (k < 4) {
            l = 0
            while (l < 4) {
                n[l] = parseInt(n[l])
                if (n[l] < n[l + 1]) {
                    aux = n[l + 1]
                    aux2 = times[l + 1]
                    n[l + 1] = n[l]
                    times[l + 1] = times[l]
                    n[l] = aux
                    times[l] = aux2
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
    }
}