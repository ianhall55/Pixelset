json.set! @photo_set.id do
  json.partial! "photoSet", photoSet: @photo_set
end
