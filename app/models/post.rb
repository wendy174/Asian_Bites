class Post < ApplicationRecord
  has_many :reviews 
  has_many :influencers, through: :reviews  
  has_many :favorites 
end
