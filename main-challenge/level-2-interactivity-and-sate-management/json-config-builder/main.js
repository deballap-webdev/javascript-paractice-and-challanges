const userProfile = {
  name: "Jeniffer May",
  gender: "Female",
  occupation: "Software Engineer",
  age: 26,
};

const stringifiedUserProfile = JSON.stringify(userProfile);

const parsedUserProfile = JSON.parse(stringifiedUserProfile);
const updatedUserProfile = (parsedUserProfile.age = 33);
const updatedStringUserProfile = JSON.stringify(parsedUserProfile);

console.log(updatedStringUserProfile);
