class CommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :campaign_promise_id
end
