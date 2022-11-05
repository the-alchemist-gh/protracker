class Review < ApplicationRecord
    belongs_to :campaign_promise
    belongs_to :user
end
