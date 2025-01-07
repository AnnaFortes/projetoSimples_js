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

        document.querySelector('#tarefas').value = '';

        console.log(newTask);
    } else {
        console.error('Elemento não encontrado.')
    } 
}
}

//evento de adicionar
const clique = document.querySelector('#clique');

clique.addEventListener('click', function(e) { //e parametro de evento
    e.preventDefault();

    addTask();
});