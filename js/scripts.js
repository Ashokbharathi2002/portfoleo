document.getElementById("sucmsg").style.display="none";
 
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
