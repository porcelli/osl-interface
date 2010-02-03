// JavaScript Document

//Dropdown menu

$(document).ready(function(){
		$('li.headlink').hover(
			function() { $('ul', this).slideDown('10000') },
			function() { $('ul', this).show().slideUp('1000') });
	});
