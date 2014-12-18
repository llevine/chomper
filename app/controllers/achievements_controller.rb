class AchievementsController < ApplicationController
	def index
	end

	def show
	end

	private

	def user_params
		params.require(:achievement).permit(:badge, :highscore)
	end
	
end