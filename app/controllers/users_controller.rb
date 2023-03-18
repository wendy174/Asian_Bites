class UsersController < ApplicationController
    def index 
        users = User.all 
        render json: users
    end

    def create # signup 
        user = User.create(user_params)
        session[:user_id] = user 
        render json: user, status: :created 

    end

	def show 
        render json: @current_user 
    end

    private 

    def user_params
        params.permit(:email, :password)
    end
    
end
