var game = {
	setupGame: function() {
		this.board = new Board();
	},
	start: function() {
		this.setupGame();
		// populates board with answers
		this.board.createBoard();
		this.board.renderBoard();
		this.board.getTriviaQuestion();
	},
	play: function(position) {
		this.board.makePlay(position);
		this.board.checkOver();
		if (this.board.gameOver){
			$(".cell").addClass('inactiveCell').css('cursor', 'default').off('click', playGame);
			$("#question").html('GAMEOVER');
		}

	}
};
