class SessionController < ApplicationController
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok
        else
          render json: { error: ["Invalid email or password"]}, status: :unprocessable_entity
        end
      end


    def destroy # will clear username out of session 
        session.delete :user_id
        head :no_content
    end
end
