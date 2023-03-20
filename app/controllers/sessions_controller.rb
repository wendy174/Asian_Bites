class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
        influencer = Influencer.find_by(email: params[:email])
        if influencer&.authenticate(params[:password])
          session[:influencer_id] = influencer.id
          render json: influencer, status: :ok
        else
          render json: { error: ["Invalid email or password"]}, status: :unprocessable_entity
        end
      end


    def destroy # will clear username out of session 
        session.delete :influencer_id
        head :no_content
    end
end
