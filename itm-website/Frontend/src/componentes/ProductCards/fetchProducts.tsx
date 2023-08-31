const getProductsByPage = async (page: number) => {

  let headersList = {
    "Accept": "*/*",
    "charset": "charset: UTF-8",
    "Content-Type": "application/json",
  }

  const response = await fetch(`http://localhost:3000/produto/?page=${page}`, {
    method: "GET",
    headers: headersList
  }) as any;
  
  const data = await response.json();
  
  const changeFormatToArray = Object.values(data);

  return changeFormatToArray
}

export default getProductsByPage