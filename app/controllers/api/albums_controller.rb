class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.where(owner_id: params[:id])
  end

  def show
    @album = Album.find(params[:id])
    
    render :show
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def update
    @album = Album.find(album_params[:id])
    @album.update(album_params)
    render :show
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy
    render json: @album
  end

  def album_params
    params.require(:album).permit(:id, :title, :event_date, :owner_id, :cover_photo_id)
  end
end
