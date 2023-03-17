class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :influencer_id, :user_id
end
