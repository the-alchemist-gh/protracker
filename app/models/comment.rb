class Comment < ApplicationRecord
    belongs_to :campaign_promise
    belongs_to :user
    
end
