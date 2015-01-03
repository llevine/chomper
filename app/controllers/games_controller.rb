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
		puts "****** CATEGORY: #{gameType}"

		# same as a long if statement
		case gameType
		when "invention"
			puts "***** gameType is invention"
			@trivia = TriviaWrapper.getInventionTrivia()
		when "movie"
			puts "***** gameType is movie"
			@trivia = TriviaWrapper.getMovieTrivia()
		else
			puts "***** gameType is not a game type"
			@trivia = nil
		end
		puts "******* TRIVIA: #{@trivia}"
		render :play
	end

	def destroy
	end

	private

	def game_params
		params.require(:game).permit(:category, :question, :answer, :score, :chomper)
	end

end