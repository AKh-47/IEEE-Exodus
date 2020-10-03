const balance = document.getElementById("balance");
const cartNum = document.getElementById("cart-num");
const cardArray = document.querySelector(".games__cards");
let easterEggDone = false;

const cartArray = [];

const searchBar = document.getElementById("search-bar");

let search = "";

displayCards(games);

searchBar.addEventListener("keyup", searchControlHandler);
