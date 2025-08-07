let amigos = [];
let nomeLimite = 20;

function adicionarAmigo() {
  let nomeDoAmigo = document.getElementById("amigo").value;
  if (amigos.length >= nomeLimite){
    alert("Você ja atingiu o limite de 20 amigos");
    return;
  }
  if (nomeDoAmigo == "") {
    alert("Por favor, insira um nome");
    return;
  }
  if(amigos.includes(nomeDoAmigo)){
    alert("Este nome já foi adicionado.")
    return;
  }
  amigos.push(nomeDoAmigo);
  console.log(amigos);
  document.getElementById("amigo").value = "";
  listaAmigos();
}

function listaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert("Por favor, insira um nome para continuar");
    return;
  }
  let sorteio = parseInt(Math.random() * amigos.length);
  let nomeSorteado = amigos[sorteio];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `Amigo Sorteado: ${nomeSorteado}`;
}
