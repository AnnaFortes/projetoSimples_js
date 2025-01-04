let tarefa = document.querySelector('#tarefa');
let tarefas = document.querySelector('#tarefas')
let clique = document.querySelector('#clique');

function inputBotao() {
//criando botao input
    let botao1 = document.createElement('input');
    let botao2 = document.createElement('input');
//atribuindo o tipo
    botao1.setAttribute('type', 'button');
    botao2.setAttribute('type', 'button');
//adicionando o valor do botao
    botao1.value = '✔';
    botao2.value = '✘'
//criando uma classe ao botao
    botao1.classList.add('icon');
    botao2.classList.add('icon1');

    botao1.style.cursor = 'pointer'
    botao2.style.cursor = 'pointer'

    return [botao1, botao2];
    
}

//mouse dentro do limite do botao
clique.addEventListener('mouseover',function() {
//criando uma class temporaria no botao
    if(!this.classList.contains('clicked')) {
        this.style.backgroundColor = '#3F1140';
        this.style.color = '#ffffff'
        this.style.border = '';
}
});

//ao clicar
clique.addEventListener('click', function () {    
    //criando elemento input
    let form1 = document.createElement('input');
    let divs = document.querySelectorAll('div');

    this.style.border = '1px solid rgba(255, 255, 255, 0.94)';

//input do tipo texto
    form1.setAttribute('type', 'text');
//pegar o valor do input tarefa
    let valorTarefa = tarefas.value;
//jogar o valor ao novo input
    form1.value = valorTarefa;
//adicionando classe 
    form1.classList.add('texto'); 
    
    let [botao1, botao2] = inputBotao();
//especificando que sera na 4 div, que tem a posição 3
    if(divs[3]) {
        divs[3].appendChild(form1);
        divs[3].appendChild(botao1);
        divs[3].appendChild(botao2)
    }
//tempo para o botao voltar ao normal e removendo a class temporaria
    setTimeout(() => {
        this.style.border = '';
        this.classList.remove
        ('clicked');

    },500);
});

//com a class temporaria removida, saio do botao
clique.addEventListener('mouseout',
     function() {
    if(!this.classList.contains('clicked')) {
        this.style.backgroundColor = '';
        this.style.color = 'black'
}
});
//ao clicar no input, faz o botao click voltar ao normal e pode ser clicado outra vez
tarefa.addEventListener('input', function() {
    clique.style.border = '';
})

