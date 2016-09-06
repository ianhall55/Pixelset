# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# User.create!({name: 'Ian Hall', username: 'ian', email: 'ian@gmail.com',
#   password: 'password'})
#
# Album.create!({title: 'Thailand Vacation', owner_id: 1, event_date: "15/01/2012"});
# Album.create!({title: 'Costa Rica Vacation', owner_id: 1, event_date: "20/12/2015"});

u1 = User.create!({name: 'guest', email: 'guest@gmail.com', username: 'guest', password: 'password'})

a1 = Album.create!({title: 'Ocean', owner_id: u1.id, event_date: '15/01/2016'})
a2 = Album.create!({title: 'Nature', owner_id: u1.id, event_date: '10/12/2012'})

p1 = PhotoSet.create!({title: 'Atlantic', album_id: 1, ord: 1})
p2 = PhotoSet.create!({title: 'Pacific', album_id: 1, ord: 2})


Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179925/seed/ocean/o1.jpg',
  photo_set_id: p1.id, public_id: 'seed/ocean/o1', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179925/seed/ocean/o1.jpg'})
cp1 = Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179968/seed/ocean/o2.jpg',
  photo_set_id: p1.id, public_id: 'seed/ocean/o2', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179968/seed/ocean/o2.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179964/seed/ocean/o3.jpg',
  photo_set_id: p1.id, public_id: 'seed/ocean/o3', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179964/seed/ocean/o3.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179980/seed/ocean/o4.jpg',
  photo_set_id: p1.id, public_id: 'seed/ocean/o4', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179980/seed/ocean/o4.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179947/seed/ocean/o5.jpg',
  photo_set_id: p1.id, public_id: 'seed/ocean/o5', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179947/seed/ocean/o5.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179965/seed/ocean/o6.jpg',
  photo_set_id: p1.id, public_id: 'seed/ocean/o6', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179965/seed/ocean/o6.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179963/seed/ocean/o7.jpg',
  photo_set_id: p1.id, public_id: 'seed/ocean/o7', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179963/seed/ocean/o7.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179956/seed/ocean/o9.jpg',
  photo_set_id: p1.id, public_id: 'seed/ocean/o9', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179956/seed/ocean/o9.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179951/seed/ocean/o10.jpg',
  photo_set_id: p1.id, public_id: 'seed/ocean/o10', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179951/seed/ocean/o10.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179937/seed/ocean/o11.jpg',
  photo_set_id: p1.id, public_id: 'seed/ocean/o11', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179937/seed/ocean/o11.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179922/seed/ocean/o12.jpg',
  photo_set_id: p1.id, public_id: 'seed/ocean/o12', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179922/seed/ocean/o12.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179940/seed/ocean/o13.jpg',
  photo_set_id: p2.id, public_id: 'seed/ocean/o13', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179940/seed/ocean/o13.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179922/seed/ocean/o14.jpg',
  photo_set_id: p2.id, public_id: 'seed/ocean/o14', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179922/seed/ocean/o14.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179918/seed/ocean/o15.jpg',
  photo_set_id: p2.id, public_id: 'seed/ocean/o15', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179918/seed/ocean/o15.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179934/seed/ocean/o16.jpg',
  photo_set_id: p2.id, public_id: 'seed/ocean/o16', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179934/seed/ocean/o16.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179917/seed/ocean/o17.jpg',
  photo_set_id: p2.id, public_id: 'seed/ocean/o17', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179917/seed/ocean/o17.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179931/seed/ocean/o18.jpg',
  photo_set_id: p2.id, public_id: 'seed/ocean/o18', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179931/seed/ocean/o18.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179919/seed/ocean/o19.jpg',
  photo_set_id: p2.id, public_id: 'seed/ocean/o19', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179919/seed/ocean/o19.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179936/seed/ocean/o20.jpg',
  photo_set_id: p2.id, public_id: 'seed/ocean/o20', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179936/seed/ocean/o20.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179931/seed/ocean/o21.jpg',
  photo_set_id: p2.id, public_id: 'seed/ocean/o21', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179931/seed/ocean/o21.jpg'})


a1.cover_photo_id = cp1.id

a1.save




# a3 = Album.create!({title: 'Mountains', owner_id: u1.id, event_date: '10/12/2012'})
# p3 = PhotoSet.create!({title: 'Plants', album_id: 2, ord: 1})
