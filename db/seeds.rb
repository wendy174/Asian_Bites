require 'faker'
puts 'Seeding database...'


Influencer.destroy_all 
Favorite.destroy_all 
Post.destroy_all
Review.destroy_all
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
    # influencer_id: I1.id 
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
    # influencer_id: I1.id 
)

Post.create!(
    description: "We ventured into Flushing today for a quick meal. That’s where we found dim sum heaven! This can be found at the ground floor of New World Mall if you enter on Main Street. Additionally they sell Chinese BBQ such as char siu, as well as 4 entrees over rice with a soup for $9. "  , 
    image: "https://media-cdn.tripadvisor.com/media/photo-s/14/fb/cb/7e/royal-queen.jpg " , 
    address: "136-20 Roosevelt Ave 3rd floor 3 Floor, Flushing, NY 11354", 
    city: "Flushing", 
    state: "NY", 
    cusine: "Chinese",
    restaurant_name: "Royal Queen", 
    # influencer_id: I1.id 
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
    # influencer_id: I2.id 
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
    # influencer_id:  I2.id 
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
    # influencer_id: I2.id 
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
    # influencer_id: I3.id 
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
    # influencer_id:  I3.id
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
    # influencer_id: I4.id 
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
    # influencer_id: I4.id 
)

Post.create!(
    description: "True NYC Gem"  , 
    image: "https://pyxis.nymag.com/v1/imgs/ce4/4c4/fbff4d99461b98383d24028dcbb037e6d8-Rule-of-Thirds--2434.2x.rhorizontal.w700.jpg" , 
    address: "171 Banker St, Brooklyn, NY 11222", 
    city: "Brooklyn", 
    state: "NY", 
    cusine: "Japanese",
    restaurant_name: "Rule of Thirds", 
    # influencer_id: I4.id 
)



# reviews
Review.create!(
        comment: "I've had better", 
        influencer_id: Influencer.all().sample().id , 
        post_id: Post.all().sample().id
    )

Review.create!(
        comment: "Also agree!", 
        influencer_id: Influencer.all().sample().id , 
        post_id: Post.all().sample().id
    )

Review.create!(
    comment: 'So so good!', 
    influencer_id: Influencer.all().sample().id , 
    post_id: Post.all().sample().id
)


Review.create!(
    comment: 'I wished I lived here this place', 
    influencer_id: Influencer.all().sample().id , 
    post_id: Post.all().sample().id
)

Review.create!(
    comment: 'I got sick from this food', 
    influencer_id: Influencer.all().sample().id , 
    post_id: Post.all().sample().id
)

Review.create!(
    comment: 'The place down the road is better', 
    influencer_id: Influencer.all().sample().id , 
    post_id: Post.all().sample().id
)

Review.create!(
    comment: "I will be back next year and will visit this place", 
    influencer_id: Influencer.all().sample().id , 
    post_id: Post.all().sample().id
)

Review.create!(
    comment: 'My wife had me this this food around 2 am when she was pregs', 
    influencer_id: Influencer.all().sample().id , 
    post_id: Post.all().sample().id
)

Review.create!(
    comment: 'Food is wonderful and owner is great!', 
    influencer_id: Influencer.all().sample().id , 
    post_id: Post.all().sample().id
)

Review.create!(
    comment: 'I go here every weekend', 
    influencer_id: Influencer.all().sample().id , 
    post_id: Post.all().sample().id
)

#favorites 

20.times do 
    Favorite.create!(
        post_id: Post.all().sample().id, 
        influencer_id: Influencer.all().sample().id
    )
end 




puts 'Done seeding database...'
