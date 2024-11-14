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

// ! Spider diagrams
// ? Techstack diagram
let techstack = document.querySelector('.techstack')
let langs = document.querySelectorAll('.lang')
let css = document.querySelector('.fa-css3-alt');
let html = document.querySelector('.fa-html5');
let js = document.querySelector('.fa-js');
let python = document.querySelector('.fa-python');
let db = document.querySelector('.fa-database');

let skills = document.querySelector('.skills')

techstack.addEventListener('click', () => {
    css.classList.add('cssposition');
    html.classList.add('htmlposition');
    js.classList.add('jsposition');
    python.classList.add('pythonposition');
    db.classList.add('sqlposition');
    techstack.classList.add('shadowed');
    skills.classList.add('vanished');
    langs.forEach((a) => {
        a.classList.add('solidify');
    })
})

window.addEventListener('click', (e) => {
    if (!techstack.contains(e.target)) {
        css.classList.remove('cssposition');
        html.classList.remove('htmlposition');
        js.classList.remove('jsposition');
        python.classList.remove('pythonposition');
        db.classList.remove('sqlposition');
        techstack.classList.remove('shadowed');
        skills.classList.remove('vanished');
        langs.forEach((a) => {
            a.classList.remove('solidify');
        })
    }
})

// ? Skills diagram
let skill = document.querySelectorAll('.skill')
let comms = document.querySelector('.comms');
let mgt = document.querySelector('.mgt');
let det = document.querySelector('.det');
let coll = document.querySelector('.coll');
let lrn = document.querySelector('.lrn');
let skillp = document.querySelectorAll('.skillp');

skills.addEventListener('click', () => {
    comms.classList.add('commsposition');
    mgt.classList.add('mgtposition');
    det.classList.add('detposition');
    coll.classList.add('collposition');
    lrn.classList.add('lrnposition');
    skills.classList.add('shadowed');
    techstack.classList.add('vanished');
    skill.forEach((a) => {
        a.classList.add('solidify');
    })
});

window.addEventListener('click', (e) => {
    if (!skills.contains(e.target)) {
        comms.classList.remove('commsposition');
        mgt.classList.remove('mgtposition');
        det.classList.remove('detposition');
        coll.classList.remove('collposition');
        lrn.classList.remove('lrnposition');
        skills.classList.remove('shadowed');
        techstack.classList.remove('vanished');
        skill.forEach((a) => {
            a.classList.remove('solidify');
        })
    }
})

// ? Making skill evidence paragraphs appear on click
skill.forEach((e) => {
    e.addEventListener('click', (t) => {
        if (t.currentTarget.lastElementChild.classList.contains('solidify')) {
            skillp.forEach((a) => {
                a.classList.remove('solidify');
            });
        } else {
            skillp.forEach((a) => {
                a.classList.remove('solidify');
            });
            t.currentTarget.lastElementChild.classList.add('solidify');
        }
    });
});