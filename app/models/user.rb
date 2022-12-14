class User < ApplicationRecord
    has_many :campaign_promises
    has_many :reviews
    has_many :comments

    has_secure_password

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :user_type, inclusion: { in: %w(Admin Media Voter),
        message: "%{value} is not a valid type"}

end
