const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Sửa từ "addEvenListener" thành "addEventListener"
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

// Sửa tên biến "loginloginBtn" thành "loginBtn"
// Nếu bạn muốn khi nhấn login thì xóa class 'active' để quay về trạng thái đăng nhập:
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
