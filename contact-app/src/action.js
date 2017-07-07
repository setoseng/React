export function addContact (id, data) {
  return {
    type: 'ADD_CONTACT',
    id: id,
    data: data
  }
}
