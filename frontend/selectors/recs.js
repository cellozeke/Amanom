export const recent = state => {
  if (state.entities.recs === null) return null
  return state.entities.recs.recent
}

export const popular = state => {
  if (state.entities.recs === null) return null
  return state.entities.recs.popular
}

export const suggested = state => {
  if (state.entities.recs === null) return null
  return state.entities.recs.suggested
}
