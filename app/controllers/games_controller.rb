class GamesController < ApplicationController

	def index
		@trivia = TriviaWrapper.getInventionTrivia()
	end

	def create

	end

	def destroy
	end

	private

	def game_params
		params.require(:game).permit(:category, :question, :answer, :score, :chomper)
	end

end