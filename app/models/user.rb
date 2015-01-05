class User < ActiveRecord::Base
	has_many :games
	has_many :achievements, dependent: :destroy

	validates :username, presence: true, uniqueness: true
	validates_presence_of :first_name, :last_name, :birthday, :avatar, :chomper

	acts_as_birthday :birthday

	has_secure_password

end