class CampaignPromise < ApplicationRecord
    has_many :reviews
    has_many :comments

    belongs_to :governance_year
    belongs_to :country
    belongs_to :user


    validates :title, presence: true
    validates :status, inclusion: { in: %w(Fulfilled Broken Stalled In_Progress Unrated ),
        message: "%{value} is not a valid Status"}
    validates :topic, inclusion: { in: %w(Education Health Agriculture Energy Tourism Technology Manufacturing),
            message: "%{value} is not a valid type"}
end
