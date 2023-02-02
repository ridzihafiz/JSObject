// console.info('handle user file');

// Tangkap element form dengan id = user_form
let user_form = document.getElementById('user_form');

// Penampung data
let dataSiswa = [];

// Function yang akan selalu berjalan jika page reload
window.onload = function () {
  // kita akan check apakah ada localstorage dengan nama dataSiswa
  let storageData = localStorage.getItem('dataSiswa'); // String

  if (!storageData) {
    localStorage.setItem('dataSiswa', '[]');
    return;
  }

  dataSiswa = JSON.parse(storageData);
};

// Tambahkan event listenernya
user_form.addEventListener('submit', function (event) {
  // stop form dari reload
  event.preventDefault();

  // buat sebuah object sebagai wadah
  let userData = {
    username: '',
    email: '',
    phone: '',
    married: '',
    address: '',
  };

  // event.target. setelah target mengambil id dari HTML
  userData.username = event.target.username.value;
  userData.email = event.target.email.value;
  userData.phone = event.target.phone.value;
  userData.married = event.target.married.value;
  userData.address = event.target.address.value;

  // console.info(userData);

  // Push data ke array
  dataSiswa.push(userData);
  // console.info(dataSiswa);

  // Input data ke local storage
  // json.stringify ubah data ke string, karena local storage hanya bisa terima string
  localStorage.setItem('dataSiswa', JSON.stringify(dataSiswa));
});
