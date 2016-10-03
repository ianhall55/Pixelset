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
a2 = Album.create!({title: 'Mountains', owner_id: u1.id, event_date: '5/5/2015'})
a3 = Album.create!({title: 'Animals', owner_id: u1.id, event_date: '4/5/2005'})
a4 = Album.create!({title: 'Woods', owner_id: u1.id, event_date: '11/2/2012'})

p1 = PhotoSet.create!({title: 'Atlantic', album_id: 1, ord: 1})
p2 = PhotoSet.create!({title: 'Pacific', album_id: 1, ord: 2})

p3 = PhotoSet.create!({title: 'Highlights', album_id: 2, ord: 1})

p4 = PhotoSet.create!({title: 'Highlights', album_id: 3, ord: 1})

p5 = PhotoSet.create!({title: 'Highlights', album_id: 4, ord: 1})


Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179925/seed/ocean/o1.jpg', ord: 1,
  photo_set_id: p1.id, public_id: 'seed/ocean/o1', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179925/seed/ocean/o1.jpg'})
cp1 = Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179968/seed/ocean/o2.jpg', ord: 2,
  photo_set_id: p1.id, public_id: 'seed/ocean/o2', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179968/seed/ocean/o2.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179964/seed/ocean/o3.jpg', ord: 3,
  photo_set_id: p1.id, public_id: 'seed/ocean/o3', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179964/seed/ocean/o3.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179980/seed/ocean/o4.jpg', ord: 4,
  photo_set_id: p1.id, public_id: 'seed/ocean/o4', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179980/seed/ocean/o4.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179947/seed/ocean/o5.jpg', ord: 5,
  photo_set_id: p1.id, public_id: 'seed/ocean/o5', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179947/seed/ocean/o5.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179965/seed/ocean/o6.jpg', ord: 6,
  photo_set_id: p1.id, public_id: 'seed/ocean/o6', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179965/seed/ocean/o6.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179963/seed/ocean/o7.jpg', ord: 7,
  photo_set_id: p1.id, public_id: 'seed/ocean/o7', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179963/seed/ocean/o7.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179956/seed/ocean/o9.jpg', ord: 8,
  photo_set_id: p1.id, public_id: 'seed/ocean/o9', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179956/seed/ocean/o9.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179951/seed/ocean/o10.jpg', ord: 9,
  photo_set_id: p1.id, public_id: 'seed/ocean/o10', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179951/seed/ocean/o10.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179937/seed/ocean/o11.jpg', ord: 10,
  photo_set_id: p1.id, public_id: 'seed/ocean/o11', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179937/seed/ocean/o11.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179922/seed/ocean/o12.jpg', ord: 11,
  photo_set_id: p1.id, public_id: 'seed/ocean/o12', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179922/seed/ocean/o12.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179940/seed/ocean/o13.jpg', ord: 12,
  photo_set_id: p2.id, public_id: 'seed/ocean/o13', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179940/seed/ocean/o13.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179922/seed/ocean/o14.jpg', ord: 13,
  photo_set_id: p2.id, public_id: 'seed/ocean/o14', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179922/seed/ocean/o14.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179918/seed/ocean/o15.jpg', ord: 14,
  photo_set_id: p2.id, public_id: 'seed/ocean/o15', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179918/seed/ocean/o15.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179934/seed/ocean/o16.jpg', ord: 15,
  photo_set_id: p2.id, public_id: 'seed/ocean/o16', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179934/seed/ocean/o16.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179917/seed/ocean/o17.jpg', ord: 16,
  photo_set_id: p2.id, public_id: 'seed/ocean/o17', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179917/seed/ocean/o17.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179931/seed/ocean/o18.jpg', ord: 17,
  photo_set_id: p2.id, public_id: 'seed/ocean/o18', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179931/seed/ocean/o18.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179919/seed/ocean/o19.jpg', ord: 18,
  photo_set_id: p2.id, public_id: 'seed/ocean/o19', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179919/seed/ocean/o19.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179936/seed/ocean/o20.jpg', ord: 19,
  photo_set_id: p2.id, public_id: 'seed/ocean/o20', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179936/seed/ocean/o20.jpg'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179931/seed/ocean/o21.jpg', ord: 20,
  photo_set_id: p2.id, public_id: 'seed/ocean/o21', thumbnail_url: 'http://res.cloudinary.com/de79besd8/image/upload/c_limit,h_60,w_90/v1473179931/seed/ocean/o21.jpg'})

Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179925/seed/mountains/m1.jpg', ord: 1,
  photo_set_id: p3.id, public_id: 'seed/mountains/m1'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179968/seed/mountains/m2.jpg', ord: 2,
  photo_set_id: p3.id, public_id: 'seed/mountains/m2' })
cp2 = Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179964/seed/mountains/m3.jpg', ord: 3,
  photo_set_id: p3.id, public_id: 'seed/mountains/m3' })
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179980/seed/mountains/m4.jpg', ord: 4,
  photo_set_id: p3.id, public_id: 'seed/mountains/m4' })
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179947/seed/mountains/m5.jpg', ord: 5,
  photo_set_id: p3.id, public_id: 'seed/mountains/m5' })
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179965/seed/mountains/m6.jpg', ord: 6,
  photo_set_id: p3.id, public_id: 'seed/mountains/m6' })
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179963/seed/mountains/m7.jpg', ord: 7,
  photo_set_id: p3.id, public_id: 'seed/mountains/m7' })
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179956/seed/mountains/m9.jpg', ord: 8,
  photo_set_id: p3.id, public_id: 'seed/mountains/m9' })
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179951/seed/mountains/m8.jpg', ord: 9,
  photo_set_id: p3.id, public_id: 'seed/mountains/m8' })
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179951/seed/mountains/m10.jpg', ord: 9,
  photo_set_id: p3.id, public_id: 'seed/mountains/m10' })
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179951/seed/mountains/m11.jpg', ord: 9,
  photo_set_id: p3.id, public_id: 'seed/mountains/m11' })
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179951/seed/mountains/m12.jpg', ord: 9,
  photo_set_id: p3.id, public_id: 'seed/mountains/m12' })

cp3 = Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179925/seed/animals/a1.jpg', ord: 1,
  photo_set_id: p4.id, public_id: 'seed/animals/a1'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179968/seed/animals/a2.jpg', ord: 2,
  photo_set_id: p4.id, public_id: 'seed/animals/a2'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179964/seed/animals/a3.jpg', ord: 3,
  photo_set_id: p4.id, public_id: 'seed/animals/a3'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179980/seed/animals/a4.jpg', ord: 4,
  photo_set_id: p4.id, public_id: 'seed/animals/a4'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179947/seed/animals/a5.jpg', ord: 5,
  photo_set_id: p4.id, public_id: 'seed/animals/a5'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179965/seed/animals/a6.jpg', ord: 6,
  photo_set_id: p4.id, public_id: 'seed/animals/a6'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179963/seed/animals/a7.jpg', ord: 7,
  photo_set_id: p4.id, public_id: 'seed/animals/a7'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179956/seed/animals/a9.jpg', ord: 8,
  photo_set_id: p4.id, public_id: 'seed/animals/a9'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179951/seed/animals/a8.jpg', ord: 9,
  photo_set_id: p4.id, public_id: 'seed/animals/a8'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179951/seed/animals/a10.jpg', ord: 9,
  photo_set_id: p4.id, public_id: 'seed/animals/a10'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179951/seed/animals/a11.jpg', ord: 9,
  photo_set_id: p4.id, public_id: 'seed/animals/a11'})


Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179925/seed/woods/f1.jpg', ord: 1,
  photo_set_id: p5.id, public_id: 'seed/woods/f1'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179968/seed/woods/f2.jpg', ord: 2,
  photo_set_id: p5.id, public_id: 'seed/woods/f2'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179964/seed/woods/f3.jpg', ord: 3,
  photo_set_id: p5.id, public_id: 'seed/woods/f3'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179980/seed/woods/f4.jpg', ord: 4,
  photo_set_id: p5.id, public_id: 'seed/woods/f4'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179947/seed/woods/f5.jpg', ord: 5,
  photo_set_id: p5.id, public_id: 'seed/woods/f5'})
cp4 = Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179965/seed/woods/f6.jpg', ord: 6,
  photo_set_id: p5.id, public_id: 'seed/woods/f6'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179963/seed/woods/f7.jpg', ord: 7,
  photo_set_id: p5.id, public_id: 'seed/woods/f7'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179956/seed/woods/f9.jpg', ord: 8,
  photo_set_id: p5.id, public_id: 'seed/woods/f9'})
Photo.create!({image_url: 'http://res.cloudinary.com/de79besd8/image/upload/v1473179951/seed/woods/f8.jpg', ord: 9,
  photo_set_id: p5.id, public_id: 'seed/woods/f8'})

a1.cover_photo_id = cp1.id
a2.cover_photo_id = cp2.id
a3.cover_photo_id = cp3.id
a4.cover_photo_id = cp4.id

a1.save
a2.save
a3.save
a4.save



# a3 = Album.create!({title: 'Mountains', owner_id: u1.id, event_date: '10/12/2012'})
# p3 = PhotoSet.create!({title: 'Plants', album_id: 2, ord: 1})
