class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :user_type, :institution, :approved, :created_at

  has_many :campaign_promises
end
