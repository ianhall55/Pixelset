class AddPhotoSetIdAndOrdToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :photo_set_id, :integer
    add_column :photos, :ord, :integer

  end
end
