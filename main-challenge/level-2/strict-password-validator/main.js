"use strict";
const passwordValidator = (password) => {
  if (!hasMinLength(password, 8)) {
    invalidPassword("Please enter a password at least 8 characters long");
  }
  if (includesSpaces(password)) {
    invalidPassword("Please enter a password without spaces");
  }

  if (!hasNumber(password)) {
    invalidPassword("Please enter a password with at least one number");
  }

  return password;
};

const hasMinLength = (item, length) => {
  return item.length >= length ? true : false;
};

const includesSpaces = (item) => {
  return item.includes(" ") ? true : false;
};

const hasNumber = (item) => {
  return item.split("").some((char) => {
    return !Number.isNaN(Number(char));
  });
};

const invalidPassword = (message) => {
  throw new PasswordError(message);
};

class PasswordError extends Error {
  constructor(message) {
    super(message);
    this.name = "Invalid Password Error";
  }
}

try {
  passwordValidator("efjdhe2");
  console.log("Password is valid");
} catch (err) {
  console.error(err);
}
