class GameController < ApplicationController

	def index
	end

	def create
	end

	def update
	end

	def destroy
	end

	private

	def game_params
		params.require(:game).permit(:category, :question, :answer, :score, :chomper)
	end

end