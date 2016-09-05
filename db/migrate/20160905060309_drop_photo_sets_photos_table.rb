class DropPhotoSetsPhotosTable < ActiveRecord::Migration
  def change
    drop_table :photo_set_photos
  end
end
