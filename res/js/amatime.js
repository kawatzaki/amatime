var days = [];
for (i = 1; i < 32; i++)
	days.push(i);

var years = [];
for (i = 1900; i < 2100; i++)
	years.push(i);

var Vju = new Vue({
	el: '#container',
	data: {
		show: false,
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
		scrollMonth: function(target) {
			if (target > -1 && target < 12) {
				li = $('#month-list li:nth(' + target + ')');
				$('#month').scrollTop(li.position().top);
				li.scrollTop();
			}
		},
		scrollDay: function(target) {
			if (target > -1 && target < 31)
			{
				li = $('#day-list li:nth(' + target +')'); $('#day').scrollTop(li.position().top);
				li.scrollTop();
			}
		},
		scrollYear: function(target) {
			if (target > -1 && target < 200) {
				li = $('#year-list li:nth(' + target + ')');
				$('#year').scrollTop(li.position().top);
				li.scrollTop();
			}
		},
		loadData: function() {
			k = new Date();
			mindex = k.getMonth();
			dindex = k.getDate();
			yindex = $.inArray(k.getFullYear(), this.years);
			this.form.month = this.months[mindex];
			this.form.day = this.days[dindex - 1];
			this.form.year = this.years[yindex];
		},
		toggleShow: function() {
			this.show = !this.show;
			var _month = this.form.month;
			var _day = this.form.day;
			var _year = this.form.year;

			_months = this.months;
			_days = this.days;
			_years = this.years;
			if (this.show)
				$(document).ready(function () {
					mindex = $.inArray(_month, _months);
					dindex = $.inArray(_day, _days);
					yindex = $.inArray(_year, _years);
					console.log(mindex);
					this.scrollMonth(mindex - 2);
					this.scrollDay(dindex - 3);
					this.scrollYear(yindex - 2);
				});
		}
	},
	mounted: function() {
		this.loadData();
	}
});
