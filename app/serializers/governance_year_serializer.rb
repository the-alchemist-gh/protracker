class GovernanceYearSerializer < ActiveModel::Serializer
  attributes :id, :year, :political_party, :president, :country_id
end
