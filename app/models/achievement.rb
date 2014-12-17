class Achievement < ActiveRecord::Base
	belongs_to :users

	validates_presence_of :badge
	validates_numericality_of :highscore, :on => :create
end