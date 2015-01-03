// shuffle function. takes allTrivia's indexes, shuffles them and returns a shuffled array.
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

// ///////////////////////////////////////////////////////////////////////////////////////// //

// triviaConnector is a variable that is created on play.html.erb it is how I recieve the information from the api.

function Board(){
	this.allTrivia = [];
	this.allSolved = [];
	this.currentQuestion = {};
	this.numAsked = 0;
	this.gameOver = false;
	this.lives = 3;
}

Board.prototype.createBoard = function(){
	for (var i=0; i<triviaConnector.length; i++){
		// creates a new cell object. populates it with the question, answer, and value from the api. Then it pushes the cell to an array called allTrivia. All Trivia holds all cells.
		var cell = new Cell;
		cell.setState(triviaConnector[i]);	
		this.allTrivia.push(cell);
	}
	this.totalScore = 0;
	// indices is an array that holds numbers 0 - 14 in it.
	var indices = [];
	for (var i=0; i<this.allTrivia.length; i++){
		indices.push(i);
	}

	// shuffles all the numbers in the array indices and sets the newly shuffled array to the variable this.triviaIndices
	this.triviaIndices = shuffle(indices);
}

Board.prototype.getTriviaQuestion = function(){
	// this.numAsked keeps track of how many questions have been asked. As long as that number is less than this.allTrivia.length which is 15 questions can be asked.
	if (this.numAsked < this.allTrivia.length){
		// I take the current question number, and go into the shuffled array of questions indexes and return that number and set it to the variable index.
		var index = this.triviaIndices[this.numAsked];
		// the current question is then set.
		this.currentQuestion = this.allTrivia[index];
		alert(this.currentQuestion.trivia.answer);
		this.currentIndex = index;
		// renders the question on the page
		$("#question").html(this.currentQuestion.trivia.question);
	}
	// else {
	// 	// IF NO CELLS ARE LEFT SHOULD I RELOAD PAGE TO ADD MORE QUESTIONS IF TIMER IS STILL NOT DONE? OR SHOULD I CLEAR THE PAGE AND SAY GAME OVER???????????? 
	// 	console.log('game over');
	// }
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

			this.allTrivia[userGuess].active = false;
			this.allTrivia[userGuess].render(userGuess);
		}
		else {
			//this removes a live. user has a total of 3 lives
			alert("subtracing a life");
			$("#life" + this.lives).remove();
			this.lives -= 1;
			//this lowers the score by the point value of the wrong answer chosen
			//this.totalScore -= this.allTrivia[userGuess].trivia.pointValue;
		}
		$("#totalScore").html(this.totalScore);
}

Board.prototype.checkOver = function(){
	return (this.numAsked === 15 || this.totalScore <= -1000 || this.lives === 0);
}

Board.prototype.renderBoard = function(){
	for (var i = 0; i < this.allTrivia.length; i++) {
		this.allTrivia[i].render(i);
	}
	$('#gamePage').append("<a href='/games/new' class='button blink' id='endGame'>End Game</a>");
		
	$("#0").prepend("<img src='http://i.imgur.com/Vy9uacp.png' id='chomper'>");
	$("#totalScore").html(this.totalScore);

	for (var i=1; i<=3; i++){
		$("#life" + i).html("<img src='http://i.imgur.com/Vy9uacp.png'>");
	}
}