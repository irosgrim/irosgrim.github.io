const allBtn = document.getElementById('productAll');
const vegetablesBtn = document.getElementById('productVegetables');
const fruitsBtn = document.getElementById('productFruits');
const meatBtn = document.getElementById('productMeat');
const pastaBtn = document.getElementById('productPasta');
const spiceBtn = document.getElementById('productSpice');

let listOfProducts = document.getElementById('productsContainer');

function template(picture, name, price, currency, unit, measure, file) {
  return `
    <div class="productContainer">
    <img src="${picture}"
         alt="slush"
         class="featured-img"
    />
    <div class="product-info">
      <div class="product-name">
        <p>${name}</p>
        <p class="product-price thick">${price} ${currency} / ${unit}${measure}</p>
      </div>
    <div class="product-amount">
      <input type="number"
             min="0"
             max="10"
             autocomplete="off"
             aria-label="amount field"
             data-name="${name}"
             data-file="${file}"
      />
      <button id="addProductToCart"><img src="imgs/check-icon.svg" alt="check" /></button>
    </div>
  </div>
</div>`;
}

window.onload = function() {
  allProducts();
};

allBtn.addEventListener('click', function() {
  allProducts();
});

vegetablesBtn.addEventListener('click', function() {
  fetch(`./db/vegetables.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      listOfProducts.innerHTML = '';
      data.vegetables.forEach(element => {
        listOfProducts.innerHTML += template(
          element.pic,
          element.name,
          element.price,
          element.currency,
          element.unit,
          element.measure,
          'vegetables'
        );
      });
    });
});

fruitsBtn.addEventListener('click', function() {
  fetch(`./db/fruits.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      listOfProducts.innerHTML = '';
      data.fruits.forEach(element => {
        listOfProducts.innerHTML += template(
          element.pic,
          element.name,
          element.price,
          element.currency,
          element.unit,
          element.measure,
          'fruits'
        );
      });
    });
});

meatBtn.addEventListener('click', function() {
  fetch(`./db/meat.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      listOfProducts.innerHTML = '';
      data.meat.forEach(element => {
        listOfProducts.innerHTML += template(
          element.pic,
          element.name,
          element.price,
          element.currency,
          element.unit,
          element.measure,
          'meat'
        );
      });
    });
});

pastaBtn.addEventListener('click', function() {
  fetch(`./db/pasta.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      listOfProducts.innerHTML = '';
      data.pasta.forEach(element => {
        listOfProducts.innerHTML += template(
          element.pic,
          element.name,
          element.price,
          element.currency,
          element.unit,
          element.measure,
          'pasta'
        );
      });
    });
});

spiceBtn.addEventListener('click', function() {
  fetch(`./db/spice.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      listOfProducts.innerHTML = '';
      data.spice.forEach(element => {
        listOfProducts.innerHTML += template(
          element.pic,
          element.name,
          element.price,
          element.currency,
          element.unit,
          element.measure,
          'spice'
        );
      });
    });
});

function allProducts() {
  fetch(`./db/all.json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      listOfProducts.innerHTML = '';
      let arr = ['vegetables', 'fruits', 'meat', 'pasta', 'spice'];
      listOfProducts.innerHTML = '';
      arr.forEach(prod => {
        data[prod].forEach(element => {
          listOfProducts.innerHTML += template(
            element.pic,
            element.name,
            element.price,
            element.currency,
            element.unit,
            element.measure,
            prod
          );
        });
      });
    });
}
