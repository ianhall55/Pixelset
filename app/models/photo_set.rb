class PhotoSet < ActiveRecord::Base
  validates :album_id, :title, presence: true

  belongs_to :album


end
