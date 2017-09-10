var days = [];
for (i = 1; i < 32; i++)
	days.push(i);

var years = [];
for (i = 1995; i < 2018; i++)
	years.push(i);

var Vju = new Vue({
	el: '#container',
	data: {
		months: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'Agoust',
			'September',
			'October',
			'November',
			'December'
		],
		days: days,
		years: years
	}
});
