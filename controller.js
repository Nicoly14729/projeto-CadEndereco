'user strict'; // Modo restrito
//https://viacep.com.br/

//Função para limpar formulário
//Arrow Fuction
const limparFormulario = (endereco) => {
    document.getElementById('rua').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('bairro').value = '';

}