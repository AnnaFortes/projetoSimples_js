document.getElementById('inputExterno').style.display = 'none';


//função que adiciona tarefa
function addTask() {

    const tarefas = document.querySelector('#tarefas').value;

    if(tarefas) {
        const tarefaItem = document.querySelector('.tarefa-item');

        if(tarefaItem) {

            const newTask = tarefaItem.cloneNode(true); //clonando html numa nova variavel
            
            const textoImput = newTask.querySelector('.texto');

            textoImput.value = tarefas;

            const container = document.querySelector('#inputExterno');
            container.style.display = 'block' 

            container.appendChild(newTask);

            //adicionando o evento de remover
            const btnRemove = newTask.querySelector('.btn-remove').addEventListener('click', function() {
                removeTarefa(this);
            });
            //adicionar evento de verificação
            const btnVerif = newTask.querySelector('.btn-verif').addEventListener('click', function() {
                completeTarefa(this);
            });

            //limpar texto
            document.querySelector('#tarefas').value = '';

    } else {
        console.error('Elemento não encontrado.')
    } 
}
}

//função de remover tarefa
function removeTarefa(tarefa) {

    tarefa.style.border = '1px solid #ffffff';

    setTimeout(function() {
        tarefa.parentNode.remove(true);
    }, 500);
}

//função de completar a tarefa
function completeTarefa(tarefa) {

    const tarefaComplete = tarefa.parentNode;

    const textoInput = tarefaComplete.querySelector('.texto');

    if(textoInput) {

        tarefaComplete.classList.toggle('verific');

        if(tarefaComplete.classList.contains('verific')) {

        textoInput.style.backgroundColor = '#3F1140';
        textoInput.style.color = '#ffffff';
    } else {

        textoInput.style.backgroundColor = '';
        textoInput.style.color = '';
    }
    }
    tarefa.style.border = '1px solid #ffffff';

    setTimeout(function() {
        tarefa.style.border = '';
    }, 400);
}

//evento de adicionar
const clique = document.querySelector('#clique');

clique.addEventListener('click', function(e) { //e parametro de evento
    this.style.border = '1px solid #ffffff';
    e.preventDefault();

    setTimeout( function () {
        clique.style.border = '';
    }, 500);

    addTask();
});