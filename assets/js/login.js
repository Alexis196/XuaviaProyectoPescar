const login = document.getElementById('login');
const loginModal = document.getElementById('login-modal');
const closeModal = document.querySelector('.close-modal');
const formLogin = document.getElementById('form-login');
const logout = document.getElementById('logout');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');

const setLoginButtonState = () => {
    const token = localStorage.getItem('token');
    if (token) {
        login.classList.replace('btn-login', 'no-login');
        logout.classList.replace('no-logout', 'logout');
        nav1.classList.replace('no-nav-item', 'nav-item');
        nav2.classList.replace('no-nav-item', 'nav-item');
    } else {
        login.classList.replace('no-login', 'btn-login');
        nav1.classList.replace('nav-item', 'no-nav-item');
        nav2.classList.replace('nav-item', 'no-nav-item');
    }
};

const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    const token = Math.random().toString(36).slice(-8);

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('token', token);

    e.target.reset();
    loginModal.classList.remove('show-modal');
    login.classList.replace('btn-login', 'no-login');
    logout.classList.replace('no-logout', 'logout');
    alert('Inicio de sesión exitoso');

    setLoginButtonState(); 
};

const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    login.classList.replace('no-login', 'btn-login');
    logout.classList.replace('logout', 'no-logout');
    alert('La sesión ha finalizado');
    
    setLoginButtonState(); 
};

setLoginButtonState();

login.addEventListener('click', () => {
    loginModal.classList.add('show-modal');
});

closeModal.addEventListener('click', () => {
    loginModal.classList.remove('show-modal');
});

formLogin.addEventListener('submit', handleLogin);

logout.addEventListener('click', handleLogout);