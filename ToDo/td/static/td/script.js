let tarefaAtu = document.querySelector('#aTarefa');
let dataAtu = document.querySelector('#aData');
let localAtu = document.querySelector('#aLocal');
let objetivoAtu = document.querySelector('#aObjetivo');
let descricaoAtu = document.querySelector('#aDescricao');

document.addEventListener('click', function (e) {
    const targetEl = e.target;

    if (targetEl.classList.contains('scriptBtnAtualizar')) {
        e.preventDefault();

        // Mostra o formulário de atualização
        const atualizarDiv = document.querySelector('#atualizar');
        atualizarDiv.classList.remove('hide');

        // Pega os valores do botão clicado
        tarefaAtu.value = targetEl.dataset.tarefa;
        dataAtu.value = targetEl.dataset.data;
        localAtu.value = targetEl.dataset.local;
        objetivoAtu.value = targetEl.dataset.objetivo;
        descricaoAtu.value = targetEl.dataset.descricao;
    }
});