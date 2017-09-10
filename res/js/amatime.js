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
		years: years,
		form: {
			month: '',
			day: '',
			year: ''
		}
	},
	methods: {
		selectMonth: function(month) {
			this.form.month = month;
		},
		selectDay: function(day) {
			this.form.day = day;
		},
		selectYear: function(year) {
			this.form.year = year;
		},
		scrollDay: function(target) {
			console.log($('#day-list').scrollTop());
			$('#day-list').scrollTop($('#day-list').top + $('#day-list li:nth-child(14)').position().top);
		}
	},
	mounted: function() {
		this.scrollDay(17);
	}
});
