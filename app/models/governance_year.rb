class GovernanceYear < ApplicationRecord
    belongs_to :country
    has_many :campaign_promises
end
