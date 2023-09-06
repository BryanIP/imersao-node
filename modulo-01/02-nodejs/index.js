/*
 0 Obter um usuario
 1 Obter o numero de telefone de um usuario a partir do seu Id
 2 Obter o endereco do usuario pelo Id
*/

function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: 'Aladin',
      dataNascimento: new Date()
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      ddd: 11,
      telefone: '1199002'
    })
  }, 2000)
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      logradouro: 'rua dos bobos',
      numero: '0'
    })
  }, 2000)
}

obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error('DEU RUIM em USUARIO', error)
    return
  }

  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error('DEU RUIM em TELEFONE', error1)
      return
    }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.error('DEU RUIM em ENDERECO', error2)
        return
      }

      console.log(`
        Nome: ${usuario.nome},
        Endereco: ${endereco.logradouro},${endereco.numero},
        Telefone: (${telefone.ddd}) ${telefone.telefone}
      `)
    })
  })
})