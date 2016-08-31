class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.where(owner_id: params[:id])
  end

  def show

  end

  def new

  end

  def create

  end

  def edit
  end

  def update

  end

  def destroy

  end

  def album_params
    params.require(:album).permit(:user)
  end
end
