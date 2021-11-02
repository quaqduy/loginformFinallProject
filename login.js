const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const managerLoginBtn = $('.managerLogin');
const employeeLoginBtn = $('.employeeLogin');
const formTitle = $('#FormLogin h1');
const navigationBox = $('.narvigationToForm');
const loginBox = $('.login');
const closeBtn = $('.closeBtn button');

const narvigationToForm = {
    text: [
        'manager login',
        'employee login'
    ],
    btnOnClick() {
        managerLoginBtn.addEventListener('click', (e) => {
            formTitle.innerText = narvigationToForm.text[0];
            navigationBox.classList.add('d-none');
            loginBox.classList.remove('d-none');

        })
        employeeLoginBtn.addEventListener('click', (e) => {
            formTitle.innerText = narvigationToForm.text[1];
            navigationBox.classList.add('d-none');
            loginBox.classList.remove('d-none');
        })
    },
    onClose() {
        closeBtn.onclick = (e) => {
            navigationBox.classList.remove('d-none');
            loginBox.classList.add('d-none');

        };
    },
    start() {
        this.btnOnClick();
        this.onClose();
    }
};

narvigationToForm.start();