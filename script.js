


const formValidate = () => {
    const emailValue = document.querySelector('#email').value;
    const nameValue = document.querySelector('#name').value;
    const titleValue = document.querySelector('#title').value;
    const invalid = document.querySelector('#invalid') 
    const emailFormat =/^\w +@[a - zA - Z_]+?\.[a - zA - Z]{ 2, 3 }$/;
    const nameFormat = /^[A-Za-z]{4,}[\s][a-zA-Z]{4,}$/;
    if (!emailFormat.test(emailValue)) {
        invalid.style.opacity = 1;
    }else{
        invalid.style.opacity = 0;
    }

    if (!nameFormat.test(nameValue)) {
        invalid.style.opacity = 1;
    } else {
        invalid.style.opacity = 0;
    }
};


document.querySelector('.button').addEventListener('click', formValidate)
