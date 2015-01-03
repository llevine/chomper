# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150103215908) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "achievements", force: true do |t|
    t.string   "badge"
    t.integer  "highscore"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "games", force: true do |t|
    t.string   "category"
    t.string   "question"
    t.string   "answer"
    t.integer  "score"
    t.string   "chomper"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "games_users", id: false, force: true do |t|
    t.integer "user_id", null: false
    t.integer "game_id", null: false
  end

  create_table "saved_questions", force: true do |t|
    t.integer  "user_id"
    t.string   "question"
    t.string   "answer"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "username",        null: false
    t.string   "first_name",      null: false
    t.string   "last_name"
    t.date     "birthday"
    t.text     "avatar"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
