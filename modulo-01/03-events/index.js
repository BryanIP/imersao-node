const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function(click) {
  console.log('Um usuário clicou', click)
})

/*
meuEmissor.emit(nomeEvento, 'na barra de rolagem')
meuEmissor.emit(nomeEvento, 'no botão Ok')

let count = 1
setInterval(function () {
  meuEmissor.emit(nomeEvento, `no botão Atualizar Captcha ${count++}x`)
}, 1000)
*/

const stdin = process.openStdin()
stdin.addListener('data', function (value) {
  console.log(`Você digitou: ${value.toString().trim()}`)
})
