const allMonths = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];

export function parseDate(dateString: string) {
	const fullDate = new Date(dateString);
	const year = fullDate.getFullYear();
	const month = fullDate.getMonth();
	const date = fullDate.getDate();
	return `${date} ${allMonths[month]}, ${year}`;
}
