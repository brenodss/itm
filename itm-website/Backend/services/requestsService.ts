
import { PrismaClient } from "@prisma/client"
import getOrders from "../fetchers/getOrders";
const prisma = new PrismaClient();

async function getRequestsByDate(session: string) {  
    const start = '2020-03-01'
    const end = '2023-08-01'  
    const ordersByDate = await getOrders(session, start, end)
    return ordersByDate
}

export {
    getRequestsByDate,
}