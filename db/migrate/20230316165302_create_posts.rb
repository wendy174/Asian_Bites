class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :description
      t.string :image
      t.string :address
      t.string :city
      t.string :state
      t.string :cusine
      t.string :restaurant_name
      t.integer :influencer_id

      t.timestamps
    end
  end
end
