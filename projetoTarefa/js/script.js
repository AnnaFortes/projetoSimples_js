let tarefa = document.querySelector('#tarefa');
let clique = document.querySelector('#clique');

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
clique.addEventListener('click', function() {    
    this.style.border = '1px solid rgba(255, 255, 255, 0.94)';
    clicked = true;
//criando elemento input
    let form1 = document.createElement('input');
    let botao1 = document.createElement('input');
    let botao2 = document.createElement('input');
//input do tipo texto
    form1.setAttribute('type', 'text');
//pegar o valor do input tarefa
    let valorTarefa = tarefa.value;
    //jogar o valor ao novo input
    form1.value = valorTarefa;
//especificando o tipo do input
    botao1.setAttribute('type', 'button');
    botao2.setAttribute('type', 'button');
//criando os botoes com icones
    botao1.innerHTML += '<span class="material-symbols-outlined">check</span>';
    botao2.innerHTML += '<span class="material-symbols-outlined">close</span>';
    //adicionando classe 
    form1.classList.add('texto');
    botao1.classList.add('icon');
    botao2.classList.add('icon1');

    let divs = document.querySelectorAll('div');
    //especificando que sera na 4 div, que tem a posição 3
    if(divs[3]) {
        divs[3].appendChild(form1);
        divs[3].appendChild(botao1);
        divs[3].appendChild(botao2);
    }
//tempo para o botao voltar ao normal e removendo a class temporaria
    setTimeout(() => {
        this.style.border = '';
        this.classList.remove('clicked');
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

