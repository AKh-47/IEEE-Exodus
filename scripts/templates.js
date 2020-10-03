const Card = ({ name, price, numOfPlayers, image }) => {
  return `<div class="games__card">
    <span class="games__border"></span>
    <span class="games__border"></span>
    <span class="games__border"></span>
    <span class="games__border"></span>
    <div class="games__card-bg" style="background: #21212155 url(../assets/Cards/${image}); background-blend-mode: multiply" ></div>
    <div class="games__card-bottom">
      <div class="games__card-name" data-text=${name}>${name}</div>
      <div class="games__card-btm">
        <!-- <i class="fas fa-user"> <span>3</span></i> -->
        <i class="fas fa-user-friends"> <span>${numOfPlayers}</span></i>
        <i class="fab fa-500px"> ${price}</i>
        <i class="fas fa-cart-plus"></i>
      </div>
    </div>
  </div>`;
};

const CartItem = (name, price, image) => {
  return `<div>
        ${name}
        </div>`;
};

// background: #21212166 url("../assets/Cards/bg1.jpeg");
