delay(1800).then(() => tempo())
function tempo(){
    document.getElementById("time_vencedor").innerHTML = localStorage.getItem("ganhador")
    document.getElementById("html").style=""
}
function voltarMata(){
    window.location.href = "oitavas.html"
}
function nova_tabela(){
    sessionStorage.clear()
    localStorage.clear()
    window.location.href = "index.js"
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}