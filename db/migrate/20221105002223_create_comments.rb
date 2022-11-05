class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.text :title
      t.integer :user_id
      t.integer :campaign_promise_id

      t.timestamps
    end
  end
end
