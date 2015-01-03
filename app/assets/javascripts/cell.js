function Cell(){
	this.active = true;
	this.trivia = {};
	this.score = 0;
}

Cell.prototype.setState = function(t){
		this.trivia = {question: t.question, answer: t.answer, pointValue: t.value};	
}

Cell.prototype.render = function(){
	if (this.active === true){
		this.trivia;
	}
	else {
		$(this).css('background', 'red');
	}
}