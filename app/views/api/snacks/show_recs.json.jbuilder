json.recent @recent.each do |snack|
  json.partial! 'api/snacks/snack', snack: snack
end

json.popular @popular.each do |snack|
  json.partial! 'api/snacks/snack', snack: snack
end

json.suggested @suggested.each do |snack|
  json.partial! 'api/snacks/snack', snack: snack
end
