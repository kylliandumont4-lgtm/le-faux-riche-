let cartCount = 0;

function addToCart(product) {
  cartCount++;
  document.querySelector('.cart').textContent = `Panier (${cartCount})`;
  alert(`${product} a été ajouté au panier.`);
}
