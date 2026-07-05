import * as Book from "./Book.js";
class customError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
    this.message = message;
    this.stack = `${name}: ${message}`;
  }
}

const myBook = new Book.default("The Game", "Charles Pope", 92);
myBook.setReadProgress(10);
myBook.readPage();
console.log(myBook.getReadProgress());

class AudioBook extends Book.default {
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

const myAudioBook = new AudioBook("New World", "Miles Walker", 73, "Female");
myAudioBook.aboutBook();

sessionStorage.setItem("audioBookStore", JSON.stringify(myAudioBook));
const audioBookSessionData = JSON.parse(
  sessionStorage.getItem("audioBookStore"),
);
console.log(audioBookSessionData);

localStorage.setItem("bookStore", JSON.stringify(myBook));
const bookLocalstoreData = JSON.parse(localStorage.getItem("bookStore"));
console.log(bookLocalstoreData);
