class CreateInfluencers < ActiveRecord::Migration[7.0]
  def change
    create_table :influencers do |t|
      t.string :name
      t.string :bio
      t.string :email
      t.string :password_digest
      t.string :social_media_links

      t.timestamps
    end
  end
end
