import { differenceInMinutes, parse } from 'date-fns';

const checkIsExpired = (date: string) => {
    const parseDates = parse(date, 'yyyy-MM-dd HH:mm:ss', new Date());
    const now = new Date();
    const diffInMinutes = Math.abs(differenceInMinutes(now, parseDates));
    
    return diffInMinutes > 10
} 

export default checkIsExpired
