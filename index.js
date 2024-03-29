// there isn't a huge need for javascript yet, but this is a really basic demo of accessing the form data when it is submitted. Ideally we would do more with this data.

const cname = document.getElementById("newsletter1");
const email = document.getElementById("newsletter2");
const phone = document.getElementById("newsletter3");

function emailSignUp (name, email, phone) {
    let obj = {
        name: name.value,
        email: email.value,
        phone: phone.value
    }
    console.log(obj);
    alert(`Thanks ${obj.name}, you will now receive exclusive offers!`);
}

const service = document.getElementById("service-selected");
const dropdownItem = document.getElementsByClassName("dropdown-item");

for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener("click", () => {
        console.log(dropdownItem[i].textContent);
        service.value = dropdownItem[i].textContent;
    });
}

const first= document.getElementById("firstName");
console.log(first.value);
function bookAppointment (name) {
    let customerInfo= {
        firstName: name.value,
        service: service.value,
    }
    console.log(customerInfo);
    alert(`Thank you ${customerInfo.firstName}, a specialist will be in touch to finalize your appointment for ${customerInfo.service}!`);
}
