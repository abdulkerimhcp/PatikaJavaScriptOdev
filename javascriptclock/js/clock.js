let myName = document.querySelector("#myName");
let myClock = document.querySelector("#myClock");
let userName = prompt("Lütfen İsim giriniz");

if (userName) {
  myName.innerHTML = userName;
}

setInterval(function showTime() {
  const date = new Date();
  myClock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);
