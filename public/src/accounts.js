function findAccountById(accounts, id) {
  let found;

  for(let account in accounts){
    const eachAccount = accounts[account];
   if(eachAccount.id===id) found=eachAccount;
  } 
 
  return found;
}

function sortAccountsByLastName(accounts) {

  return accounts.sort((lastA, lastB) => lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let found = 0;
  const {id} =account;

  books.forEach((book)=> book.borrows.forEach((bookId)=>{ if(bookId.id===id) found++; }));
  return found;
}

function getBooksPossessedByAccount(account, books, authors) {
  let searchId = account.id;

  const bookObject = books.reduce((result, book) => {
   book.borrows.forEach((bookId)=>{ if(bookId.id===searchId && !bookId.returned){  
     let authFound = authors.find((author)=>author.id===book.authorId);
     let newObj=book;
     newObj.author = authFound;
     result.push(newObj);} } ) 
      
  return result;
}, []);

  return bookObject;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
