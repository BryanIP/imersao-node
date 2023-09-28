const { obterPessoas } = require('./service')

Array.prototype.meuFilter = function (callback) {
  const lista = []

  for (const index in this) {
    const item = this[index]
    const result = callback(item, index, this)

    if (!result) {
      continue
    }

    lista.push(item)
  }

  return lista
}

async function main() {
  try {
    const { results } = await obterPessoas('')

    let familiaLars = [];
    let names = [];

    console.time('filter')
    familiaLars = results.filter(function (item) {
      const result = item.name.toLowerCase().indexOf('lars') !== -1
      return result
    })
    console.timeEnd('filter')

    names = familiaLars.map((pessoa) => pessoa.name)
    console.log(names)


    familiaLars.length = 0;
    console.time('meuFilter')
    familiaLars = results.meuFilter(item => item.name.toLowerCase().indexOf('lars') !== -1)
    console.timeEnd('meuFilter')

    names.length = 0;
    names = familiaLars.map((pessoa) => pessoa.name)

    console.log(names)
  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

main()
