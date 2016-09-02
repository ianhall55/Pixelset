@photo_sets.each do |photoSet|
  json.set! photoSet.id do
    json.partial! "photoSet", photoSet: photoSet
  end
end
