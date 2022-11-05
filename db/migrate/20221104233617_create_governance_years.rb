class CreateGovernanceYears < ActiveRecord::Migration[7.0]
  def change
    create_table :governance_years do |t|
      t.string :year
      t.string :political_party
      t.string :president
      t.integer :country_id

      t.timestamps
    end
  end
end
