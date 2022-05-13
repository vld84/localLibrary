function getTotalBooksCount(books) {
 
const result = books.map((book) => book.name);
return result.length; 
}

function getTotalAccountsCount(accounts) {
 
  const result = accounts.map((account) => account.id);
  return result.length; 
}

function getBooksBorrowedCount(books) {
 let result = 0; 
 books.forEach(  (book)=> {
           book.borrows.forEach(
             (notReturned)=>{
             if(!notReturned.returned)result++; })});
  return result;
  

}

function getMostCommonGenres(books) {
    books.sort((bookA, bookB)=>bookA.genre.toLowerCase() > bookB.genre.toLowerCase() ? 1 : -1);
    let countArray =[];
    let count=1;
    for( let i = 0 ; i< books.length-1; i++) {
    if(books[i].genre===books[i+1].genre){
      count++;
    } else{
      countArray.push( { name: books[i].genre , count: count });
      count=1;
    }
      
     
  }
   countArray.sort((bookA, bookB)=>bookB.count-bookA.count);

return countArray;
}

function getMostPopularBooks(books) {
  
  books.sort((bookA, bookB)=>bookB.borrows.length-bookA.borrows.length);

  const mostPopularBooks = books.reduce((result, book) => {
  result.push({name:  book.title, count: book.borrows.length});
  return result;
}, []);
  if( mostPopularBooks.length>5)
    mostPopularBooks.length=5;

  return   mostPopularBooks;
}

function getMostPopularAuthors(books, authors) {

  
  const mostPopularAuthors = books.reduce((result, book) => {
    let found = result.find((nameExist) =>nameExist.name === book.authorId);
    if(found){ found.count+=book.borrows.length; 
    }else{
       let found =authors.find((nameExist) =>nameExist.id === book.authorId);
        let temp = found.name.first +" "+found.name.last;
      
       result.push({name: temp, count: book.borrows.length});
    }
 
  return result;
}, []);
     mostPopularAuthors.sort((bookAuthA, bookAuthB)=>bookAuthB.count-bookAuthA.count);
  if( mostPopularAuthors.length>5)
    mostPopularAuthors.length=5;
  return  mostPopularAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
