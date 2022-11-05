class CountrySerializer < ActiveModel::Serializer
  attributes :id, :name, :flag_image_url
end
