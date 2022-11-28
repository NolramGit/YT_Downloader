fetch('https://nolram-ytd.onrender.com')
  .then(response => response.text())
  .then(data => console.log(data));