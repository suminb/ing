
$(document).ready(function() {
  var baseDate = Date.parse('Nov 08, 2015 15:40:00 GMT+0900');

	tick(baseDate);
	setInterval(function() {
		tick(baseDate);
	}, 1000);
});

function tick(baseDate) {
	var currentTime = new Date();

	var diff = currentTime.getTime() - baseDate;

	$("#timer").text(format(diff / 1000));

}

function format(seconds) {
	var days = 0;
	var hours = 0;
	var minutes = 0;

	if (seconds >= 3600 * 24) {
		days = parseInt(seconds / (3600 * 24));
		seconds = seconds % (3600 * 24);
	}
	if (seconds >= 3600) {
		hours = parseInt(seconds / 3600);
		seconds = seconds % 3600;
	}
	if (seconds >= 60) {
		minutes = parseInt(seconds / 60);
		seconds = seconds % 60;
	}
	seconds = parseInt(seconds);

	var fd = $.sprintf("%02d:%02d:%02d", hours, minutes, seconds);
	if (days > 0) fd = $.sprintf("%d days %s", days, fd);

	return fd;
}
