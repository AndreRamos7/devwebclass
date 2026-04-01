    
    // Criei um dicionário para armazenar os nomes 
    // e as urls das fotos dos personagens

    let persona = {"pessoas":[
      {"nome":"Winona Ryder", "foto_url":"img/stranger-things-actors/Winona_Ryder.jpg"},
      {"nome":"Finn Wolfhard", "foto_url":"img/stranger-things-actors/Finn_Wolfhard.jpg"},
      {"nome":"Millie Bobby Brown", "foto_url":"img/stranger-things-actors/Millie_Bobby_Brown.jpg"},
      {"nome":"Sadie Sink", "foto_url":"img/stranger-things-actors/sadie_sink.jpeg"},
      {"nome":"David Harbour", "foto_url":"img/stranger-things-actors/David_Harbour.jpg"},
      {"nome":"Neymar", "foto_url":"img/jogadores/neymar.jpg"},
      {"nome":"Messi", "foto_url":"img/jogadores/messi.jpeg"},
      {"nome":"Ronaldo", "foto_url":"img/jogadores/ronaldo.jpeg"},
      {"nome":"Zidane", "foto_url":"img/jogadores/zidane.jpeg"},
      {"nome":"Pelé", "foto_url":"img/jogadores/pele.jpeg"}
    ]}
    
    const divfoto = document.getElementById("foto");
    const h_nome = document.getElementById("nome");
    
    persona.pessoas.forEach(pessoa => {
        let img = document.createElement("img");
        img.src = pessoa.foto_url;
        img.width = 110;
        img.height = 150;
        //img.classList.remove("active");
        divfoto.appendChild(img);
    });
    
    /*for(let cont = 0; cont < imagens.length; cont++){
        let img = document.createElement("img");
        img.src = imagens[cont];
        img.width = 110;
        img.height = 150;
        elemento.appendChild(img);  
    }*/

    let index = 0;
    const images = document
    .querySelectorAll("#foto img");
    
    // é preciso chamar a função showImage()
    // para exibir pelo menos uma imagem, senão
    // não aparece nenhuma
    showImage(0);

  function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
    h_nome.textContent = persona.pessoas[i].nome;
  }

  function next() {
    index = (index + 1) % images.length;
    showImage(index);
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  }