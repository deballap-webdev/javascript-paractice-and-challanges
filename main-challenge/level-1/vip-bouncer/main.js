const guests = [
  { name: "Mason", age: 15 },
  { name: "Gorge", age: 17 },
  { name: "Anna", age: 18 },
  { name: "Jerry", age: 20 },
  { name: "Jerry", age: 16 },
  { name: "Ella", age: 19 },
  { name: "Lisa", age: 19 },
  { name: "Ricky", age: 21 },
  { name: "Edith", age: 16 },
  { name: "James", age: 23 },
];

const upToAgeGuests = (guests) => {
  return guests.filter((guest) => guest.age >= 18).map((guest) => guest.name);
};

console.log(upToAgeGuests(guests));
