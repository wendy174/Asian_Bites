class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :post_id, :user_id
end
