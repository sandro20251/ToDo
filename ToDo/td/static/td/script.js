let tarefaAtu = document.querySelector('#aTarefa');
let dataAtu = document.querySelector('#aData');
let localAtu = document.querySelector('#aLocal');
let objetivoAtu = document.querySelector('#aObjetivo');
let descricaoAtu = document.querySelector('#aDescricao');
let idAtu = document.querySelector('#aId');

let curtir2 = document.querySelector('#curtir2')

// ao ocorrer um clique no documento:
document.addEventListener('click', function (e) {
    // Botão atualizar
    const btnAtualizar = e.target.closest('.scriptBtnAtualizar');
    if (btnAtualizar) { // só acessa se existir
        e.preventDefault();
        const atualizarDiv = document.querySelector('#atualizar');
        atualizarDiv.classList.remove('hide');

        idAtu.value = btnAtualizar.dataset.id;
        tarefaAtu.value = btnAtualizar.dataset.tarefa;
        dataAtu.value = btnAtualizar.dataset.data;
        localAtu.value = btnAtualizar.dataset.local;
        objetivoAtu.value = btnAtualizar.dataset.objetivo;
        descricaoAtu.value = btnAtualizar.dataset.descricao;
    }

    // Botão curtir
    const BtnCompletar = e.target.closest('.scriptBtnCompletar');
    if (BtnCompletar) {
        e.preventDefault();
        const registro = BtnCompletar.closest('.listaunitaria');
        registro.classList.toggle('novoEstilo');
    }
});