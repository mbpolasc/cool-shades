var redShades = {
  title: 'Red',
  subtitle: 'Rock-N-Stroll',
  img: 'images/product-red.jpg',
  price: 99
};
var greenShades = {
  title: 'Green',
  subtitle: 'Rock-N-Stroll',
  img: 'images/product-green.jpg',
  price: 99
};
var blueShades = {
  title: 'Blue',
  subtitle: 'Rock-N-Stroll',
  img: 'images/product-blue.jpg',
  price: 99
};
var blackShades = {
  title: 'Black',
  subtitle: 'Rock-N-Stroll',
  img: 'images/product-black.jpg',
  price: 99
};

var shades = [redShades, greenShades, blueShades, blackShades];


function mobileProducts(product) {
  return `
  <div class="col peppers-product text-center">
    <image class="img-fluid" src="${product.img}" alt=Peppers Rock-N-Stroll Red">
    <p class="product-title">${product.subtitle}</p>
    <h3>${product.title}</h3>
    <div class="circles">
      <div class="circle red"></div>
      <div class="circle green"></div>
      <div class="circle blue"></div>
      <div class="circle black"></div>
    </div>
    <p class="product-price">$${product.price}</p>
    <div class="product-cta-container">
      <a href="#" class="btn btn-danger btn-lg">Add to Cart</a>
    </div>
  </div>
  `;
}

$(document).ready(function() {
  $('#mobile-products').html(mobileProducts(blueShades));
});
