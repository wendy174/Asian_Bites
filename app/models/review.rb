class Review < ApplicationRecord
    belongs_to :influencer
    belongs_to :post
end
