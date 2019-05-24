function mostrarAlerta() {
    var botao = document.querySelector("#geraextr");
    botao.onclick = mostrarAlerta;
    alert("Funciona");
}

function GerarExtrato() {
    document.getElementById("geraextr").addEventListener('click', GerarExtrato() {
        var geraextr = window.location.href("http://127.0.0.1:59971/Projeto%202/Extrato.html");
    });
}
