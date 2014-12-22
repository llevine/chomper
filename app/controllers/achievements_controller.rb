class AchievementsController < ApplicationController
	def index
		@achievements = Achievement.all
	end

	private

	def user_params
		params.require(:achievement).permit(:badge, :highscore)
	end
	
end