const element = (v) => document.getElementById(v)
const value = (v) => element(v).value

function carregar() {
    const nome = window.localStorage.getItem("nome").split(" ")
    element("nome").innerText = `${nome[0]} ${nome[nome.length - 1]}`
}

function entrar() {
    window.open("felino.html", "_self")
}
const storedName = window.localStorage.getItem("nome");
if (!storedName) {
    alert("Acesso negado. Por favor, preencha o Acesso ao sistema  antes de acessar esta página.");
    setTimeout(function () {
        window.location.href = "index.html";
    }, 100); // Redireciona após 2 segundos
}