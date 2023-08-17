import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function registerUserService(validated: any) {     
    console.log(validated);
    
    const registerUserResponse = await prisma.user.create({
        data: validated
    })
    return registerUserResponse
}

export {
    registerUserService,
}