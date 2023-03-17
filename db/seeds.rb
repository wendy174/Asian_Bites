require 'faker'
puts 'Seeding database...'


Influencer.destroy_all 
Favorite.destroy_all 
Post.destroy_all
Review.destroy_all
User.destroy_all
# influencers
# 4 influencers and 4 post each 


I1 = Influencer.create!( 
    name: "ny.foodie", 
    bio: "Exploring the city and Long Island through food. If we’re not out at a restaurant, find us at Costco", 
    email: "nyfoodieny@gmail.com", 
    password: 'foodie', 
    social_media_links:  "https://www.instagram.com/ny.foodie/?hl=en"
)


I2= Influencer.create!( 
    name: "fionaeats365", 
    bio: "Blogger", 
    email: "fionaeats365@gmail.com", 
    password: 'fiona', 
    social_media_links:  "https://www.instagram.com/fionaeats365/"
)

I3 = Influencer.create!( 
    name: "feedyourfirlfriend", 
    bio: " I love eating & it's my boyfriend's mission to take me to eat yummy food 😋", 
    email: "feedyourgirlfriend@gmail.com", 
    password: 'feed', 
    social_media_links:  "https://www.instagram.com/feedyourgirlfriend/"
)

I4 = Influencer.create!( 
    name: "nyc_piggie", 
    bio: "Obsessed with good coffee, dessert, Asian food", 
    email: "DM on instagram for collabs", 
    password: 'nyc', 
    social_media_links: "https://www.instagram.com/nyc_piggie/ "
) 




#post 

# Influencer: ny.foodie 

Post.create!(
    description:  "One of our most memorable meals this year was from @ganhoo_bbq in Flushing. Let us know what was your favorite meal this year was!", 
    image: "https://scontent-bos5-1.xx.fbcdn.net/v/t1.6435-9/166675304_3835988369821710_540951438970789589_n.jpg?stp=dst-jpg_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=J4b-LH6t-z0AX--OfZA&_nc_ht=scontent-bos5-1.xx&oh=00_AfCaO0w6-HEyTKEuVkdx9ZfvkBftUhymSXRRURigfDr6Ww&oe=643AE209", 
    address: "3702 Main St 2Fl, Flushing, NY 11354", 
    city: "Flushing", 
    state: "NY", 
    cusine: "Korean",
    restaurant_name: 'Gan Hoo BBQ', 
    influencer_id: I1.id 
)

Post.create!(
    description: "Our go to spot for Korean Fried Chicken has always been @madforchickenusa! It’s crazy to see how much they’ve grown from their OG Flushing location. We visited their fairly new Bayside location and ordered all our favorite dishes. Their chicken is always on point; super crispy and juicy and their truffle parm fries are very addicting! "  , 
    image: "https://fastly.4sqi.net/img/general/600x600/2007847_V9j4ARNV71epHQqlfnuxc7i700e07NrqR3pyotZB2ME.jpg " , 
    address: "157-18 Northern Blvd
    Flushing NY 11354 ", 
    city: "Flushing ", 
    state: "NY", 
    cusine: "Korean",
    restaurant_name: "Mad for Chicken", 
    influencer_id: I1.id 
)

Post.create!(
    description: "We ventured into Flushing today for a quick meal. That’s where we found dim sum heaven! This can be found at the ground floor of New World Mall if you enter on Main Street. Additionally they sell Chinese BBQ such as char siu, as well as 4 entrees over rice with a soup for $9. "  , 
    image: "https://media-cdn.tripadvisor.com/media/photo-s/14/fb/cb/7e/royal-queen.jpg " , 
    address: "136-20 Roosevelt Ave 3rd floor 3 Floor, Flushing, NY 11354", 
    city: "Flushing", 
    state: "NY", 
    cusine: "Chinese",
    restaurant_name: "Royal Queen", 
    influencer_id: I1.id 
)

#fionaeats 


Post.create!(
    description: "One of my favorite dessert spots"  , 
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMU2Ew_XJnKtcGvdAKpOZExawpuDzjIDduFw&usqp=CAU" , 
    address: "17 W 32nd St, New York, NY 10001 ", 
    city: "New York ", 
    state: "NY", 
    cusine: "Korean",
    restaurant_name: "Grace Street", 
    influencer_id: I2.id 
)

Post.create!(
    description: "take my moneyyy"  , 
    image: "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/320434327_1829266284118406_3925475484543708975_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=C3-4KSVEkM4AX-0vPTY&_nc_ht=scontent-bos5-1.xx&oh=00_AfDCq1zIm5g-VvqUEkyTAvWMBD98z4IrV0dV4Oevw-QVIg&oe=6417CAB7 " , 
    address: "130 West 47th Street
    New York, NY 10036 ", 
    city: "New York", 
    state: "NY", 
    cusine: "Japanese",
    restaurant_name: "The Chemistry Room", 
    influencer_id:  I2.id 
)

Post.create!(
    description: "Hearty and healthy meal at @zousny! All the dishes were so tasty, especially this chicken soup 🥰 it immediately warms up my soul!
    "  , 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWsflyc2IRBiJnaQOhaXylNRakWKOtNeR4ikfLDtFWcj0Yd0LdCcQFVvvBKMMm6vAHdc&usqp=CAU " , 
    address: "38-14 Prince St, Flushing, NY ", 
    city: "Flushing", 
    state: "NY", 
    cusine: "Chinese",
    restaurant_name: "Zou's", 
    influencer_id: I2.id 
)

# feed your girlfriend 

Post.create!(
    description: "@anntremet just brought back the Chinese New Year Rabbit 🐰🧧 . It will be available until the end of April.
    Check this place out!"  , 
    image: " https://video-iad3-2.cdninstagram.com/o1/v/t16/f1/m82/604397AF5B296698AF5C06394CCDC2B0_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&_nc_ht=video-iad3-2.cdninstagram.com&_nc_cat=100&vs=1371676426965603_291245957&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC82MDQzOTdBRjVCMjk2Njk4QUY1QzA2Mzk0Q0NEQzJCMF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0RFc0JoVEVmaHg4dTZNRUFOWGZ3cTFXdzJzb2JxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmhsTu5Y%2FxzT8VAigCQzMsF0AxyXjU%2FfO2GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA%3D%3D&ccb=9-4&oh=00_AfBbenEpT-HcL8JWlDPm-yBJ8AaEh7WR4oWLq47hGF3BNA&oe=6415736F&_nc_sid=ea0b6e&_nc_rid=21b4ee6f8d" , 
    address: " 47 8th Avenue, New York, NY 10014", 
    city: "New York", 
    state: "NY", 
    cusine: "Chinese, French",
    restaurant_name: "AnnTremet Cake ", 
    influencer_id: I3.id 
) 


Post.create!(
    description: "Cafe inside a Flower Shop is trending in NYC"  , 
    image: " https://images.squarespace-cdn.com/content/v1/5a4bfb480abd044fbe6826a9/1675798858373-178CHOMV6HHTT15Y7XE7/image-asset.jpeg?format=300w" , 
    address: " 906 2nd Ave
    New York, NY, 10017", 
    city: "New York", 
    state: "NY", 
    cusine: "Cute",
    restaurant_name: "Remi", 
    influencer_id:  I3.id
)


Post.create!(
    description: "This place has 2 floors.
    On 1st floor, there are a cafe, a gift shop and photo corners, which is open to everyone (There are outdoor seating area in front of the building too)
    On 2nd floor, there are sanrio-themed seating area and photo corners. However, in order to access the 2nd floor, you need to book tickets in advance via Naver (the link is in their IG bio. The downside is that you need to have Korean Phone number with Korean Carrier to book the tickets 😟 The tickets are free tho)
    Don’t miss out if you are a sanrio lover like I am!"  , 
    image: " https://64.media.tumblr.com/79a0545384da379fcc055a73c6c732fb/156d491c1738a62d-6a/s1280x1920/3cbebc6b2e2d4fe4a66dfd2b61139209e3cc84d5.jpg" , 
    address: "18 Wausan-ro 19-gil, Mapo-gu, Seoul, Korea ", 
    city: "Mapo-gu", 
    state: "Seoul", 
    cusine: "Cute",
    restaurant_name: "Sanrio Lovers Club", 
    influencer_id:  I3.id
)


#nyc.piggie 

Post.create!(
    description: "Soo many yummy eats at @meijinramenofficial"  , 
    image: " https://static.wixstatic.com/media/05788c_e122b9a23ab84ba0940a61dcae0ac784~mv2_d_1863_1242_s_2.jpg/v1/fill/w_462,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/05788c_e122b9a23ab84ba0940a61dcae0ac784~mv2_d_1863_1242_s_2.jpg" , 
    address: " 1574 2nd Ave, New York, NY 10028,", 
    city: "New York", 
    state: "NY", 
    cusine: "Japanese",
    restaurant_name: "Meijin Ramen", 
    influencer_id: I4.id 
)

Post.create!(
    description: "When the desserts are too good to choose a favorite 😭"  , 
    image: "https://images.squarespace-cdn.com/content/v1/59959efac534a51a8381e312/1582570609728-B6BQ0XJ8Q3MOI4HHEXEV/image-asset.jpeg?format=300w" , 
    address: "230 East 9th St. 2nd Floor
    New York, NY 10003", 
    city: "New York", 
    state: "NY", 
    cusine: "Asian",
    restaurant_name: "Cha-An Teahouse", 
    influencer_id: I4.id 
)

Post.create!(
    description: "True NYC Gem"  , 
    image: "data:image/jpeg;base64,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" , 
    address: "171 Banker St, Brooklyn, NY 11222", 
    city: "Brooklyn", 
    state: "NY", 
    cusine: "Japanese",
    restaurant_name: "Rule of Thirds", 
    influencer_id: I4.id 
)




# users 
5.times do 
    User.create!(
        name: Faker::Name.name, 
        email: Faker::Internet.unique.email, 
        password: Faker::Internet.unique.password
    )
end 


# reviews
Review.create!(
        comment: "I've had better", 
        user_id: User.all().sample().id , 
        post_id: Post.all().sample().id
    )

Review.create!(
        comment: "No thanks!", 
        user_id: User.all().sample().id , 
        post_id: Post.all().sample().id
    )

Review.create!(
    comment: 'So so good!', 
    user_id: User.all().sample().id , 
    post_id: Post.all().sample().id
)


Review.create!(
    comment: 'I wished I lived here this place', 
    user_id: User.all().sample().id , 
    post_id: Post.all().sample().id
)

Review.create!(
    comment: 'I got sick from this food', 
    user_id: User.all().sample().id , 
    post_id: Post.all().sample().id
)

Review.create!(
    comment: 'The place down the road is better', 
    user_id: User.all().sample().id , 
    post_id: Post.all().sample().id
)

Review.create!(
    comment: "I will be back next year and will visit this place", 
    user_id: User.all().sample().id , 
    post_id: Post.all().sample().id
)

Review.create!(
    comment: 'My wife had me this this food around 2 am when she was pregs', 
    user_id: User.all().sample().id , 
    post_id: Post.all().sample().id
)

Review.create!(
    comment: 'Food is wonderful and owner is great!', 
    user_id: User.all().sample().id , 
    post_id: Post.all().sample().id
)

Review.create!(
    comment: 'I go here every weekend', 
    user_id: User.all().sample().id , 
    post_id: Post.all().sample().id
)

#favorites 

20.times do 
    Favorite.create!(
        post_id: Post.all().sample().id, 
        user_id: User.all().sample().id, 
        influencer_id: Influencer.all().sample().id
    )
end 












puts 'Done seeding database...'
