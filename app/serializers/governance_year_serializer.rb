class GovernanceYearSerializer < ActiveModel::Serializer
  attributes :id, :year, :political_party, :president, :country_id, :image_url

  has_many :campaign_promises
end
