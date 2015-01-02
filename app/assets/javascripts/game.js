gameOver = false;

var game = {
	setupGame: function() {
		this.board = new Board();
	},
	start: function() {
		this.setupGame();
		// populates board with answers
		this.board.createBoard();
		this.board.render();
		this.board.getTriviaQuestion();
	},
	play: function(position) {
		this.board.makePlay(position);
		// var elem = $(this);
		// e.data.current_game.board.makePlay(elem.html().split("<br>")[0]);
	}
};
