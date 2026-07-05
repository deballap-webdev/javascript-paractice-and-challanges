class Book {
  #readProgress = 0;

  constructor(title = "Unknown", author = "Unknown author", pages) {
    this._title = title;
    this._author = author;

    if (!Number.isNaN(Number(pages))) {
      this._pages = pages;
    } else {
      throw new customError(
        `invalid page parameter you entered '${pages}' pls enter a number`,
      );
    }
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

  readPage() {
    if (this.#readProgress < this._pages) {
      this.#readProgress++;
    }
  }
}

export default Book;
