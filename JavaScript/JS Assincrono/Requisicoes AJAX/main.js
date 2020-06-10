// Classe que possibilitara fazer requisioes Ajax
var xhr = new XMLHttpRequest();

//demora um pouco e a execucao do programa continua mesmo sem terminar
xhr.open('GET', 'https://api.github.com/users/diego3g')
xhr.send(null);

//funcao pra ser executada quando terminar a requisicao
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText))
    }
}
