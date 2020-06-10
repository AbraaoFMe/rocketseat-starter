const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const ul = document.querySelector('ul');

const carregandoLi = document.createElement('li');
const carregandoLiText = document.createTextNode('Carregando...')
carregandoLi.appendChild(carregandoLiText);


function adicionar() {
    // Pegando valores do formulario, verificando se tem texto e limpando o formulario
    text = inputElement.value;

    if (text === "") {
        return 0;
    }

    ul.innerHTML = "";
    ul.appendChild(carregandoLi);

    inputElement.value = "";

    // Fazendo requisicao
    requestApi(text)

}

function requestApi(username) {
    axios.get(`https://api.github.com/users/${username}/repos`)
        .then(function (response) {
            // Adicionar itens na pagina
            adicionarRepos(response.data);
        })
        .catch(function () {
            // Mostrar usuario nao encontrado
            noResults();
        });
}

function adicionarRepos(repos) {
    //cleaning the ul element
    ul.innerHTML = "";

    //checking for emptyness
    if (repos.length == 0) {
        //render an element saying there is no repositories
        renderRepo("The user has no repositories.");
    } else {
        //render respositories
        for (repo of repos) {
            renderRepo(repo.name);
        }
    }

}

function renderRepo(name) {
    let li = document.createElement('li');
    let liText = document.createTextNode(name);

    li.appendChild(liText);
    ul.appendChild(li);
}

function noResults() {
    ul.innerHTML = "";
    renderRepo("Usuario nao encontrado")
}
