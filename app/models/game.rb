class Game < ActiveRecord::Base
	has_and_belongs_to_many :users

	validates_presence_of :category

	def user=(user)
		ActiveRecord::Base.connection.execute("""
			insert into games_users values
			  (#{user.id}, #{self.id})
		""")
		# insert into games_users values (user_id, game_id)
	end
end