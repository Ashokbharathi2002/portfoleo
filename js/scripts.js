
function senddata(){
    var name = document.getElementById("fullname").value;
    document.getElementById("username").innerText=name;
    window.location.href ="send.html"
    window.opener("send.html")
}
senddata()