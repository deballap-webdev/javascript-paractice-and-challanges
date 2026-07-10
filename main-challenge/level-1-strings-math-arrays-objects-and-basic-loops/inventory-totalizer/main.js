const inventory = [
  { title: "The Hobit", genre: "Fantasy", stock: 12 },
  { title: "Dune", genre: "Sci-Fi", stock: 8 },
  { title: "A Game of Thrones", genre: "Fantasy", stock: 15 },
  { title: "To Kill a Mockingbird", genre: "Classic", stock: 5 },
  { title: "Neuromancer", genre: "Sci-Fi", stock: 10 },
  { title: "The Great Gatsby", genre: "Classic", stock: 7 },
];

const noOfBooksInInventory = (inventory) => {
  return inventory.reduce((sum, book) => {
    return sum + book.stock;
  }, 0);
};

console.log(noOfBooksInInventory(inventory));
