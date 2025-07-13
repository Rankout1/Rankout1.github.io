function loadContent(page) {
  fetch(page)
    .then((res) => res.text())
    .then((html) => {
      // Chèn nội dung HTML vào khung sản phẩm
      document.getElementById('product-section').innerHTML = html;

      // Ẩn kết quả tìm kiếm nếu đang mở
      const searchResult = document.getElementById('search-result');
      if (searchResult) {
        searchResult.style.display = 'none';
        searchResult.innerHTML = '';
      }

      // Gọi lại setup tìm kiếm sau khi nội dung được load
      if (typeof setupSearch === 'function') {
        setupSearch();
      }
    })
    .catch((err) => {
      console.error('Lỗi khi tải trang:', err);
      document.getElementById('product-section').innerHTML = '<p style="color:red;">Không thể tải nội dung.</p>';
    });
}

// Mặc định load trang chính khi vào web
window.addEventListener('DOMContentLoaded', () => {
  loadContent('./trangchu.html');
});
