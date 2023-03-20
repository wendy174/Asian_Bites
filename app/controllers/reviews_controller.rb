class ReviewsController < ApplicationController
    def index 
        reviews = Review.all 
        render json: reviews  
    end

    def show 
        review = Review.find(params[:id])
        render json: review 
    end

    def update 
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review 
    end

    def destroy 
        review = Review.find(params[:id])
        review.destroy 
        head :no_content 
    end

    
    private

   def influencer_params
        params.permit(:comment, :post_id, :influencer_id)
   end
end
