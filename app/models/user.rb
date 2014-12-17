class User < ActiveRecord::Base
	has_many :games

	validates :username, presence: true, uniqueness: true
	validates_presence_of :first_name, :age, :avatar

	has_secure_password
end