export const sign_up = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
)

export const log_in = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
)

export const log_out = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)
