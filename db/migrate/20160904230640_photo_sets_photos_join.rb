class PhotoSetsPhotosJoin < ActiveRecord::Migration
  def change
    create_table :photo_sets_photos do |t|
      t.integer :photo_id, null: false
      t.integer :photo_set_id, null: false
      t.integer :ord, null: false
    end
  end
end
