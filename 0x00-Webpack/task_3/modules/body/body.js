import '../css/body.css';
import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="myButton">Click here to get started</button>');
$('body').append('<p id="count"></p>');

const updateCounter = () => {
	let times = $('#count').html() || 0;
	$('button').on('click', () => {
		times++;
		$('#count').html(`${times} clicks on the button`);
	});
};

_.debounce(updateCounter, 500);
updateCounter();
