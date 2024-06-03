function bookFilter(booksList, filterKey, year){
    let newBookArr = [];
    for (const book of booksList) {
        for (const key in book) { 
            if(key === filterKey && Number(book[key] > year)) newBookArr.push(book);
        }
    }

    return newBookArr;
};

const books = [
    { 
        author: 'J.K. Rowling', 
        title: 'Harry Potter and the Sorcerer\'s Stone', 
        year: 1997 
    },
    { 
        author: 'George R.R. Martin', 
        title: 'A Game of Thrones', 
        year: 1996 
    },
    { 
        author: 'J.R.R. Tolkien', 
        title: 'The Fellowship of the Ring', 
        year: 1954 
    },
    { 
        author: 'Dan Brown', 
        title: 'The Da Vinci Code', 
        year: 2003 }
];

console.log(`New books list: ${bookFilter(books, 'year', 2000)}`); 