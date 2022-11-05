# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_05_002728) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaign_promises", force: :cascade do |t|
    t.string "title"
    t.string "topic"
    t.text "description"
    t.date "promise_date"
    t.date "promise_completion"
    t.string "promise_venue"
    t.integer "votes"
    t.string "status"
    t.integer "country_id"
    t.integer "governance_year_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.text "title"
    t.integer "user_id"
    t.integer "campaign_promise_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "countries", force: :cascade do |t|
    t.string "name"
    t.string "flag_image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "governance_years", force: :cascade do |t|
    t.string "year"
    t.string "political_party"
    t.string "president"
    t.integer "country_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating"
    t.string "rating_evidence_url"
    t.integer "user_id"
    t.integer "campaign_promise_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "user_type"
    t.string "institution"
    t.string "password_digest"
    t.boolean "approved"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
