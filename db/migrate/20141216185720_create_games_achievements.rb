class CreateGamesAchievements < ActiveRecord::Migration
  def change
    create_join_table :games, :achievements
    end
  end
end
