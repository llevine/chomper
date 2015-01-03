function Cell(){
	this.active = true;
	this.trivia = {};
	this.score = 0;
}

Cell.prototype.setState = function(t){
		this.trivia = {question: t.question, answer: t.answer, pointValue: t.value};	
}

Cell.prototype.render = function(cell){
	if (this.active == false) {
		$("#" + cell).addClass('correctCell').css('cursor', 'default').off('click', playGame);
	}
	else {
		// alert(this.trivia[cell].answer);
		$("#" + cell).html(this.trivia.answer + "<br>" + this.trivia.pointValue);
	}
}

			