    
    let imagens = [
    "img/stranger-things-actors/Winona_Ryder.jpg" ,
    "img/stranger-things-actors/Finn_Wolfhard.jpg",
    "img/stranger-things-actors/Millie_Bobby_Brown.jpg",
    "img/stranger-things-actors/sadie_sink.jpeg",
    "img/stranger-things-actors/David_Harbour.jpg",
    "img/jogadores/neymar.jpg",
    "img/jogadores/messi.jpeg",
    "img/jogadores/ronaldo.jpeg",
    "img/jogadores/zidane.jpeg",
    "img/jogadores/pele.jpeg"
    ]
    
    const elemento = document.getElementById("foto");
    
    imagens.forEach(url => {
        let img = document.createElement("img");
        img.src = url;
        img.width = 110;
        img.height = 150;
        //img.classList.remove("active");
        elemento.appendChild(img);  
        console.log(url);
    });
    
    /*for(let cont = 0; cont < imagens.length; cont++){
        let img = elem.createElement("img");
        img.src = imagens[cont];
        img.width = 110;
        img.height = 150;
        elem.appendChild(img);  
    }*/

    let index = 0;
    const images = document
    .querySelectorAll("#foto img");
    showImage(0)
  function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  }

  function next() {
    index = (index + 1) % images.length;
    showImage(index);
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  }