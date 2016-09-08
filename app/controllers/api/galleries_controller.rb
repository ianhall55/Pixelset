class Api::GalleriesController < ApplicationController

  def show
    @gallery = Album.find(params[:id])
  end

end
