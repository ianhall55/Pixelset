class AddPublicIdThumbnailToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :public_id, :string
    add_column :photos, :thumbnail_url, :string

  end
end
