"use strict"


//BOOKS REDUCERS
export function booksReducers(state={
  books:[{
    id: 1,
    title: 'this is book title',
    description: 'this is book description',
    price: 33.33
  },
  {
    id: 2,
    title: 'this is second book title',
    description: 'this is second book description',
    price: 50

  }]
}, action){
  switch(action.type){
    case "GET_BOOK":
    return {...state, books:[...state.books]};
    break;
    case "POST_BOOK":
    let books = state.books.concat(action.payload);
    return {books};
    break;
    case "DELETE_BOOK":
    // Create a copy of the current array of books
    const currentBookToDelete = [...state.books]
    // Determine at which index in books array is the book to be deleted
    const indexToDelete = currentBookToDelete.findIndex(
      function(book){
        return book.id === action.payload.id;
      }
    )
    //use slice to remove the book at the specified index
    return {books: [...currentBookToDelete.slice(0, indexToDelete),
    ...currentBookToDelete.slice(indexToDelete + 1)]}
    break;

    case "UPDATE_BOOK":
    //CREATE A COPY OF THE CURRENT ARRAY OF BOOKS
    const currentBookToUpdate = [...state.books]
    // DETERMINE AT WHICH INDEX IN BOOKS ARRAY IS THE BOOK TO BE deleted
    const indexToUpdate = currentBookToUpdate.findIndex(
      function(book){
        return book.id === action.payload.id;
      }
    )
    // Create a new book object with the new values and with the same array index of the item we want to replace.
    // To achieve this we will use ...spread but we could use concat method too
    const newBookToUpdate = {
      ...currentBookToUpdate[indexToUpdate],
      title: action.payload.title
    }
    // This log has the purpose to show how newBookToUpdate looks like
    console.log("What is it newBookToUpdate", newBookToUpdate);
    return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
    ... currentBookToUpdate.slice(indexToUpdate+1)]}
    break;
  }
  return state;
}
