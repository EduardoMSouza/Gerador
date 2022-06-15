let slideElement = document.querySelector('#slide')
let button = document.querySelector('#button')

let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerPassword = document.querySelector('#container-password')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let novaSenha = ''

/* atualizar em tempo real os caracteres no scrol */
sizePassword.innerHTML = slideElement.value

slideElement.oninput = function () {
  sizePassword.innerHTML = this.value
}

function generationPassword() {
  let pass = ''
  /* i começa em 0, n recebe a charset, e o i vai passar ate q o seu valor seja menos q o slide */
  for (let i = 0, n = charset.length; i < slideElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n))
  }

  containerPassword.classList.remove('hide')
  password.innerHTML = pass
  novaSenha = pass
}

function copyPassword() {
  navigator.clipboard
    .writeText(novaSenha)
    .then(() => alert('Senha copiada com sucesso'))
}
