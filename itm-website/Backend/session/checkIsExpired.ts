import { differenceInMinutes, parse } from 'date-fns';

const checkIsExpired = (date: string) => {
    const parseDates = parse(date, 'yyyy-MM-dd HH:mm:ss', new Date());
    const now = new Date(); // data atua
    const diffInMinutes = differenceInMinutes(now, parseDates);

    return diffInMinutes > 10
} 

export default checkIsExpired
