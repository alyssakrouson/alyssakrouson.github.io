//buttons
document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (page == 'index.html') {
        buttonColor = document.querySelectorAll('.navbar a');
        buttonColor[0].style.backgroundColor = 'white';
        buttonColor[0].style.color = 'black';
    }
    else if (page == 'projects.html') {
        buttonColor = document.querySelectorAll('.navbar a');
        buttonColor[1].style.backgroundColor = 'white';
        buttonColor[1].style.color = 'black';
    }
    else if (page == 'linguistics.html') {
        buttonColor = document.querySelectorAll('.navbar a');
        buttonColor[2].style.backgroundColor = 'white';
        buttonColor[2].style.color = 'black';
    }
    else if (page == 'contact.html') {
        buttonColor = document.querySelectorAll('.navbar a');
        buttonColor[3].style.backgroundColor = 'white';
        buttonColor[3].style.color = 'black';
    }
    
});
//console greeting
var consoleMessage = "Welcome to my Website!";
console.log(consoleMessage)


//alert
function sendAlert() {
    var alertMessage = "You will be opening your email. Are you sure?"
    alert(alertMessage)
}
var email = document.getElementById('email');
email.onclick = sendAlert;

