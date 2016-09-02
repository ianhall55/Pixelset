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

PhotoSet.create!({title: 'Koh Phangan', album_id: 1, ord: 1})
PhotoSet.create!({title: 'Koh Lanta', album_id: 1, ord: 2})
PhotoSet.create!({title: 'Monteverde', album_id: 2, ord: 1})
PhotoSet.create!({title: 'Chirripo', album_id: 2, ord: 2})
