// Modal Entrar

let btnEtrar = document.getElementById('btnEntrar')
let modalEntrar = document.querySelector('.modalEntrar')

let sairDoPrimeiroModal = document.getElementById('sairDoPrimeiroModal')

btnEtrar.addEventListener('click', () => {
    modalEntrar.style.display = 'block'
})

sairDoPrimeiroModal.addEventListener('click', () => {
    modalEntrar.style.display = 'none'
})

// Modal Inscreva-se

let btnInscrever = document.getElementById('btnInscrever')
let modalInscrever = document.querySelector('.modalInscrever')

let sairDoSegundoModal = document.getElementById('sairDoSegundoModal')

btnInscrever.addEventListener('click', () => {
    modalInscrever.style.display = 'block'
})

sairDoSegundoModal.addEventListener('click', () => {
    modalInscrever.style.display = 'none'
})

/* Senhas */

let buttonSegundoModal = document.getElementById('buttonSegundoModal')
let primeirSenha = document.getElementById('primeiraSenha')
let segundaSenha = document.getElementById('segundaSenha')

buttonSegundoModal.addEventListener('click', () => {
    if(primeirSenha.value != segundaSenha.value){
        segundaSenha.style.borderColor = 'red'
        segundaSenha.style.color = 'red'
    }else{
        segundaSenha.style.borderColor = 'green'
        segundaSenha.style.color = 'green'
    }
})
