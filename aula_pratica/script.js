/* CRIA O ARRAY URI DE IMAGENS */
imagens = [
    "img/stranger-things-actors/Winona_Ryder.jpg" ,
    "img/stranger-things-actors/Finn_Wolfhard.jpg",
    "img/jogadores/neymar.jpg",
    "img/jogadores/messi.jpeg",
    "img/jogadores/ronaldo.jpeg",
    "img/jogadores/zidane.jpeg"
]

/* CRIA A FUNÇÃO PARA TROCAR A IMAGEM */
function trocarImagem(){
    const img = document.getElementById("personagem");
    // GERA UM NÚMERO ALEATÓRIO ENTRE 0 E O TAMANHO DO ARRAY DE IMAGENS
    const indice = Math.floor(Math.random() * imagens.length);    
    // TROCA A IMAGEM DO ELEMENTO COM O ID "personagem" PARA A IMAGEM CORRESPONDENTE AO NÚMERO ALEATÓRIO GERADO
    img.src = imagens[indice];
}
// SELECIONA O ELEMENTO COM O ID "avancar" E ARMAZENA EM UMA VARIÁVEL
const botaoAvancar = document.getElementById("avancar");
/* CRIA O EVENTO PARA O BOTAO */
botaoAvancar.addEventListener("click", trocarImagem);


/* CRIA A FUNÇÃO PARA MODIFICAR O DOM */
function modificarDOM(){
    // SELECIONA O ELEMENTO COM TAG "section" E ARMAZENA EM UMA VARIÁVEL
    let element = document.getElementsByTagName("section"); // Está no plural, pois pode haver mais de um elemento com a tag "section"
    
    // MODIFICA O conteúdo DO PRIMEIRO ELEMENTO COM A TAG "section" PARA "Texto adicionado via Js"
    element[0].innerText = "<b>Texto adicionado via Js </b>";
    
    // MODIFICA O conteúdo DO SEGUNDO ELEMENTO COM A TAG "section" PARA "HTML adicionado via Js"
    element[1].innerHTML = "<b>HTML adicionado via Js </b>";

    alert(window.history.length);  
    let nome = prompt("Digite seu nome: ");   
    alert("Olá " + nome);
    
}
