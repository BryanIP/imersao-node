/*
 0 Obter um usuario
 1 Obter o numero de telefone de um usuario a partir do seu Id
 2 Obter o endereco do usuario pelo Id
*/

const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
    //return reject(new Error('DEU RUIM DE VERDADE!'))

      return resolve({
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date()
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        ddd: 11,
        telefone: '1199002'
      })
    }, 2000)
  })
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      logradouro: 'rua dos bobos',
      numero: '0'
    })
  }, 2000)
}

// 1o passo: adicionar a palavra async -> automaticamente ela retornará uma Promise

async function main() {
  try {
    console.time('medida-promise')

    const usuario = await obterUsuario()
  //const telefone = await obterTelefone(usuario.id)
  //const endereco = await obterEnderecoAsync(usuario.id)
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])
    const telefone = resultado[0]
    const endereco = resultado[1]

    console.log(`
      Nome: ${usuario.nome}
      Endereço: ${endereco.logradouro}, ${endereco.numero}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
    `)

    console.timeEnd('medida-promise')
  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

main()
