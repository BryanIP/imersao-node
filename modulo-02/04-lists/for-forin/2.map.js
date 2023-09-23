const service = require('./service')

Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = []

  for (let indice = 0; indice < this.length; indice++) {
    const resultado = callback(this[indice])
    novoArrayMapeado.push(resultado)    
  }

  return novoArrayMapeado
}

async function main() {
  try {
    const results = await service.obterPessoas('3')
    let names = []
    
    console.time('forEach')
    results.films.forEach(function (item) {
      names.push(item)
    })
    console.timeEnd('forEach')


    console.time('map')
    names.length = 0;
    names = results.films.map(function (filme) {
      return filme
    })
    console.timeEnd('map')


    console.time('mapinline')
    names.length = 0;
    names = results.films.map((filme) => filme)
    console.timeEnd('mapinline')
  

    console.time('meuMap')
    names.length = 0;
    names = results.films.meuMap(filme => filme)
    console.timeEnd('meuMap')

    console.log('result', names)
  } catch (error) {
    console.log('DEU RUIM... ERRO INTERNO', error)
  }
}

main()
