let userDetails = {
  username: 'gmoire',
  age: 27,
  marital: false,
};

// Merubah value dapa property object
userDetails.username = 'Ridzi';

// Menambahkan property
userDetails.address = 'Bogor';

// console.info(userDetails.username);
// Cara memanggil property tanpa TITIK (.)
// square bracket [] penting banget di backend
// console.info(userDetails['username']);

// object destructuring
let { username, age } = userDetails;

console.info(username, age);
// console.info(age);
