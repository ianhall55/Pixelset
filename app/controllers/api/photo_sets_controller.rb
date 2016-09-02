class Api::PhotoSetsController < ApplicationController

  def index
    @photo_sets = PhotoSet.where(album_id: params[:album_id]).order(:ord)
  end

  def show
    render json: PhotoSet.find(params[:id])
  end

  def create
    @photo_set = PhotoSet.new(photo_set_params)
    @photo_set.ord = PhotoSet.where(album_id: 1).order(:ord).last.ord + 1
    if @photo_set.save
      render :show
    else
      render json: @photo_set.errors.full_messages, status: 422
    end
  end

  def update
    @photo_set = PhotoSet.find(photo_set_params[:id])
    @photo_set.update(photo_set_params)
    render :show
  end

  def destroy
    @photo_set = PhotoSet.find(params[:id])
    @photo_set.destroy
    render json: @photo_set
  end

  def photo_set_params
    params.require(:photo_set).permit(:id, :title, :album_id, :ord)
  end

end
