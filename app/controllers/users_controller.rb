class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])

    if @user.save!
      log_in(params[:user][:username], params[:user][:password])
    end
    redirect_to root_url
  end

end