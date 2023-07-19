const fs = require('fs');
const util = require('util');

const setTimeoutPromise = util.promisify(setTimeout);

async function addOne(product) {
  const baseUrl = 'http://localhost:3000/produtos';
  let headersList = {
    'Accept': '*/*',
    'charset': 'charset: UTF-8',
    'Content-Type': 'application/json',
  };

  const body = JSON.stringify(product);

  return await fetch(baseUrl, {
    method: 'POST',
    headers: headersList,
    body,
  });

}

const sleep = async (ms) => {
  await setTimeoutPromise(ms);
};

const jsonFilePath = './sincronizar estoque/produtos.json';

fs.readFile(jsonFilePath, 'utf8', async (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const products = JSON.parse(data);

  try {
    
    for (let i = 0; i < products.length; i++) {
      const response = await addOne(products[i]);

      if(response.status === 201) {
        console.log('created');
        // await sleep(1000);
      }
      if(response.status !== 201) {
        console.log(response);
      }
    }
  } catch (error) {
    console.error('Erro ao analisar o arquivo JSON:', error);
  }
});
