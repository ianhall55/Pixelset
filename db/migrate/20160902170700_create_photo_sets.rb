class CreatePhotoSets < ActiveRecord::Migration
  def change
    create_table :photo_sets do |t|
      t.integer :album_id, null: false
      t.string :title, null: false
      t.integer :ord, null: false

      t.timestamps null: false
    end
  end
end
