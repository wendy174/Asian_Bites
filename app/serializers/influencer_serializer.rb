class InfluencerSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :email, :password_digest, :social_media_links
end
