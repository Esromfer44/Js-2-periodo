alert("Olá, seja bem-vindo!")

const element = (v) => document.getElementById(v)
const value = (v) => element(v).value

function entrar() {
    const nome = value("nome")

    if (!nome || nome.split(" ").length < 2) {
        alert("NOME ERRADO!!!")
        return
    }

    window.localStorage.setItem("nome", nome)
    window.open("menu.html", "_self")
}