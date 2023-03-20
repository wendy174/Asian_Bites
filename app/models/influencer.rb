class Influencer < ApplicationRecord
    has_secure_password

    has_many :reviews 
    has_many :posts, through: :reviews 
    has_many :favorites 

 

end
