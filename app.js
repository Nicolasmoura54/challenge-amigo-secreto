let amigos = [];

function adicionarAmigo() {
  let nomeDoAmigo = document.getElementById("amigo").value;
  if (nomeDoAmigo == " ") {
    alert("Por favor, insira um nome");
    return;
  }
  amigos.push(nomeDoAmigo);
  document.getElementById("amigo").value = "";
}
