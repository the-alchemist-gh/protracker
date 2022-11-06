class CampaignPromise < ApplicationRecord
    has_many :reviews
    has_many :comments

    belongs_to :governance_year
    belongs_to :country
    belongs_to :user
end
