json.array! @results.keys do |snack|
  json.partial! 'api/snacks/snack', snack: snack
  json.relevance @results[snack]
end
