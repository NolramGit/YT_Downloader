fetch('https://nolram-ytd.onrender.com/service')
  .then(response => response.text())
  .then(data => console.log(data));