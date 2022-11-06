class CampaignPromiseSerializer < ActiveModel::Serializer
  attributes :id, :title, :topic, :description, :promised_date, :promise_venue, :votes, :status, :country_id, :governance_year_id

  has_one :user
end
