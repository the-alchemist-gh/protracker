class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :rating_evidence_url, :user_id, :campaign_promise_id
end
