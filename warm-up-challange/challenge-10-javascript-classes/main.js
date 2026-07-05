class customError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
    this.message = message;
    this.stack = `${name}: ${message}`;
  }
}

class book {
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

const myBook = new book("The Game", "Charles Pope", 92);
myBook.setReadProgress(10);
myBook.readPage();
console.log(myBook.getReadProgress());

class AudioBook extends book {
  #narrator = "male";
  constructor(title, author, pages = 0, narrator = "male") {
    super(title, author, pages);
    const allowed = ["male", "female"];
    if (allowed.includes(narrator.trim().toLowerCase())) {
      this.#narrator = narrator.trim().toLowerCase();
    } else {
      throw new Error(
        `invalid narrator parameter you entered '${narrator}' pls enter 'male' or 'female'`,
      );
    }
  }

  aboutBook() {
    console.log(
      `this audio book is titled "${this._title}" by ${this._author} and it has ${this._pages} pages with a ${this.#narrator} narrator voice\nHappy Reading!`,
    );
  }

  readPage() {
    return "Listening to an audio book instead of reading!";
  }
}

try {
  const myAudioBook = new AudioBook("New World", "Miles Walker", 73);
  myAudioBook.aboutBook();
  const newAudioBook = new AudioBook(28, "John Doe", "jsj sj");
  newAudioBook.aboutBook();
} catch (err) {
  console.log(err);
} finally {
  console.log(
    `The error was either caught or the try block code ran succesfully!`,
  );
}
