const fs = require('fs')

async function fetchPage(page) {
  const baseUrl = process.env.BASE_URL

  const url = `${baseUrl}/api/produto/?page=${page}`
  const headersList = {
    "Accept": "*/*",
    "charset": "charset: UTF-8",
    "Content-Type": "application/json",
    "session": "session"
  }
  let response = await fetch(baseUrl, {
    method: "GET",
    headers: headersList
  });
  const json = await response.json()
  return json
}

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const fixFields = (page) => {
  const fixed = page.map((product) => {
    const {
      quantidade,
      quantidade_disponivel,
      quantidade_temporaria,
      peso_bruto,
      embalagem_altura,
      embalagem_comprimento,
      embalagem_largura,
      peso_liquido
    } = product
    return {
      ...product,
      quantidade: Number(quantidade),
      quantidade_disponivel: Number(quantidade_disponivel),
      quantidade_temporaria: Number(quantidade_temporaria),
      peso_bruto: Number(peso_bruto),
      embalagem_altura: Number(embalagem_altura),
      embalagem_comprimento: Number(embalagem_comprimento),
      embalagem_largura: Number(embalagem_largura),
      peso_liquido: Number(peso_liquido)
    }
  })
  return fixed
}

const syncEstoque = async () => {
  let produtos = []
  let page = 0

  while (true) {
    let get = await fetchPage(page)
    if (JSON.stringify(get) === '{}' || get.code) break

    const fixedProduts = fixFields(get)
    produtos.push(...fixedProduts)
    page += 1

    console.log(page);
    // await sleep(200)
  }

  // Converte o objeto JavaScript de volta para JSON
  const stringify = JSON.stringify(produtos)
  // Escreve o conteúdo atualizado no arquivo
  fs.writeFileSync('./itm/itm-website/Backend/prisma/produtos.json', stringify)
}

syncEstoque()