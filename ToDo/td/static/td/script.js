// buscque os campos da div de atualizar
let tarefaAtu = document.querySelector('#aTarefa');
let dataAtu = document.querySelector('#aData');
let localAtu = document.querySelector('#aLocal');
let objetivoAtu = document.querySelector('#aObjetivo');
let descricaoAtu = document.querySelector('#aDescricao');
let idAtu = document.querySelector('#aId')
// ao ocorrer um clique no documento:
document.addEventListener('click', function (e) {
    // detecte o elemento que foi clicado
    const targetEl = e.target.closest('.scriptBtnAtualizar');
    // se o elemento clicado contem uma classe com o nomeDaClasse:
    if (targetEl.classList.contains('scriptBtnAtualizar')) {
        e.preventDefault();

        // Mostra o formulário de atualização
        const atualizarDiv = document.querySelector('#atualizar');
        atualizarDiv.classList.remove('hide');

        // Pega os valores do botão clicado
        idAtu.value = targetEl.dataset.id;
        tarefaAtu.value = targetEl.dataset.tarefa;
        dataAtu.value = targetEl.dataset.data;
        localAtu.value = targetEl.dataset.local;
        objetivoAtu.value = targetEl.dataset.objetivo;
        descricaoAtu.value = targetEl.dataset.descricao;
    }
})