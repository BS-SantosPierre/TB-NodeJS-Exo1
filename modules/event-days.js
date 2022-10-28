/**
 * @param {number} date
 * @param {number} month
 * @return {Date}
 */
const getNextEventDate = (day, month) => {
	const today = new Date();
	let year = today.getFullYear();

	const indexMonth = month - 1;

	if (today.getMonth() > indexMonth
		|| (today.getMonth() === indexMonth && today.getDate() > date) // If on the same day
	) {
		year++;
	}

	return new Date(year, indexMonth, day);
}
/**
 * @param {Date} targetDate
 */
const getDiffDays = (targetDate) => {
	const today = new Date();

	const diffDay = targetDate.getTime() - today.getTime();

	const milliInDay = 1000 * 60 * 60 * 24;

	return Math.ceil(diffDay / milliInDay);
}


const eventDay = {
	beforeChristmas: () => {
		const nextChristmas = getNextEventDate(25, 12);
		return getDiffDays(nextChristmas);
	},
	birthday: (day, month) => {
		const nextChristmas = getNextEventDate(day, month);
		return getDiffDays(nextChristmas);
	},
	summerVacation: () => {
		const month = new Date().getMonth();

		if (month >= 6 && month <= 7) {
			return 0;
		}

		const nextHoliday = getNextEventDate(1, 7);
		return getDiffDays(nextHoliday);
	},
	solstice: () => {
		const nextSummerSolstice = getNextEventDate(21, 6);
		const nextWinteSolstice = getNextEventDate(25, 12);

		const nbSummerDays = getDiffDays(nextSummerSolstice);
		const nbWinterDays = getDiffDays(nextWinteSolstice);

		return Math.min(nbSummerDays, nbWinterDays);
	},
	nextFriday13th: () => {
		const today = new Date();

		// Permet d'obtenir le prochain mois où il y a un 13e jour
		let indexMonth = today.getMonth();
		if (today.getDate() >= 13) {
			indexMonth++;
		}

		// Recup le prochain 13 du mois
		const nextFriday = new Date(today.getFullYear(), indexMonth, 13);

		// Test si vendredi -> si ce n'est pas le cas, on passe au mois suivant
		while (nextFriday.getDay() !== 5) {
			// On passe au mois suivant
			nextFriday.setMonth(nextFriday.getMonth() + 1);
		}

		return getDiffDays(nextFriday);
	}
}

module.exports = eventDay;
