const personagem = document.querySelectorAll('.personagem'); //pegando todos os personagens
//usando um for para percorrer os itens
personagem.forEach((personagem) => { personagem.addEventListener('mouseenter', () => { 

    if(window.innerWidth < 450) { window.scrollTo({top: 0, behavior: 'smooth'}); } //condição caso o site seja aberto em um celular

    removerSelecaoDoPersonagem(); //remove a classe 'selecionado' no item anterior

 personagem.classList.add('selecionado')  //evento de pegar todos os personagens e colocando a classe 'selecionado' em todos os itens 

 //pegar o elemento do personagem grande pra adicionar as informações dele
 alterarImagemPersonagemSelecionado(personagem); // troca o personagem ao passar o mouse

 //alterar o nome dos personagens
 const nomePersonagem = document.getElementById('nome-personagem');
 nomePersonagem.innerText = personagem.getAttribute('data-name');

 //alterar a descrição do personagem
 const descricaoPersonagem = document.getElementById('descricao-personagem');
 descricaoPersonagem.innerText= personagem.getAttribute('data-description');
})

})
function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value; // variável para pegar os atributos 'id' (esta no html) do personagem quando passar o mouse por cima
    imagemPersonagemGrande.src = `./src/imagens/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado'); // cria uma variável e busca a classe 'selecionado'
    personagemSelecionado.classList.remove('selecionado');
}

