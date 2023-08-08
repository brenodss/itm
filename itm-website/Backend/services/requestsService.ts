import fetchOrders from "../fetchers/fetchOrders";

async function getRequestsByDate(session: string) {  
    const start = '2020-03-01'
    const end = '2023-08-01'  
    const ordersByDate = await fetchOrders(session, start, end)
    return ordersByDate
}

export {
    getRequestsByDate,
}