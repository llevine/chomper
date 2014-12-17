class Game < ActiveRecord::Base
	belongs_to :user
	has_and_belongs_to_many :achievements

	validates_presence_of :category, :question, :answer, :chomper	

	validates :score, :numericality true, presence: true
end