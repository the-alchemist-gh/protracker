class Country < ApplicationRecord
    has_many :governance_years
    has_many :campaign_promises, through: :governance_years

    validates :name, presence: true, uniqueness: true

end
