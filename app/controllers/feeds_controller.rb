class FeedsController < ApplicationController

  def index
    respond_to do |format|
      format.html {
        render :index
      }
      format.json { render :json => current_user.feeds }
    end
  end

  def create
    feed = current_user.feeds.create(params[:feed])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def show
    feed = Feed.find(params[:id])
    feed.reload
    render :json => feed
  end
end
