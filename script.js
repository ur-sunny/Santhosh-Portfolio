// script.js

document.addEventListener('DOMContentLoaded', () => {
  console.log("Website loaded!");

  // Example: product click alert (demo purpose)
  const products = document.querySelectorAll('.product-card');
  products.forEach(card => {
    card.addEventListener('click', () => {
      alert("Product clicked! Add to cart functionality coming soon...");
    });
  });
});
