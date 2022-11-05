class CreateCampaignPromises < ActiveRecord::Migration[7.0]
  def change
    create_table :campaign_promises do |t|
      t.string :title
      t.string :topic
      t.text :description
      t.date :promise_date
      t.date :promise_completion
      t.string :promise_venue
      t.integer :votes
      t.string :status
      t.integer :country_id
      t.integer :governance_year_id
      t.string :user_id

      t.timestamps
    end
  end
end
