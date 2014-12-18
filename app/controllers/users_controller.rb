class UsersController < ApplicationController

	def index
		@users = User.all
	end

	def show
	end

	def create
	end

	def update
	end

	def destroy
	end

	private

	def user_params
		params.require(:user).permit(:username, :first_name, :last_name, :birthday, :avatar, :password, :password_confirmation)
	end

end