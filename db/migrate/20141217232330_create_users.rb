class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    t.string :username, null: false
    t.string :first_name, null:false
    t.string :last_name
    t.date :birthday
    t.text :avatar
    t.text :chomper
    t.string :password_digest

    t.timestamps
    end
  end
end
