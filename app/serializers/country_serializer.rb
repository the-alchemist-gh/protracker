class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :flag_image_url

  has_many :governance_years
end
