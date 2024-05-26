//console greeting
var consoleMessage = "Welcome to my website!";
console.log(consoleMessage)

//Opening greeting
function getGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
    greeting = 'Good evening!';
    }
    else if (hourNow > 12) {
    greeting = 'Good afternoon!';
    }
    else if (hourNow > 0) {
    greeting = 'Good morning!';
    }
    else {
    greeting = 'Welcome!';
    }
    return greeting;
}

//alert
function sendAlert() {
    var alertMessage = "You will be opening your email. Are you sure?"
    alert(alertMessage)
}
var email = document.getElementById('email');
email.onclick = sendAlert;