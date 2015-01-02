function Board(){
	this.allTrivia = [];
	this.allSolved = [];
	this.currentQuestion = {};
	this.totalScore = 0;
}

Board.prototype.createBoard = function(){
	for (var i=0; i<triviaConnector.length; i++){
		// creates a new cell object and sets value of that object to a random trivia answer
		var createCell = new Cell;
		createCell.setState(i);

		// adds a question an answer object to an array	
		this.allTrivia.push(createCell);
		// console.log(this.allTrivia);
	}
}

Board.prototype.getTriviaQuestion = function(){
	// console.log(this.allTrivia.length);
	if (this.allTrivia.length > 0){
		// returns a random number
		var index = Math.floor(Math.random() * (this.allTrivia.length));
		// returns a random trivia question at the random index number chosen above
		this.currentQuestion = this.allTrivia[index];
		// removes the trivia question from the array and saves it to the variable removed
		var removed = this.allTrivia.splice(index, 1);
		// adds the removed question to a solved array
		this.allSolved.push(removed[0]);
	}
	else {
		// maybe move the above if statement to the game page as a game over scenerio checker...
		console.log('game over');
	}
	$("#question").html(this.currentQuestion.value['question']);
}

Board.prototype.makePlay = function(chosenCell){
	alert(chosenCell);
	alert(this.allTrivia[chosenCell].value['answer']);
		if (this.currentQuestion.value['answer'] === this.allTrivia[chosenCell].value['answer']){
			this.totalScore += this.currentQuestion.value['pointValue'];
			// this.chosenCell.active = false;
			this.getTriviaQuestion();
			// $("chosenCell").css('background-color', 'red');
			alert(chosenCell);
		}
		else {
			this.totalScore -= this.currentQuestion.value['pointValue']/2;
		}
		$("#totalScore").html(this.totalScore);
}

Board.prototype.checkOver = function(){
	if (this.allTrivia.length === 0){
		return true;
	}
	else {
		return false;
	}
}

Board.prototype.render = function(){
	for (var i = 0; i < this.allTrivia.length; i++) {
		$("#" + i).html(this.allTrivia[i].value['answer'] + "<br>" + this.allTrivia[i].value['pointValue']);
	}
}