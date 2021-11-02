function formValidation(idForm) {
    const form = $(idForm);

    const message = [
        'Please enter your user name',
        'Please enter your password',
        'Your password must be at least 8 characters'
    ]
    const userName = form.querySelector('#userName');
    const passWord = form.querySelector('#Pass');
    // console.log(checkError(userName.value, 'username'));

    function findParrent(input, inputParent) {
        while (input.parentElement) {
            if (input.parentElement.matches(inputParent)) {
                return input.parentElement;
            }
            return input.parentElement;
        }
    }

    function renderError(input, msg) {
        if (msg !== undefined) {
            const messageBox = findParrent(input, '.form-group').querySelector('.errorMessage');
            messageBox.innerText = msg;
            messageBox.classList.remove('d-none');
        }
    }

    function inputOnWriting() {
        userName.addEventListener('input', (e) => {
            const messageBox = findParrent(userName, '.form-group').querySelector('.errorMessage');
            messageBox.classList.add('d-none');
        })
        passWord.addEventListener('input', (e) => {
            const messageBox = findParrent(passWord, '.form-group').querySelector('.errorMessage');
            messageBox.classList.add('d-none');
        })
    }

    function checkError(value, type) {
        if (value == '' && type == 'username') {
            return message[0];
        } else if (value == '' && type == 'password') {
            return message[1];
        } else if (value != '' && type == 'password' && value.length < 8) {
            return message[2];
        }
    }


    function start() {
        renderError(userName, checkError(userName.value, 'username'));
        renderError(passWord, checkError(passWord.value, 'password'))
        inputOnWriting();
    }


    start();

};