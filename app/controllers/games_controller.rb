class GamesController < ApplicationController

	def index
	end

	def new
		render :new
	end

	def playGame
		gameType = params[:category]

		# same as a long if statement
		case gameType
			when "invention"
				@trivia = TriviaWrapper.getInventionTrivia()
			when "movie"
				@trivia = TriviaWrapper.getMovieTrivia()
			else
				@trivia = nil
		end
		render :play
	end

	def destroy
	end

	def saveQuestion
		sq = SavedQuestion.create(
			user_id: current_user.id,
			question: params[:question],
			answer: params[:answer]
		)
		# TODO: can check sq.valid? here
		render json: { "success" => true }
	end

	private

	def game_params
		params.require(:game).permit(:category, :question, :answer, :score, :chomper)
	end
end