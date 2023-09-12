const axios = require('axios')
const URL = `https://swapi.co/api/people`

async function obterPessoas(numero) {
  const url = `https://swapi.dev/api/people/${numero}`
	const response = await axios.get(url)
	return response.data
}

module.exports = {
  obterPessoas
}
