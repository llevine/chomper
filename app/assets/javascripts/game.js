gameOver = false;

var game = {
	setupGame: function() {
		this.makeBoard = new Board();
	},
	start: function() {
		this.setupGame();
		// populates board with answers
		this.board.createBoard();
		this.board.getTriviaQuestion();
		this.board.render();
	},
	play: function(position) {
	
	}
};
