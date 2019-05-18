const axios = require('axios')

const termo = process.argv[2]
const page = process.argv[3]

const url = `https://darksearch.io/api/search?query=${termo}&page=${page}`

axios.get(url)
	.then(response => {
		const result = response.data.data

		console.log(`\t\t SITES RELACIONADOS A ${termo}\t\tPAGE ${page}`)
		result.forEach(item => {console.log(`[*] NOME DO SITE: ${item['title']}\n[*] LINK: ${item['link']}\n\n\n`)});
		console.log(`\t\t SITES RELACIONADOS A ${termo}\t\tPAGE ${page}`)
	})
