const balance = document.getElementById("balance");
const cardCartButtons = document.querySelectorAll(".fa-cart-plus");
const cartNum = document.getElementById("cart-num");

const cartArray = [];

cardCartButtons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    const data = cardNodeParser(e.target.parentElement);
    data.push(`bg${index + 1}.jpg`);
    const check = addItem(data);
    if (check) {
      cartNum.innerHTML = cartArray.length;
    }
  });
});

const cardNodeParser = (card) => {
  return [
    card.parentElement.children[0].getAttribute("data-text"),
    parseInt(card.children[1].innerText),
  ];
};

const addItem = ([name, price, image]) => {
  if (balance.innerHTML < price) {
    balance.style.color = "orangered";
    return;
  } else {
    balance.style.color = "#fefefe";
  }

  decreaseBalance(price);

  // balance.innerHTML = balance.innerHTML - price;

  cartArray.push(ClassItem(name, price, image));
  return true;
};

const ClassItem = (name, price, image) => {
  return `<div>
      ${name}
      </div>`;
};

const decreaseBalance = (num) => {
  let i = 0;
  const interval = num / 4 > 30 ? 30 : num / 4;
  const timer = setInterval(() => {
    balance.innerHTML--;
    i++;
    console.log(i);
    if (i === num) clearInterval(timer);
  }, interval);
};
