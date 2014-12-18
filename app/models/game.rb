class Game < ActiveRecord::Base
	has_and_belongs_to_many :users

	validates_presence_of :category, :question, :answer, :chomper	

	validates :score, :numericality true, presence: true
end