const axios = require('axios');

const main = (query, page) => {
  axios.get('https://darksearch.io/api/search', { params: { query, page} })
  
  .then(response => {
    const {current_page,last_page} = response.data
    
    console.log(`[*] Current Page: ${current_page}`)
    console.log(`[*] Last page: ${last_page}\n`)
    
    response.data.data.forEach(item => {
      console.log(`[*] WebSite Title: ${item['title']}`)
      console.log(`[*] Link: ${item['link']}\n\n`)
    });
  })
  .catch( error => {
    console.log(error);
  });
}
const [keyword, page] = process.argv.splice(1);
main(keyword, page);