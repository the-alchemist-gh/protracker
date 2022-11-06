class AddImageUrlToGovernanceYears < ActiveRecord::Migration[7.0]
  def change
    add_column :governance_years, :image_url, :string
  end
end
