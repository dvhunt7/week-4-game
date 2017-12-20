//inside span #number, generate a number between 19-120//
function yourNumber() {

	var number = Math.floor(Math.random() * (120 - 19) + 19);
	console.log(number);
	$("#number").text(number);

	var img1number = Math.floor(Math.random() * (12 - 1) + 1);
	console.log(img1number);
	$("#fire").text(number);
	
}

//assign random value to each of the images between 1-12


//on click add images number to your total

//if total equals yourtotal, you win win count++ ready document

//else total>yourtotal, loss count++ ready document

$(document).ready(yourNumber);




