const service = require('./service')

async function main() {
   try {
      const result = await service.obterPessoas('3')
      const names = []

      console.time('for')
      for (let i = 0; i < result.films.length; i++) {
         const filme = result.films[i];
         names.push(filme)
      }
      console.timeEnd('for')

      console.time('forin')
      for (let i in result.films) {
        const filme = result.films[i];
        names.push(filme)
      }
      console.timeEnd('forin')

      console.time('forof')
      for (let filme of result.films) {
        names.push(filme)
      }
      console.timeEnd('forof')

      console.log('names', names)
   } catch (error) {
      console.error('Erro interno', error)
   }
}

main()
