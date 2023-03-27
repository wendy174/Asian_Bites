class PostSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :address, :city, :state, :cusine, :restaurant_name
  has_many :reviews
  has_many :influencers
end
