class Album < ActiveRecord::Base
  validates :title, :owner_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :photo_sets

end
