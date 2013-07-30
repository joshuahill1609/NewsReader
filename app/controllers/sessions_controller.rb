class SessionsController < ApplicationController

  def new

  end

  def create
    log_in(params[:user][:username],params[:user][:password])
    redirect_to root_url
  end

  def destroy

  end
end