// Name Section

let nameInput = document.getElementById('nameInput');
nameInput.addEventListener('input', function () {
    if (!checkNameLength(nameInput.value)) {
        nameInput.nextElementSibling.classList.remove('d-none');
        nameInput.nextElementSibling.innerText = 'Name must be greated than 3 character';
    }
    else {
        nameInput.nextElementSibling.classList.add('d-none');
    }
    console.log(this.value)
})
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let nameInput = document.getElementById('nameInput');
    let isValid = true;
    if (!checkNameLength(nameInput.value)) {
        nameInput.nextElementSibling.classList.remove('d-none');
        nameInput.nextElementSibling.innerText = 'Name must be greated than 3 character';
        isValid = false;
    }
    else {
        nameInput.nextElementSibling.classList.add('d-none');
    }
})


//Surname Section
let surnameInput = document.getElementById('surNameInput');

surnameInput.addEventListener('input', function () {

    if (!checkSurNameLength(surnameInput.value)) {
        surnameInput.nextElementSibling.classList.remove('d-none');
        surnameInput.nextElementSibling.innerText = 'Surname must be greated than 5 character';
        isValid = false;
    }
    else {
        surnameInput.nextElementSibling.classList.add('d-none');
    }
    console.log(this.value)
})

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let surnameInput = document.getElementById('surNameInput');
    let isValid = true;

    if (!checkSurNameLength(surnameInput.value)) {
        surnameInput.nextElementSibling.classList.remove('d-none');
        surnameInput.nextElementSibling.innerText = 'Surname must be greated than 5 character';
        isValid = false;
    }
    else {
        surnameInput.nextElementSibling.classList.add('d-none');
    }

})

//Group Section

let groupInput = document.getElementById('groupInput');
groupInput.addEventListener('input', function () {
    if (!checkGroupLength(groupInput.value)) {
        groupInput.nextElementSibling.classList.remove('d-none');
        groupInput.nextElementSibling.innerText = 'Group must be less than 4 character';
    }
    else {
        groupInput.nextElementSibling.classList.add('d-none');
    }
    console.log(this.value)
})
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let groupInput = document.getElementById('groupInput');
    let isValid = true;
    if (!checkGroupLength(groupInput.value)) {
        groupInput.nextElementSibling.classList.remove('d-none');
        groupInput.nextElementSibling.innerText = 'Group must be less than 4 characters';
        isValid = false;
    }
    else {
        groupInput.nextElementSibling.classList.add('d-none');
    }






//Age Section

let ageInput = document.getElementById('ageInput');
if (!checkAge(ageInput.value)) {
    ageInput.nextElementSibling.classList.remove('d-none');
    ageInput.nextElementSibling.innerText = 'Age must be greater or equal 18!';
    isValid = false;
}
else {
    ageInput.nextElementSibling.classList.add('d-none')
}

if (isValid) {

    setTimeout(Create)
    setTimeout(sil, 3000)

    var litleRound = document.createElement("div");
    function Create() {
        var bodyy = document.querySelector("#body")
        console.log(bodyy.offsetWidth)

        litleRound.innerText = "Successfully saved!"
        litleRound.style.cssText = " position:absolute;width:200px;height:40px;background-color:rgb(120, 187, 20);border-radius:8px;color:white;text-align: center; padding:8px 0 ; box-shadow: 0px 0px 15px rgb(97, 93, 93);";
        litleRound.style.top = 10 + 'px';
        litleRound.style.left = (bodyy.offsetWidth - 300) + 'px';
        document.body.appendChild(litleRound);
    }

    function sil() {

        litleRound.style.display = "none";

    }

}

})

//Function
function checkNameLength(value) {
    if (value.length < 3) return false;
    else return true;
}

function checkSurNameLength(value) {
    if (value.length < 5) return false;
    else return true;
}
function checkGroupLength(value) {
    if (value.length >4) return false;
    else return true;
}

function checkAge(value) {
    if (value < 18) return false;
    else return true;
}






