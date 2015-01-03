class CreateSavedQuestions < ActiveRecord::Migration
  def up
    create_table :saved_questions do |t|
    	t.integer :user_id
    	t.string  :question
    	t.string  :answer
    	t.timestamps
    end
  end

  def down
  	drop_table :saved_questions
  end
end
