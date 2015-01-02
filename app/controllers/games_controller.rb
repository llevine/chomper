class GamesController < ApplicationController

	def index
	end

	def new
		render :new
	end

	def playGame
		# @game = Game.create(params[:category])
		# @game.user = current_user
		gameType = params[:category]

		@trivia = TriviaWrapper.getInventionTrivia()
		# @trivia = params[:category]

		render :play
	end

	def destroy
	end

	private

	def game_params
		params.require(:game).permit(:category, :question, :answer, :score, :chomper)
	end

end