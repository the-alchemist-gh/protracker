class CampaignPromiseSerializer < ActiveModel::Serializer
  attributes :id, :title, :topic, :description, :promise_date, :promise_venue, :votes, :status, :country_id, :governance_year_id

  has_one :user
  has_one :governance_year
end
