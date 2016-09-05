class CreatePhotoSetPhotos < ActiveRecord::Migration
  def change
    create_table :photo_set_photos do |t|
      t.integer :photo_id, null: false
      t.integer :photo_set_id, null: false
      t.integer :ord, null: false
      t.timestamps null: false
    end
  end
end
