class GamesController < ApplicationController

	def index
	end

	def new
		render :new
	end

	def create_invention
		@game = Game.create(category: "Invention")
		@game.user = current_user
		@trivia = TriviaWrapper.getInventionTrivia()
		render :play
	end

	def destroy
	end

	private

	def game_params
		params.require(:game).permit(:category, :question, :answer, :score, :chomper)
	end

end