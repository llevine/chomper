class RefactorTables < ActiveRecord::Migration
  def up
    remove_column :games, :chomper
    add_column :users, :chomper, :string

    remove_column :games, :question
    remove_column :games, :answer

    add_column :games, :user_id, :integer

    drop_table :games_users
  end

  def down
  end
end
