class Api::PhotosController < ApplicationController

  def index
    photo_set = PhotoSet.where(id: params[:photo_set_id]).first
    @photos = photo_set.photos
  end

  def show
    render json: Photo.find(params[:id])
  end

  def create
    @photo = Photo.new(photo_params)
    photo_set = PhotoSet.where(id: @photo.photo_set_id).first
    @photo.ord = (photo_set.photos.last) ? photo_set.photos.order(:ord).last.ord + 1 : 1
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find(photo_params[:id])
    @photo.update(photo_params)
    render :show
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render json: @photo
  end

  def photo_params
    params.require(:photo).permit(:id, :image_url, :photo_set_id, :ord, :public_id, :thumbnail_url)
  end

end
