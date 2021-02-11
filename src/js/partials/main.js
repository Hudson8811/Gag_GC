$(document).ready(function () {
	setInterval(function(){
		$('.logo__blick,.logo2__blick').addClass('blink_on');
		setTimeout(function(){$('.logo__blick,.logo2__blick').removeClass('blink_on')},1500);
	},6000)
});