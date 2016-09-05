class Album < ActiveRecord::Base
  validates :title, :owner_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :photo_sets

  has_many :photos,
    through: :photo_sets,
    source: :photos

  has_one :cover_photo,
    primary_key: :cover_photo_id,
    foreign_key: :id,
    class_name: :Photo

end
