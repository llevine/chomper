class User < ActiveRecord::Base
	has_and_belongs_to_many :games
	has_many :achievements, dependent: :destroy

	validates :username, presence: true, uniqueness: true
	validates_presence_of :first_name, :birthday, :avatar

	has_secure_password
end