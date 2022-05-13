function findAuthorById(authors, id) {

  return authors.find((author)=>author.id===id);
}

function findBookById(books, id) {

   return books.find((book)=>book.id===id);
}

function partitionBooksByBorrowedStatus(books) {


  const booksObj = [];
    let returnedBook=[];
    let notReturnedBook=[];
    books.forEach(( book) => {
      if(book.borrows.every((bookBrrw)=>bookBrrw.returned===true)){
         returnedBook.push(book);
      }else{
        notReturnedBook.push(book);
      }

});
    booksObj.push(notReturnedBook);
    booksObj.push(returnedBook);

  return booksObj;
}

function getBorrowersForBook(book, accounts) {

const {borrows} = book;
 const borrowersForBook =[];

 borrows.forEach((borrow)=>{
   let result;
   accounts.forEach((account) => 
    {if(borrow.id === account.id)result=account;});
   result["returned"]=borrow.returned;
   borrowersForBook.push(result);

 })

  if(borrowersForBook.length>10)
    borrowersForBook.length=10;

return borrowersForBook;

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
