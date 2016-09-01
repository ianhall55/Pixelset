# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not null
last_name       | string    | not null
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
owner_id    | integer   | not null, foreign key (references users), indexed
event_date  | date      | not null

## photo_sets
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
album_id    | integer   | not null, foreign key (references albums), indexed
title       | string    | not null
ord         | integer   | not null

## photo_set_taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos), indexed
photo_set_id| integer   | not null, foreign key (references photoSets), indexed
ord         | integer   | not null

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo       | bytea     | not null
