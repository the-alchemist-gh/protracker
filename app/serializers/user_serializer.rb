class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :user_type, :institution, :password_digest, :approved, :created_at
end