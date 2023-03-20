class InfluencersController < ApplicationController
    def index 
        influencers = Influencer.all 
        render json: influencers
    end

    def create # signup 
        influencer = Influencer.create(influencer_params)
        session[:influencer_id] = influencer
        render json: influencer, status: :created 

    end

    def show 
        render json: @current_influencer 
    end

    private

   def influencer_params 
        params.permit(:email, :password) 
   end


end


