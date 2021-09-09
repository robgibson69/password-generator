// SET UP THE VARIABLES THAT WILL BE USED
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

// SET UP VARIABLES FOR THE DOCUMENT ELEMENTS
// FOR SELECTION AND VALIDATION
var lenght = document.getElementById("length");
var includeNumbers = document.getElementById("numbers");
var includeSymbols = document.getElementById("symbols");
var btnGenerate = document.getElementById("generate-button");
var butCopy = document.getElementById("copy");
var password = document.getElementById("password-text");

// LET THE MAGIC HAPPEN
// GENERATE A PASSWORD
function setPasswordText() {
    password.value = alpha;
}


btnGenerate.addEventListener('click', function() {
    console.log("alpha contains " + alpha);
    setPasswordText();
})
