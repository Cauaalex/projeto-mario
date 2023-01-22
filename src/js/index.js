const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal= document.querySelector(".modal");
const linkDoVIdeo = video.src;

// passo 2 - dar um jeto de identificar qunando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
// passo 4 - abrir a modal na tela
modal.classList.add("aberto");
video.setAttribute("src", linkDoVIdeo);
});

// OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
// - passo 1 - dar um jeito de pegar o elento de fechar modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal")

// passo 2 - dar um jeito de edentificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});


