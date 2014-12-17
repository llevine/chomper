class CreateAchievements < ActiveRecord::Migration
  def change
    create_table :achievements do |t|
    	t.string :badge
    	t.integer :highscore
    	t.references :user

    	t.timestamps
    end
  end
end
