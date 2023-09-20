const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');

navToggle.addEventListener("click", () => {
    nav.classList.toggle('open')
}
)

function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_2i4zq24", "template_2dpnji2", params).then(function (res) {
        alert("Success! " + res.status);
    })
}
