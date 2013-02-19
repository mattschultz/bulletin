class PostsController < ApplicationController
  respond_to :json

  def index
    respond_to do |format|
      format.html
      format.json { render json: Post.all }
    end
  end

  def create
    respond_with Post.create(params[:post])
  end
end
