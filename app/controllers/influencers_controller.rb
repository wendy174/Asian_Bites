class InfluencersController < ApplicationController
    skip_before_action :authorize, only: :create
    ## not working, authorize is acting on all methods 

    def index 
        influencers = Influencer.all 
        render json: influencers
    end

    def show 
        influencer = Influencer.find(params[:id])
        render json: influencer
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
        params.permit(:email, :password, :bio, :name, :social_media_links) 
   end


end


