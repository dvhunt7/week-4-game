//inside span #number, generate a number between 19-120//
var number = Math.floor(Math.random() * (120 - 19) + 19);

	$("#number").text(number);
//assign random value to each of the images between 1-12
var num1 = Math.floor(Math.random() * (12 - 1) + 1);
	
var num2 = Math.floor(Math.random() * (12 - 1) + 1);

var num3 = Math.floor(Math.random() * (12 - 1) + 1);	 

var num4 = Math.floor(Math.random() * (12 - 1) + 1);	 	


var total = 0;

$("#totalscore").text(total);
//on click add images number to your total
$("#ogimg").click(function() {
		total = total + num1;
		$("#totalscore").text(total);	
		if(total == number){
			win();
		}
		else if(total > number){
			loss();
		}
});

$("#fireimg").click(function() {
		total = total + num2;
		$("#totalscore").text(total);	
		if(total == number){
			win();
		}
		else if(total > number){
			loss();
		}
});

$("#2000img").click(function() {
		total = total + num3;
		$("#totalscore").text(total);	
		if(total == number){
			win();
		}
		else if(total > number){
			loss();
		}
});

$("#mechaimg").click(function() {
		total = total + num4;
		$("#totalscore").text(total);	
		if(total == number){
			win();
		}
		else if(total > number){
			loss();
		}
});


var wincount = 0;

var losscount = 0;

$("#wins").text(wincount);
$("#losses").text(losscount);
//else total>yourtotal, loss count++ ready document
function restart() {
	var number = Math.floor(Math.random() * (120 - 19) + 19);

	$("#number").text(number);

	 var num1 = Math.floor(Math.random() * (12 - 1) + 1);

	var num2 = Math.floor(Math.random() * (12 - 1) + 1);

	var num3 = Math.floor(Math.random() * (12 - 1) + 1);	 

	var num4 = Math.floor(Math.random() * (12 - 1) + 1);	

	total = 0;


}

function win() {

	alert("you win");
	wincount++;
	$("#wins").text(wincount);
	restart();
}

function loss() {

	alert("LOSER");
	losscount++;
	$("#losses").text(losscount);
	restart();

}




