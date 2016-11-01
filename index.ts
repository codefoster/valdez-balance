import * as moment from 'moment';

let loanStartDate = moment('2011-01-01');
let months = moment().add(1,'month').diff(loanStartDate,'months');
console.log(36000 - (months * 300));