class CampaignPromiseSerializer < ActiveModel::Serializer
  attributes :id, :title, :topic, :description, :promise_date, :promise_venue, :promise_completion, :votes, :status, :country_id, :governance_year_id

  has_one :governance_year
end
