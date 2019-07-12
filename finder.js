const axios = require('axios');
const readline = require('readline');
const getUserInput = readline.createInterface({
  		input: process.stdin,
  		output: process.stdout
});

const main = async (query, page) => {
  await axios.get('https://darksearch.io/api/search', { params: { query, page} })
  
  .then(response => {
    const {current_page,last_page} = response.data
    
    response.data.data.forEach(item => {
      console.log(`[*] WebSite Title: ${item['title']}`)
      console.log(`[*] Link: ${item['link']}\n\n`)
    });
  
    console.log(`[*] Current Page: ${current_page}`)
    console.log(`[*] Last page: ${last_page}\n`)

	getUserInput.question('Next page ? (Y/n): ', (answer) => {
 
  		if (answer.toUpperCase() === 'Y') {
  			page++
  		} else {
  			console.log("[*] Exiting...")
  			process.exit(1);
  		}

  		getUserInput.close();
	});

  })
  .catch( error => {
    console.log("[*] There has been an error, perhaps you have not passed the options in the right way");
    console.log("[*] Exiting...")
    process.exit(1)
  });
}
let [keyword, page] = process.argv.splice(2);
main(keyword, page);
