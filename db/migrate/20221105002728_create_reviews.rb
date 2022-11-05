class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :rating_evidence_url
      t.string :user_id
      t.string :campaign_promise_id

      t.timestamps
    end
  end
end
