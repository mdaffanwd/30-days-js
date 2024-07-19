// --> Activity 1: Object Creation and Access
// task 1:
const book = {
  title: "this code",
  author: "Affan",
  year: 2023,
  // task 3:
  displayInfo: function () {
    console.log(this);
    return `the book's title is '${this.title}' and the author of this book is '${this.author}'`;
  },
  // task 4
  updateYear: function (updatedYear) {
    this.year = updatedYear;
  },
  // task 7;
  usingThis: function () {
    return `the book's title is '${this.title}' and the year of this published in is '${this.year}'`;
  },
};
// console.log(book)
// task 2:
// console.log(`Title of the book: ${book.title} by the Author: ${book.author}`)

// --> Activity 2: Object Methods
// task 3:
// console.log(book.displayInfo())
// task 4:
book.updateYear(2024);
// console.log(book)

// --> Activity 3: Nested Objects
// task 5
const library = {
  name: "City Library",
  location: "Downtown",
  books: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Novel",
      getDetails: function () {
        return `${this.title} by ${this.author}`;
      },
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Fiction",
      getDetails: function () {
        return `${this.title} by ${this.author}`;
      },
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genre: "Dystopian",
      getDetails: function () {
        return `${this.title} by ${this.author}`;
      },
    },
  ],
  getLibraryInfo: function () {
    return `Library: ${this.name}, Location: ${this.location}, Books: ${this.books.length}`;
  },
};

// console.log(library);

// library.books.forEach((book) => {
//   console.log(book.getDetails());
// });

// task 6
// console.log(`Library Name: ${library.name}`);
// library.books.forEach(book => {
//   console.log(`Book Title: ${book.title}`);
// });

// --> Activity 4: this Keyword
// task 7
// console.log(book.usingThis())

// --> Activity 5: Object Iteration.
// task 8
for (let property in book) {
  if (book.hasOwnProperty(property)) {
    // console.log(`${property}: ${book[property]}`);
  }
}

// task 9
const keys = Object.keys(book);
// console.log('Keys:', keys);

const values = Object.values(book);
// console.log('Values:', values);