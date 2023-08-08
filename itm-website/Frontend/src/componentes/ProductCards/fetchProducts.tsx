const getProductsByPage = async (page: number) => {

  let headersList = {
    "Accept": "*/*",
    "charset": "charset: UTF-8",
    "Content-Type": "application/json",
  }

  let response = await fetch(`http://localhost:3000/produtos/?page=${page}`, {
    method: "GET",
    headers: headersList
  });

  let data = await response.json();
  // last item is http code and is being removed
  let changeFormatToArray = Object.values(data).slice(0, -1);
  
  return changeFormatToArray
}

export default getProductsByPage