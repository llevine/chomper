class GamesController < ApplicationController

	def index
		render :new
	end

	def new
		render :new
	end

	def playGame
		@gameType = params[:category]

		# same as a long if statement
		case @gameType
			when "invention"
				@trivia = TriviaWrapper.getInventionTrivia()
			when "movie"
				@trivia = TriviaWrapper.getMovieTrivia()
			when "politic"
				@trivia = TriviaWrapper.getPoliticTrivia()
			when "baseball"
				@trivia = TriviaWrapper.getBaseballTrivia()
			else
				@trivia = nil
		end
		render :play
	end

	def create
		puts "********inside games controller create********"
		g = Game.create(
			user_id: current_user.id,
			score: params[:score],
			category: params[:category],
		)
		render json: { "success" => g.valid? }
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