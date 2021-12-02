var button = document.getElementById('change-background');
var buttonDoubleClick = document.getElementById('change-background-doubleclick');
var buttonMouseEnter = document.getElementById('change-background-mouseenter');
var buttonMouseExit = document.getElementById('change-background-mouseexit');

button.addEventListener('click', function () {
	//action will go here
	document.body.style.backgroundColor = 'tomato';
});

buttonDoubleClick.addEventListener('dblclick', function () {
	document.body.style.backgroundColor = 'yellow';
});

buttonMouseEnter.addEventListener('mouseover', function () {
	document.body.style.backgroundColor = 'blue';
});

buttonMouseExit.addEventListener('mouseout', function () {
	document.body.style.backgroundColor = 'green';
});