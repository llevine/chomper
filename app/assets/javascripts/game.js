var game = {
	start: function() {
		this.board = new Board();
		// populates board with answers
		this.board.createBoard();
		this.board.renderBoard();
		this.board.getTriviaQuestion();
	},
	play: function(position) {
		this.board.makePlay(position);
		if (this.board.checkOver()){
			$(".cell").addClass('inactiveCell').css('cursor', 'default').off('click', playGame);
			$("#chomper").remove();
			$("#question").html('GAMEOVER');
			$('#gameBoard').append("<a href='/games/new' class='button blink' style='z-index: 2; position: relative; top: -280px; margin: 0 auto;'>New Game!</a>");
			$('#endGame').remove();
			$('#saveGame').remove();
			saveGame();
		}
	}
};

function saveQuestion() {
	// alert("saving question! question: " + game.board.currentQuestion.trivia.question + " answer: " + game.board.currentQuestion.trivia.answer);
	$.post('/save_question',
		{ question: game.board.currentQuestion.trivia.question, answer : game.board.currentQuestion.trivia.answer}, 
    function(returnedData){
         //alert("question saved!");
  });
}

function saveGame() {
	$.post('/games', 
		{ category: game.category, score: game.board.totalScore}, 
		function(returnedData){
  });
}