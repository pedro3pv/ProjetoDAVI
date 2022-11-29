delay(1800).then(() => tempo())
function tempo(){
    document.getElementById("time_vencedor").innerHTML = localStorage.getItem("ganhador")
    document.getElementById("html").style=""
}
function voltarMata(){
    window.location.href = "oitavas.html"
}
function nova_tabela(){
    localStorage.clear()
    localStorage.clear()
    window.location.href = "index.html"
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}