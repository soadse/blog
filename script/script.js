//esta parte é para puxar os elementos que vai usar para as funcionalidades do javascript
var container2 = window.document.querySelector('.container2')
var container = window.document.querySelector('.container')
var areaTexto = window.document.querySelector('.areaTexto')
var comentario = window.document.querySelector('.comentario')
var comentarioEnviar = window.document.querySelector('.comentarioEnviar')
var c1 = document.querySelector('#c1')
var c2 = document.querySelector('#c2')
var c3 = document.querySelector('#c3')
var c4 = document.querySelector('#c4')
var c5 = document.querySelector('#c5')
var c6 = document.querySelector('#c6')
var c7 = document.querySelector('#c7')
var c8 = document.querySelector('#c8')
var texto = window.document.querySelector('#pegarTexto')
var converterTexto = String(texto)
var mostraTexto = window.document.querySelector('#mostraTexto')
var perfilCompleto = window.document.querySelector('#perfilCompleto')





//campo das datas e horarios
var horas = document.querySelector('.hora')
var dias = document.querySelector('.dia')
var semanas = document.querySelector('.semana')

//puxa os valores atuais das datas e horarios
var agora = new Date();

//pega as horas
var hora = agora.getHours();
var minutos = agora.getMinutes();
var segundos = agora.getSeconds();

//para acrescentar o '0' se o valor for menor que 10
if(hora < 10) hora = '0' + hora
if(minutos < 10) minutos = '0' + minutos
if(segundos < 10) segundos = '0' + segundos

//atualiza as horas altomaticamente, mas nâo coloquei no codigo
function atualiza(){
    var agora = new Date();
    var hora = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();
}
setInterval(atualiza, 10)


//calcula o valor e converte para o dia da semana
var semana = agora.getDay();
switch (semana){
    case 0:
        semana = 'Domingo'
        break;
    case 1:
        semana = 'Segunda-Feira'
        break;
    case 2:
        semana = 'Terça-Feira'
        break;
    case 3:
        semana = 'Quarta-Feira'
        break;
    case 4:
        semana = 'Quinta-Feira'
        break;
    case 5:
        semana = 'Sexta-Feira'
        break;
    case 6:
        semana = 'Sábado'
        break;
}

//pega a data
var dia = agora.getDate();
var mes = agora.getMonth();
var ano = agora.getFullYear();

//para acrescentar o '0' se o valor for menor que 10
if(dia < 10) dia = '0' + dia
if(mes < 10) mes = '0' + (mes + 1)


//campo para retornar os valores em tela
horas.innerText = `${hora}:${minutos}:${segundos}`
dias.innerText = `${dia}/${mes}/${ano}`
semanas.innerText = `- ${semana}`


//esta parte ele esta pegando o valor do input do tipo 'file' e convertendo o arquivo para se exibido no campo destinado
const inputImagem = document.getElementById('input-imagem');
const imagemPreview = document.getElementById('imagem-preview');
inputImagem.addEventListener('change', function(event) {
    const arquivo = event.target.files[0];
    const leitor = new FileReader();

leitor.onload = function(event) {
    const urlImagem = event.target.result;
    imagemPreview.style.backgroundImage = `url(${urlImagem})`;
};

leitor.readAsDataURL(arquivo);
});

/*Adicionando funcionalidade de clique no preview para abrir o seletor de arquivo
imagemPreview.addEventListener('click', function() {
    inputImagem.click();
});*/

/*function showImg(){
    imagemPreview.style.display = 'flex'
    inputImagem.style.display = 'none'
}*/


//esta parte esta dando a funcionalidae de curtir o conteudo
function criar(){
    container2.style.display = 'flex'
    container.style.display = 'none'
}
function like(){
    c1.style.display = 'flex'
    c2.style.display = 'none'
}
function nlike(){
    c1.style.display = 'none'
    c2.style.display = 'flex'
}
function like2(){
    c3.style.display = 'flex'
    c4.style.display = 'none'
}
function nlike2(){
    c3.style.display = 'none'
    c4.style.display = 'flex'
}
function like3(){
    c5.style.display = 'flex'
    c6.style.display = 'none'
}
function nlike3(){
    c5.style.display = 'none'
    c6.style.display = 'flex'
}
function like4(){
    c7.style.display = 'flex'
    c8.style.display = 'none'
}
function nlike4(){
    c7.style.display = 'none'
    c8.style.display = 'flex'
}


//esta parte cria a função para apresentar o campo de comentário
function comentar(){
    areaTexto.style.display = 'flex'
    comentarioEnviar.style.display = 'flex'
    imagemPreview.style.display = 'none'
  
}

//esta parte cria a função para quando enviar o comenário o campo de comentário seja fechado
function postar(){
    areaTexto.style.display = 'none'
    comentarioEnviar.style.display = 'none'
    imagemPreview.style.display = 'flex'
    mostraTexto.innerText = texto.value
    perfilCompleto.style.display = 'flex'
}