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
	play: function(e) {
		var elem = $(this);
		alert("BOARD:" + e.data.current_game.board);
				alert(elem.html());
		e.data.current_game.board.makePlay(elem.html());
	}
};
