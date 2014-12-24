function Board(){
	this.answers = [];
	this.trivia = [];
	this.solved = [];
}

Board.prototype.newGame = function(){
	this.answers = [];
	var qAndA = {};

	for (var i=0; i<triviaConnector.length; i++){
		// creates a new cell object and sets value of that object to a random trivia answer
		this.answers.push(new Cell);
		this.answers[i].setState(triviaConnector[i]['answer']);

		// adds a question an answer object to an array
		qAndA = {question: triviaConnector[i]['question'], answer: triviaConnector[i]['answer']};		
		this.trivia.push(qAndA);
	}
}

Board.prototype.getTriviaQuestion = function(){
	// console.log(this.trivia.length);
	if (this.trivia.length > 0){
		// returns a random number
		var index = Math.floor(Math.random() * (this.trivia.length));
		// returns a random trivia question at the random index number chosen above
		var triviaquestion = this.trivia[index];
		// removes the trivia question from the array and saves it to the variable removed
		var removed = this.trivia.splice(index, 1);
		// adds the removed question to a solved array
		this.solved.push(removed[0]);
	}
	else {
		// maybe move the above if statement to the game page as a game over scenerio checker...
		console.log('game over');
	}
	console.log(triviaquestion['question']);
	console.log(this.solved);
	console.log(this.trivia);
}

Board.prototype.makePlay = function(chosenCell){

}

Board.prototype.checkWin = function(){
	if (this.trivia.length === 0){
		return true;
	}
}