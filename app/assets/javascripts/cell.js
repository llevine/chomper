function Cell(){
	this.active = true;
	this.value = {};
	this.score = 0;
}

Cell.prototype.setState = function(index){
		var t = triviaConnector[index];
		this.value = {question: t.question, answer: t.answer, pointValue: t.value};	
}

Cell.prototype.render = function(){
	if (this.active === true){
		return this.value;
	}
	else {
		return "cell inactive";
	}
}