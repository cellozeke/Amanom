json.array! @snacks do |snack|
  json.partial! 'api/snacks/snack', snack: snack
end
