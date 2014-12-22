function Board(){
	this.answers = [];
	this.trivia = [];
	this.solved = [];
}

Board.prototype.newGame = function(){
	this.answers = [];
	var qAndA = {};

	for (var i=0; i<test.length; i++){
		// creates a new cell object and sets value of that object to a random trivia answer
		this.answers.push(new Cell);
		this.answers[i].setState(test[i]['answer']);

		// adds a question an answer object to an array
		qAndA = {question: test[i]['question'], answer: test[i]['answer']};		
		this.trivia.push(qAndA);
	}
}

Board.prototype.getTriviaQuestion = function(){
	var index = Math.floor(Math.random() * (this.trivia.length + 1))
	var triviaquestion = this.trivia[index];
	this.solved.push(this.trivia.splice(index, 1));
	console.log(triviaquestion['question']);
	console.log(this.solved);
	console.log(this.trivia);
}

Board.prototype.makePlay = function(){

	console.log(this.question);

}

Board.prototype.checkWin = function(){
	if (this.question.length === 0) {
		console.log("gameover!");
	}
	else {
		console.log("there are still active cells");
	}
}