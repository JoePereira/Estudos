const cotroleAjuste = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')



cotroleAjuste.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        somaOuSubtrai(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function somaOuSubtrai(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if( operacao === "-"){
        peca.value = peca.value > 0 ? parseInt(peca.value) - 1 : peca.value = 0
    }else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
    estatisticas.forEach( (elemento) => [
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    ])
}