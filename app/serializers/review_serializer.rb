class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :post_id, :influencer_id 
end
