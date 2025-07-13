// loadProducts.js
fetch('./trangchu.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('product-section').innerHTML = html;
    setupSearch();
  });

  // loadProducts.js
fetch('./Phongkhach.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('product-section').innerHTML = html;
    setupSearch();
  });

