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

  changeBalance(price);

  cartArray.push(CartItem(name, price, image));
  return true;
};

const changeBalance = (num, decrease = true) => {
  let i = 0;
  const interval = num > 100 ? (num >= 200 ? 15 : 20) : 25;

  const timer = setInterval(() => {
    if (decrease) {
      balance.innerHTML--;
    } else {
      balance.innerHTML++;
    }
    i++;
    if (i === num) clearInterval(timer);
  }, interval);
};

const displayCards = (games) => {
  cardArray.innerHTML = "";
  games.forEach((game) => {
    cardArray.innerHTML += Card(game);
  });

  const cardCartButtons = document.querySelectorAll(".fa-cart-plus");

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
};

const searchControlHandler = (e) => {
  search = e.target.value;

  if (search.toLowerCase() === "exodus" && !easterEggDone) {
    easterEggDone = true;
    changeBalance(500, (decrease = false));
    search = "";
    e.target.value = "";
  }

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  displayCards(filteredGames);
};
