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
			if (target > -1 && target < 31)
			{
				var li = 
						$('#day-list li:nth(' + target +')');
						sTop = $('#day').scrollTop(li.position().top);
						sTop = li.scrollTop();
						console.log(sTop);
			}
		}
	},
	mounted: function() {
		this.scrollDay(0);
	}
});
