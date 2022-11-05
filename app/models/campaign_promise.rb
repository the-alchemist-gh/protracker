class CampaignPromise < ApplicationRecord
    has_many :reviews
    has_many :comments

    beloongs_to :governance_year
    belongs_to :country
end
