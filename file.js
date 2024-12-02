function cambiaTitolo() {
    const titolo = document.getElementById("titoloNegozio"); 
    titolo.textContent = "Benvenuti nel Negozio online di strumenti musicali"; 
  }
  function cambiaClasseSfondo(classe) {
    const body = document.body; 
    body.classList.add(classe);
  }
  function cambiaIndirizzo() {
    const indirizzo = document.getElementById("indirizzo"); 
    indirizzo.textContent = "il mio indirizzo è diverso dal precedente"; 
  }
  function aggiungiCLasse() {
    const links = document.querySelectorAll ("link-prodotto")
    links.forEach(link => {
        link.classList.add("linkAmazon");
      }); 
  }
  function toggleVisibilitaImmagini() {
    const immagini = document.querySelectorAll(".prodottiSingoli img");
    immagini.forEach(img => {
      img.classList.toggle("rendInvisibile");
    });
  }
  