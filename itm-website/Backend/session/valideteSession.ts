import checkIsExpired from "./checkIsExpired";
import getSession from "../fetchers/getSession"
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
interface ISession {
    expiration_time?:string;
    code?: number;
    session?: string;
    message?: string;
    erro?: string;
  }
const validateSession = async () => {
        const firstSession = await prisma.session.findFirst()

        if(firstSession?.session && !checkIsExpired(firstSession.expiration_time)) {
            return firstSession.session
        }

        const {erro, message, expiration_time, session}: ISession = await getSession()
        
        if(!firstSession?.session && session && expiration_time) {
            await prisma.session.create({data: { id:0, session, expiration_time }})
            return
        }

        if(!erro) {
            await prisma.session.update({ where: {id: 0}, data: {id:0, session, expiration_time }})
            return session
        }

        if(erro) {
            return firstSession?.session
        }

}

export default validateSession;