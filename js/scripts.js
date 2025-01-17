document.getElementById("sucmsg").style.display="none";

function msddata() {
  var name = document.getElementById("fullname").Value;
  var email = document.getElementById("email").Value;
  var subject = document.getElementById("formsubject").Value;
  console.log("Name: " + name + "\nEmail: " + email + "\nsubject: " + subject + "\nMessage: " + message);
}
 
 var form = document.getElementById('sheetdb-form');
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        document.getElementById("sucmsg").style.display="block";
        document.getElementById("msgform").style.display="none";
        form.reset()

    });
  });
// dark mode
function myFunction() {
  var element = document.body;
  var heder1 = document.section,h2;
  element.classList.toggle("dark-mode");
  heder1.classList.toggle("hidding");
}

function myotp() {
  let otp = '';
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  console.log(otp)
  document.getElementById('refens').innerHTML = otp;
  document.getElementById("otpnumber").value = otp;
  document.getElementById("otpnumber2").value = otp;

}