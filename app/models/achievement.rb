class Achievement < ActiveRecord::Base
	has_and_belongs_to_many :games

	validates_presence_of :badge
	validates_numericality_of :highscore, :on => :create
end