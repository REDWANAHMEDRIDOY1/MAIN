setInterval(() => {
  let time = new Date();
  let spanthee = document.getElementById("spanthree");
  let spanone = document.getElementById("spanone");
  spanthee.innerHTML =
    time.getDate() + " : " + time.getMonth() + " : " + time.getFullYear();
  spanone.innerHTML =
    time.getHours() -
    12 +
    " : " +
    time.getMinutes() +
    " : " +
    time.getSeconds();
}, 1000);
