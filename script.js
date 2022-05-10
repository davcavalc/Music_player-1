let Musicas = [
    {título:'Soul1', Artista:'X', src:'/Músicas/Down With Your Getup - Mini Vandals.mp3', img:'/Imagens/mohammad-metri-1oKxSKSOowE-unsplash.jpg'},
    {título:'Soul2', Artista:'Y', src:'/Músicas/Kind of a Party - Mini Vandals.mp3', img:'/Imagens/mohammad-metri-1oKxSKSOowE-unsplash.jpg'},
    {título:'Soul3', Artista:'Z', src:'/Músicas/No Doubt - Yung Logos.mp3', img:'/Imagens/mohammad-metri-1oKxSKSOowE-unsplash.jpg'}
];

let musica = document.querySelector("audio");
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);
//Eventos
document.querySelector(".botao-play").addEventListener("click", tocarMusica);
document.querySelector(".botao-pause").addEventListener("click", pausarMusica);
musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
})

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 2) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
})

//Funções

function renderizarMusica (index) {
    musica.setAttribute('src', Musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = Musicas[index].título;
        nomeArtista.textContent = Musicas[index].Artista;
        imagem.src = Musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}

function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let tempoDecorrido = document.querySelector(".inicio");
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;

  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }

  return campoMinutos + ":" + campoSegundos;
}

