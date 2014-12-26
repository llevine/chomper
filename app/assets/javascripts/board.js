function Board(){
	this.wholeBoard = [];
	this.allTrivia = [];
	this.allSolved = [];
}

Board.prototype.createBoard = function(){
	var qAndA = {};

	for (var i=0; i<triviaConnector.length; i++){
		// creates a new cell object and sets value of that object to a random trivia answer
		var createCell = new Cell;
		createCell.setState(i);
		this.wholeBoard.push(createCell);

		// adds a question an answer object to an array
		qAndA = {question: triviaConnector[i]['question'], answer: triviaConnector[i]['answer']};		
		this.allTrivia.push(qAndA);
	}
	// console.log(this.wholeBoard);
}

Board.prototype.getTriviaQuestion = function(){
	// console.log(this.allTrivia.length);
	if (this.allTrivia.length > 0){
		// returns a random number
		var index = Math.floor(Math.random() * (this.allTrivia.length));
		// returns a random trivia question at the random index number chosen above
		var triviaquestion = this.allTrivia[index];
		// removes the trivia question from the array and saves it to the variable removed
		var removed = this.allTrivia.splice(index, 1);
		// adds the removed question to a solved array
		this.allSolved.push(removed[0]);
	}
	else {
		// maybe move the above if statement to the game page as a game over scenerio checker...
		console.log('game over');
	}
	console.log(triviaquestion['question']);
	console.log(this.allSolved);
	console.log(this.allTrivia);
}

Board.prototype.makePlay = function(chosenCell){

}

Board.prototype.checkWin = function(){
	if (this.allTrivia.length === 0){
		return true;
	}
	else {
		return false;
	}
}

Board.prototype.render = function(){
	var singleRow = [];
	var wholeBoard = [];

	// |0|1|2|3|4| //
	// |5|6|7|8|9| //
	// |10|11|12|13|14| //

	this.wholeBoard.forEach(function(cell, index, board) {
		singleRow.push("|" + cell.render() + "|");
			if (index === 4 || index === 9 || index === 14){
				wholeBoard.push(singleRow);
				singleRow = [];
		 	}
	});
	return wholeBoard.join('\n');
}