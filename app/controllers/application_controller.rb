class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize 

    private 

    def render_not_found_response
        render json: { error: "Record not found" }, status: :not_found
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end 

    # checks to see if current user (authenticated)
    # this function ensures that ensure that the user is authenticated before performing certain actions.

    def authorize 
        @current_influencer = Influencer.find_by(id: session[:influencer_id])
        render json: {errors: 'Not authorized. Please Login First'}, status: :unauthorized unless @current_influencer 
    end

end
