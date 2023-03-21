class Post < ApplicationRecord
  has_many :reviews 
  has_many :influencers, through: :reviews  
  has_many :favorites 

  validates :description, :image, :address, :city, :state, :cusine, :restaurant_name, presence: true
end
