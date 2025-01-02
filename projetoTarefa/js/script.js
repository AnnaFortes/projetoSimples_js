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
//tempo para o botao voltar ao normal e removendo a class temporaria
    setTimeout(function() {
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

