const moment = require('moment');

const dayCalc = (departingDate) => {
    let currentDate = new Date();
    let secondDate = new Date(departingDate);
    //calculate the time difference between them in miliseconds, then it will divide that time by the number of miliseconds in a day
    let timeDiff = (secondDate.getTime() - currentDate.getTime());
    let daysDiff = timeDiff / (1000 * 3600 * 24);
    let days = Math.round(daysDiff);
    if (days != 1) {
        let answer = days + " days ";
        return answer;
    } else {
        let answer = days + " day ";
        return answer;
    }
}
const historyCalc = (date) => {
    let weatherDate = moment(date);
    weatherDate = weatherDate.subtract(1,'year');
    let formattedDate = weatherDate.format("YYYY-MM-DD")
    return formattedDate;
}

export { dayCalc };
export { historyCalc };