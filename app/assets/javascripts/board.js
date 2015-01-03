//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function Board(){
	this.allTrivia = [];
	this.allSolved = [];
	this.currentQuestion = {};
	this.totalScore = 0;
	this.numAsked = 0;
}

Board.prototype.createBoard = function(){
	for (var i=0; i<triviaConnector.length; i++){
		// creates a new cell object and sets value of that object to a random trivia answer
		var cell = new Cell;
		cell.setState(triviaConnector[i]);

		// adds a question an answer object to an array	
		this.allTrivia.push(cell);
		// console.log(this.allTrivia);
	}

	var indices = [];
	for (var i = 0; i < triviaConnector.length; i++) indices.push(i);
	this.triviaIndices = shuffle(indices)
}

Board.prototype.getTriviaQuestion = function(){
	// console.log(this.allTrivia.length);
	if (this.numAsked < this.allTrivia.length){
		// returns a random number
		// var index = Math.floor(Math.random() * (this.allTrivia.length));
		// returns a random trivia question at the random index number chosen above
		var index = this.triviaIndices[this.numAsked];
		//if (this.allTrivia[index].active == true){
			this.currentQuestion = this.allTrivia[index];
			alert(this.allTrivia[index].active);
			alert(this.currentQuestion.trivia.answer);
			this.currentIndex = index;
		//}
		//else {
		//	this.getTriviaQuestion();
		//}
		// // removes the trivia question from the array and saves it to the variable removed
		// var removed = this.allTrivia.splice(index, 1);
		// // adds the removed question to a solved array
		// this.allSolved.unshift(removed[0]);
	}
	else {
		// maybe move the above if statement to the game page as a game over scenerio checker...
		console.log('game over');
	}
	this.allTrivia[index].render();
	$("#question").html(this.currentQuestion.trivia.question);
}


// i need chosen cell to be the answer phrase that's in the clicked div. and i want to compare it to index 0 of the this.solved array answer
Board.prototype.makePlay = function(userGuess){
	  alert("current index: " + this.currentIndex + " userGuess: " + userGuess);
	  if (this.currentIndex == userGuess) {
		//if (this.currentQuestion.trivia.answer === userGuess){
			this.totalScore += this.currentQuestion.trivia.pointValue;
			// this.userGuess.active = false;
			this.numAsked++;
			this.getTriviaQuestion();
			// need to access this userGuess cells css property to access render red...
			$("#" + userGuess).css('background', 'gray');
			$("#" + userGuess).css('cursor', 'default');
		}
		else {
			this.totalScore -= this.currentQuestion.trivia.pointValue/2;
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
		$("#" + i).html(this.allTrivia[i].trivia.answer + "<br>" + this.allTrivia[i].trivia.pointValue);
	}
}