// search.js
function setupSearch() {
  const input = document.getElementById('search-text');

  let result = document.getElementById('search-result');
  if (!result) {
    result = document.createElement('div');
    result.id = 'search-result';
    result.className = 'product-container';
    result.style.display = 'none';
    document.getElementById('product-section').appendChild(result);
  }

  input.addEventListener('input', function () {
    const keyword = this.value.toLowerCase().trim();
    result.innerHTML = '';

    const products = document.querySelectorAll('#product-section .product');
    const headers = document.querySelectorAll('#product-section .header');
    const containers = document.querySelectorAll('#product-section .product-container');

    if (keyword === '') {
      result.style.display = 'none';
      headers.forEach(h => h.style.display = 'flex');
      containers.forEach(c => c.style.display = 'flex');
      return;
    }

    let found = 0;
    products.forEach(product => {
      const title = product.querySelector('.product-title');
      if (title && title.textContent.toLowerCase().includes(keyword)) {
        const clone = product.cloneNode(true);
        result.appendChild(clone);
        found++;
      }
    });

    if (found > 0) {
      result.style.display = 'flex';
    } else {
      result.innerHTML = '<p>Không tìm thấy sản phẩm nào.</p>';
      result.style.display = 'block';
    }

    headers.forEach(h => h.style.display = 'none');
    containers.forEach(c => c.style.display = 'none');
  });
}
