// ! Night mode toggle
let toggle = document.querySelector('.toggle')
let daynight = document.querySelector('.daynight')
let elements = document.querySelectorAll('*');

daynight.addEventListener('click', () => {
    toggle.classList.toggle('moved');
    elements.forEach((e) => {
        e.classList.toggle('night');
    });
    if (toggle.classList.contains('night')) {
        localStorage.setItem('Mode', 'Night');
    } else {
        localStorage.setItem('Mode', 'Day');
    }
});

// ? Initial page load
let mode = localStorage.getItem('Mode');

if (mode == 'Night') {
    elements.forEach((e) => {
        e.classList.add('night');
    });
    toggle.classList.add('moved');
};

// ! Burger menu and sidebar
let burger = document.querySelector(".burger");
let sidebar = document.querySelector(".sidebar");
let close = document.querySelector("#close");

burger.addEventListener("click", () => {
    sidebar.classList.toggle('show');
    burger.classList.toggle('hidden');
})

window.addEventListener('click', (e) => {
    if ((!sidebar.contains(e.target) && !burger.contains(e.target)) || close.contains(e.target)) {
        sidebar.classList.remove('show');
        burger.classList.remove('hidden');
    }
})