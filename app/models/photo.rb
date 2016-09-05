class Photo < ActiveRecord::Base
  validates :image_url, presence: true

  belongs_to :photo_set


end
