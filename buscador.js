const axios = require('axios')

const url = `https://darksearch.io/api/search?query=${process.argv[2]}&page=${process.argv[3]}`

axios.get(url)
  .then(response =>  {
	const result = response.data.data
  	
  	console.log(`\t\t SITES RELACIONADOS A ${process.argv[2]}\t\tPAGE ${process.argv[3]}`)
  	result.forEach(item => {
  		console.log(`[*] NOME DO SITE: ${item['title']}\n[*] LINK: ${item['link']}\n\n\n`)
 		});
  	console.log(`\t\t SITES RELACIONADOS A ${process.argv[2]}\t\tPAGE ${process.argv[3]}`)
  })  
