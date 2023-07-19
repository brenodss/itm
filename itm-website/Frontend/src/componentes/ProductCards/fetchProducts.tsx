const getProductsByPage = async (page: number) => {

  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "charset": "charset: UTF-8",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type"
  }

  let response = await fetch(`http://localhost:3000/produtos/?page=${page}`, {
    method: "GET",
    headers: headersList
  });

  let data = await response.json();
  return data;

}

export default getProductsByPage