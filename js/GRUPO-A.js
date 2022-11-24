// javascript desenvolvido por pedro augusto

let jogosA = [];
let jogosJA = [0, 0, 0, 0];
let vitoriasA = [0, 0, 0, 0];
let empatesA = [0, 0, 0, 0];
let derrotaA = [0, 0, 0, 0];
let GPA = [0, 0, 0, 0];
let GCA = [0, 0, 0, 0];
let SGA = [0, 0, 0, 0];
//para mais times coloque os nomes dos times na array times

//o id dos inputs pode ser qualquer nome que voce saiba diferenciar

//sequencia     0        1          2         3
let timesA = ["Qatar","Equador","Senegal","Holanda"];
golsA = [];
golsA2 = [];

let pontosA = [0, 0, 0, 0];

let entradaA = [];

//qatar é 0
//equador é 1
//senegal é 2
//holanda é 3
// j é o numero do jogo, acada novo jogo, aumentar em 1

// 20/11
document.getElementById("20/11QA").oninput = function () {
    entradaA[0] = document.getElementById("20/11QA").value;
    console.log(entradaA[0])
    calcA(entradaA[0], entradaA[1], 0, 0, 1);
}
document.getElementById("20/11EA").oninput = function () {
    entradaA[1] = document.getElementById("20/11EA").value;
    console.log(entradaA[1])
    calcA(entradaA[0], entradaA[1], 0, 0, 1);
}
// 21/11
document.getElementById("21/11SA").oninput = function () {
    entradaA[2] = document.getElementById("21/11SA").value;
    console.log(entradaA[2])
    calcA(entradaA[2], entradaA[3], 1, 2, 3);
}
document.getElementById("21/11HA").oninput = function () {
    entradaA[3] = document.getElementById("21/11HA").value;
    console.log(entradaA[3])
    calcA(entradaA[2], entradaA[3], 1, 2, 3);
}
// 25/11
document.getElementById("25/11QA").oninput = function () {
    entradaA[4] = document.getElementById("25/11QA").value;
    console.log(entradaA[4])
    calcA(entradaA[4], entradaA[5], 2, 0, 2);
}
document.getElementById("25/11SA").oninput = function () {
    entradaA[5] = document.getElementById("25/11SA").value;
    console.log(entradaA[5])
    calcA(entradaA[4], entradaA[5], 2, 0, 2);
}
// 25/11 2
document.getElementById("25/11HA").oninput = function () {
    entradaA[6] = document.getElementById("25/11HA").value;
    console.log(entradaA[6])
    calcA(entradaA[6], entradaA[7], 3, 3, 1);
}
document.getElementById("25/11EA").oninput = function () {
    entradaA[7] = document.getElementById("25/11EA").value;
    console.log(entradaA[7])
    calcA(entradaA[6], entradaA[7], 3, 3, 1);
}
// 29/11
document.getElementById("29/11HA").oninput = function () {
    entradaA[8] = document.getElementById("29/11HA").value;
    console.log(entradaA[8])
    calcA(entradaA[8], entradaA[9], 4, 3, 0);
}
document.getElementById("29/11QA").oninput = function () {
    entradaA[9] = document.getElementById("29/11QA").value;
    console.log(entradaA[9])
    calcA(entradaA[8], entradaA[9], 4, 3, 0);
}
// 29/11 2
document.getElementById("29/11EA").oninput = function () {
    entradaA[10] = document.getElementById("29/11EA").value;
    console.log(entradaA[10])
    calcA(entradaA[10], entradaA[11], 5, 1, 2);
}
document.getElementById("29/11SA").oninput = function () {
    entradaA[11] = document.getElementById("29/11SA").value;
    console.log(entradaA[11])
    calcA(entradaA[10], entradaA[11], 5, 1, 2);
}

function calcA(x, y, j, i, i2) {
    x = parseInt(x)
    y = parseInt(y)
    if(x != "" && y != "" || x === 0 || y === 0){
    if (jogosA[j] == null) {
        jogosA[j] = 0
    }
    if (jogosA[j] == 1) {
        pontosA[i] = pontosA[i] - 3
        jogosJA[i] = jogosJA[i] - 1
        jogosJA[i2] = jogosJA[i2] - 1
        vitoriasA[i] = vitoriasA[i] - 1
        derrotaA[i2] = derrotaA[i2] - 1
        GPA[i] = GPA[i] - golsA[j]
        GCA[i] = GCA[i] - golsA2[j]
        GPA[i2] = GPA[i2] - golsA2[j]
        GCA[i2] = GCA[i2] - golsA[j]
        jogosA[j] = 0
    }
    if (jogosA[j] == 2) {
        pontosA[i2] = pontosA[i2] - 3
        jogosJA[i] = jogosJA[i] - 1
        jogosJA[i2] = jogosJA[i2] - 1
        vitoriasA[i2] = vitoriasA[i2] - 1
        derrotaA[i] = derrotaA[i] - 1
        GPA[i] = GPA[i] - golsA[j]
        GCA[i] = GCA[i] - golsA2[j]
        GPA[i2] = GPA[i2] - golsA2[j]
        GCA[i2] = GCA[i2] - golsA[j]
        jogosA[j] = 0
    }
    if (jogosA[j] == 3) {
        pontosA[i] = pontosA[i] - 1
        pontosA[i2] = pontosA[i2] - 1
        jogosA[j] = 0
        jogosJA[i] = jogosJA[i] - 1
        empatesA[i] = empatesA[i] - 1
        jogosJA[i2] = jogosJA[i2] - 1
        empatesA[i2] = empatesA[i2] - 1
        GPA[i] = GPA[i] - golsA[j]
        GCA[i] = GCA[i] - golsA2[j]
        GPA[i2] = GPA[i2] - golsA2[j]
        GCA[i2] = GCA[i2] - golsA[j]
    }
    if (x != null && y != null && jogosA[j] == 0) {
        golsA[j] = x
        golsA2[j] = y
        if (x > y) {
            if (pontosA[i] >= 0) {
                pontosA[i] = parseInt(pontosA[i])
                pontosA[i] = pontosA[i] + 3
                jogosJA[i] = jogosJA[i] + 1
                jogosJA[i2] = jogosJA[i2] + 1
                vitoriasA[i] = vitoriasA[i] + 1
                derrotaA[i2] = derrotaA[i2] + 1
                GPA[i] = GPA[i] + x
                GCA[i] = GCA[i] + y
                GPA[i2] = GPA[i2] + y
                GCA[i2] = GCA[i2] + x
                jogosA[j] = 1
            }
            console.log(pontosA[i])
        } else if (y > x) {
            if (pontosA[i2] >= 0) {
                pontosA[i2] = parseInt(pontosA[i2])
                pontosA[i2] = pontosA[i2] + 3
                jogosJA[i] = jogosJA[i] + 1
                jogosJA[i2] = jogosJA[i2] + 1
                vitoriasA[i2] = vitoriasA[i2] + 1
                derrotaA[i] = derrotaA[i] + 1
                jogosA[j] = 2
                GPA[i] = GPA[i] + x
                GCA[i] = GCA[i] + y
                GPA[i2] = GPA[i2] + y
                GCA[i2] = GCA[i2] + x
            }
            console.log(pontosA[i2])
        } else if (x == y) {
            if (pontosA[i] >= 0) {
                pontosA[i] = pontosA[i] + 1
                jogosJA[i] = jogosJA[i] + 1
                empatesA[i] = empatesA[i] + 1
                GPA[i] = GPA[i] + x
                GCA[i] = GCA[i] + y
            }
            console.log(pontosA[i])

            if (pontosA[i2] >= 0) {
                pontosA[i2] = pontosA[i2] + 1
                jogosJA[i2] = jogosJA[i2] + 1
                empatesA[i2] = empatesA[i2] + 1
                GPA[i2] = GPA[i2] + y
                GCA[i2] = GCA[i2] + x
            }
            console.log(pontosA[i2])
            jogosA[j] = 3
        }

        SGA[i] = GPA[i] - GCA[i]
        SGA[i2] = GPA[i2] - GCA[i2]

        let nA = [];
        let tsA = [];
        let jjA = [];
        let vA = [];
        let epA = [];
        let derrA = [];
        let GPA2A = [];
        let GCA2A = [];
        let SGA2A = [];
        let auxA = 0

        for (let q = 0; q < timesA.length; q++) {
            nA[q] = pontosA[q];
            tsA[q] = timesA[q];
            jjA[q] = jogosJA[q];
            vA[q] = vitoriasA[q];
            epA[q] = empatesA[q]
            derrA[q] = derrotaA[q]
            GPA2A[q] = GPA[q]
            GCA2A[q] = GCA[q]
            SGA2A[q] = SGA[q]
        }
        for (let k = 0; k < timesA.length; k++) {
            for (let l = 0; l < timesA.length; l++) {
                nA[l] = parseInt(nA[l])
                if (nA[l] < nA[l + 1]) {
                    auxA = nA[l + 1]
                    nA[l + 1] = nA[l]
                    nA[l] = auxA

                    auxA = tsA[l + 1]
                    tsA[l + 1] = tsA[l]
                    tsA[l] = auxA

                    auxA = jjA[l + 1]
                    jjA[l + 1] = jjA[l]
                    jjA[l] = auxA

                    auxA = vA[l + 1]
                    vA[l + 1] = vA[l]
                    vA[l] = auxA

                    auxA = epA[l + 1]
                    epA[l + 1] = epA[l]
                    epA[l] = auxA

                    auxA = derrA[l + 1]
                    derrA[l + 1] = derrA[l]
                    derrA[l] = auxA

                    auxA = GPA2A[l + 1]
                    GPA2A[l + 1] = GPA2A[l]
                    GPA2A[l] = auxA

                    auxA = GCA2A[l + 1]
                    GCA2A[l + 1] = GCA2A[l]
                    GCA2A[l] = auxA

                    auxA = SGA2A[l + 1]
                    SGA2A[l + 1] = SGA2A[l]
                    SGA2A[l] = auxA
                }
            }
        }
        for (let t = 0; t < timesA.length; t++) {
            document.getElementById("P" + t + "-textA").innerHTML = tsA[t]
            document.getElementById("P" + t + "A").innerHTML = nA[t]
            document.getElementById("P" + t + "JA").innerHTML = jjA[t]
            document.getElementById("P" + t + "VA").innerHTML = vA[t]
            document.getElementById("P" + t + "EA").innerHTML = epA[t]
            document.getElementById("P" + t + "DA").innerHTML = derrA[t]
            document.getElementById("P" + t + "GPA").innerHTML = GPA2A[t]
            document.getElementById("P" + t + "GCA").innerHTML = GCA2A[t]
            document.getElementById("P" + t + "SGA").innerHTML = SGA2A[t]
        }
    }
}
}