const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const block = document.getElementById('repos');

function adicionar(){
    // Pegando valores do formulario, verificando se tem texto e limpando o formulario
    text = inputElement.value;

    if(text === ""){
        return 0;
    }

    inputElement.value = "";

    // Fazendo requisicao
    requestApi(text)

}

function requestApi(username){
    axios.get(`https://api.github.com/users/${username}/repos`)
    .then(function(response) {
        // Adicionar itens na pagina
        adicionarRepos(response.data);
    })
    .catch(function() {
        // Mostrar usuario nao encontrado
        noResults();
    });
}

function adicionarRepos(repos) {
    //cleaning the block element
    block.innerHTML = "";

    //create the ul
    let ul = document.createElement('ul');

    //checking for emptyness
    if(repos.length == 0){
        //render an element saying there is no repositories
        ul.appendChild(renderRepo("The user has no repositories."));
    }else{
        //render respositories
        for(repo of repos){
            ul.appendChild(renderRepo(repo.name));
        }
    }

    block.appendChild(ul);
    
}

function renderRepo(name){
    let li = document.createElement('li');
    let liText = document.createTextNode(name);

    li.appendChild(liText);

    return li;
}

function noResults() {
    block.innerHTML = "";

    let strong = document.createElement('strong');
    let strongText = document.createTextNode('Usuario nao encontrado');

    strong.appendChild(strongText);
    block.appendChild(strong);
}