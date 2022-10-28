const eventDay = require('./modules/event-days');
const readline = require('readline');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Day Before Christmas
const nbChristmas = eventDay.beforeChristmas();
console.log(`Day before Christmas => ${nbChristmas} day(s)`);
// Birthday
const nbBirthDay = eventDay.birthday(13, 5);
console.log(`Day before Birthday => ${nbBirthDay} day(s) 😔`);
// Summer vacation
const nbSummerVacation = eventDay.summerVacation();
console.log(`Day before Summer Vacation => ${nbSummerVacation} day(s) 🌴`);
// Solstice
const nbSolstice = eventDay.solstice();
console.log(`Day before Solstice => ${nbSolstice} day(s) 🌄`);
// Next Friday 13th
const nbNextFriday = eventDay.nextFriday13th();
console.log(`Day before next friday 13th => ${nbSolstice} day(s) 🔪`);
