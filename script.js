$(document).ready(function() {
	//allow user input and create grids based on the number of squares the user wants
	function createGrid() {
		var count = 0
		while(count < 144) {
			$('#container').append('<div class="grid"></div>');
			count = count + 1;
		}
		$('.newGrid').hide();
	}

	function newGrid(n) {
		clearAll();
		var count = 0
		var size = Math.round(960/n)
		while(count < (n*n)) {
			$('#container').prepend('<div class="newGrid"></div>');
			$('.newGrid').css('height', size);
			$('.newGrid').css('width', size);
			count = count + 1;
		}
	}

	function clearAll() {
		$('.grid').hide();
		$('.newGrid').hide();
	}

	function getRandomColor() {
    	var letters = '0123456789ABCDEF'.split('');
    	var color = '#';
    	for (var i = 0; i < 6; i++ ) {
        	color += letters[Math.floor(Math.random() * 16)];
    	}
    	return color;
	}

	// DOESN'T WORK
	// function sketchVersion() {
	// 	var fade = 1
	// 	var count = 0
	// 	$('.grid').hover(function() {
	// 		while (count < 4) {
	// 			$(this).fadeTo('fast', fade);
	// 			count = count + 1;
	// 			fade = fade - 0.2;
	// 		}
	// 	});
	// }

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

	$('#fade').click(function() {
		$('.grid').mouseenter(function() {
			$(this).fadeTo('fast', 0);
		});
		$('.grid').mouseleave(function() {
			$(this).fadeTo('slow', 1);
		});
		$('.grid').hover(function() {
			$(this).css('background-color', '#ff66ff');
		});
		$('.newGrid').mouseenter(function() {
			$(this).fadeTo('fast', 0);
		});
		$('.newGrid').mouseleave(function() {
			$(this).fadeTo('slow', 1);
		});
		$('.newGrid').hover(function() {
			$(this).css('background-color', '#ff66ff');
		});
	});
//keeps on fading even after normal is clicked again? how to undo jquery functions
	$('#normal').click(function() {
		createGrid();
		$('.grid').hover(function() {
			$(this).css('background-color', '#00ffff');
		});
		$('.newGrid').hover(function() {
			$(this).css('background-color', '#00ffff');
		});
		$('.newGrid').mouseenter(function() {
			$(this).fadeTo('fast', 1);
		});
		$('.newGrid').mouseleave(function() {
			$(this).fadeTo('fast', 1);
		});
		$('.grid').mouseenter(function() {
			$(this).fadeTo('fast', 1);
		});
		$('.grid').mouseleave(function() {
			$(this).fadeTo('fast', 1);
		});
	});

	//make a version that you have to pass the mouse over a few times before it's white


	// $('#sketch').click(function() {
	// 	sketchVersion();
	// });
	

	$('#random').click(function() {
		$('.grid').hover(function() {
			var color = getRandomColor();
			$(this).css('background-color', color)
		});
		$('.newGrid').hover(function() {
			var color = getRandomColor();
			$(this).css('background-color', color)
		});
	});

});