const storedName = window.localStorage.getItem("nome");
if (!storedName) {
    alert("Acesso negado. Por favor, preencha o Acesso ao sistema antes de acessar esta página.");
    setTimeout(function () {
        window.location.href = "index.html"; // Redireciona após 2 segundos
    }, 2000);
} else {
    // Se o nome estiver preenchido, carregue a página "felino.html" em um iframe
    const iframe = document.createElement("iframe");
    iframe.src = "felino.html";
    iframe.style.width = "100%";
    iframe.style.height = "600px"; // Defina a altura desejada
    document.body.appendChild(iframe);
}



