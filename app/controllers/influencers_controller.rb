class InfluencersController < ApplicationController
    def index 
        influencers = Influencer.all 
        render json: influencers
    end


    def show 
        influencer = Influencer.find(params[:id])
        render json: influencer 
    end
end
