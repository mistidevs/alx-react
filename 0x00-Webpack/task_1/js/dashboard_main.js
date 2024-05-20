import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="myButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let clickCount = 0;

  function updateCounter() {
    clickCount += 1;
    $('#count').text(`${clickCount} clicks on the button`);
  }

  const debouncedUpdateCounter = _.debounce(updateCounter, 300)

  $('#myButton').on('click', debouncedUpdateCounter);
});
