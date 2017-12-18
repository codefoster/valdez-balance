import * as moment from 'moment';

let loanStartDate = moment('2011-01-01');
let months = moment().add(1,'month').diff(loanStartDate,'months');
let balance = 36000 - (months * 300);
let monthsRemaining = balance/300;
let yearsRemaining = monthsRemaining/12;
console.log(`Remaining balance: ${balance}`);
console.log(`Years: ${yearsRemaining}`);
console.log(`Months: ${monthsRemaining}`);