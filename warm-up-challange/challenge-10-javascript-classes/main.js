class book {
  #readProgress = 0;

  constructor(title, author, pages) {
    this._title = title;
    this._author = author;
    this._pages = pages;
  }

  getReadProgress() {
    return this.#readProgress;
  }

  setReadProgress(bookReadProgress) {
    const readProgressToNum = Number(bookReadProgress);
    if (Number.isNaN(readProgressToNum)) {
      console.error("invalid data type, read progress is not a number");
    } else if (readProgressToNum < 0) {
      console.error("cannot set read progress to negative number");
    } else if (!Number.isInteger(readProgressToNum)) {
      console.error(
        "cannot set read progress to a float, must be a positive whole number",
      );
    } else if (readProgressToNum > this._pages) {
      console.error("read progress cannot be more than book's pages");
    } else {
      this.#readProgress = readProgressToNum;
    }
  }
}

const myBook = new book("The Game", "Charles Pope", 92);
myBook.setReadProgress(10);
console.log(myBook.getReadProgress());
