$(document).ready(function() {
	//allow user input and create grids based on the number of squares the user wants
	function createGrid() {
		var count = 0
		while(count < 16) {
			$('#container').append('<div class="grid"></div>');
			count = count + 1;
		}
	}

	function newGrid(n) {
		$('.grid').hide();
		var count = 0
		var size = Math.round(960/n)
		while(count < (n*n)) {
			$('#container').prepend('<div class="newGrid"></div>');
			$('.newGrid').css('height', size);
			$('.newGrid').css('width', size);
			count = count + 1;
		}
	}

	createGrid();

	$('.grid').hover(function() {
		$(this).css('background-color', '#00ffff');
	});

	$('#clear').click(function() {
		$('.grid').css('background-color', '#ff66ff');
	});

	$('#new').click(function() {

		var n = prompt('Please enter a number between 1 and 64.')

		if ( n < 1 || n > 64) {
			alert('Try again. Can you count?!');
		}
		else {
			newGrid(n);

			$('.newGrid').hover(function() {
				$(this).css('background-color', '#00ffff');
			});

			$('#clear').click(function() {
				$('.newGrid').css('background-color', '#ff66ff');
			});
		}
	});


});