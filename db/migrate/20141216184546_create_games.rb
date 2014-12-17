class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
    	t.string :category
    	t.string :question
    	t.string :answer
    	t.integer :score
    	t.string :chomper
    	t.references :user

    	t.timestamps
    end
  end
end
