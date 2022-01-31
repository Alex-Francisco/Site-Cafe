let navbar = document.querySelector('.navbar');

document.querySelector('#btn-menu').onclick = () => {
  navbar.classList.toggle('ativo');
  procuraForm.classList.remove('ativo');
  itemCarrinho.classList.remove('ativo');
}

let procuraForm = document.querySelector('.procura-form');

document.querySelector('#btn-procurar').onclick = () => {
  procuraForm.classList.toggle('ativo');
  navbar.classList.remove('ativo');
  itemCarrinho.classList.remove('ativo');
}

let itemCarrinho = document.querySelector('.container-itens-carrinho');

document.querySelector('#btn-carrinho').onclick = () => {
  itemCarrinho.classList.toggle('ativo');
  navbar.classList.remove('ativo');
  procuraForm.classList.remove('ativo');
}

window.onscroll = () => {
  navbar.classList.remove('ativo');
  procuraForm.classList.remove('ativo');
  itemCarrinho.classList.remove('ativo');
}