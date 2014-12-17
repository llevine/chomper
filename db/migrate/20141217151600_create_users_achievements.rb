class CreateUsersAchievements < ActiveRecord::Migration
  def change
    create_join_table :users, :achievements
  end
end