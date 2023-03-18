class PostSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :address, :city, :state, :cusine, :restaurant_name, :influencer_id
end
