



import emailjs from '@emailjs/browser'
function sendemail(){

  var email=document.getElementById("email").value;
  var subject=document.getElementById("formsubject").value;
  var from_name=document.getElementById("fullname").value;
  var message=document.getElementById("message").value;

  var templateParams = {
    email: email,
    subject: formsubject,
    from_name: from_name,
    message: message
  };

  emailjs.send('service_l7nz5ed', 'template_4rp4qs9', templateParams)
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    window.alert("Sent successfully!");
    
  })  
}