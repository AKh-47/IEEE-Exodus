const balance = document.getElementById("balance");
const cardCartButtons = document.querySelectorAll(".cart-btn");
const cartNum = document.getElementById("cart-num");

const cartArray = [];

cardCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const data = cardNodeParser(e.target.parentElement);
    const check = addItem(data);
    if (check) {
      cartNum.innerHTML = cartArray.length;
    }
  });
});

const cardNodeParser = (card) => {
  return [
    card.parentElement.children[1].innerHTML,
    card.parentElement.children[2].innerHTML,
    card.parentElement.children[0].getAttribute("src"),
  ];
};

const addItem = ([name, price, image]) => {
  if (balance.innerHTML < price) {
    balance.style.color = "orangered";
    return;
  } else {
    balance.style.color = "black";
  }

  balance.innerHTML = balance.innerHTML - price;

  cartArray.push(ClassItem(name, price, image));
  return true;
};

function ClassItem(name, price, image) {
  return `<div>
      ${name}
      </div>`;
}

// for (i = 0; i < 20; i++) {
//   balance.innerHTML--;
//   //wait for 200ms
//   setInterval(() => balance.innerHTML--, 200);
// }

// const decreaseBalance = (num) => {
//   const int = setInterval(() => balance.innerHTML--, 100);
//   if (balance.innerHTML === num) {
//     clearInterval(int);
//   }
// };

// decreaseBalance(100);
