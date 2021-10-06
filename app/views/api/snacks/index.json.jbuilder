json.array! @snacks do |snack|
  json.extract! snack, :id, :name
end
