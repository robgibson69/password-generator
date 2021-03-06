// SET UP THE VARIABLES THAT WILL BE USED
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";
var pass_char = "";
var password = "";

// SET UP VARIABLES FOR THE DOCUMENT ELEMENTS
// FOR SELECTION AND VALIDATION
var length = document.getElementById("length");
var includeNumbers = document.getElementById("numbers");
var includeSymbols = document.getElementById("symbols");
var btnGenerate = document.getElementById("generate-button");
var btnCopy = document.getElementById("copy");
var password = document.getElementById("password-text");


// EVENT LISTENER FOR GENERATE PASSWORD BUTTON
btnGenerate.addEventListener('click', function() {
    password.value = ""
    setPasswordText();
})

// PUT TOGETHER SELECTED PASSWORD_          *** Googled "javascript condidtional expressions"_
// PASSWORD CHOICES FROM USER AND           *** for shorter ways to do if/then.
// CALL THE GENERATE PASSWORD FUNCTION               
function setPasswordText() {
    pass_char = alpha;
    includeNumbers.checked ? (pass_char += numbers): "";
    includeSymbols.checked ? (pass_char += symbols): "";
    password.value = generatePassword(length.value, pass_char);
}

// GENERATE PASSWORD BASED ON SELECTED CHARACTERS
function generatePassword(length, characters) {
    
    for (var i = 0; i < length; i++) {
    password.value += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password.value;
}

//COPY PASSWORD TO CLIPBOARD IF PASSWORD FIELD IS NOT BLANK
btnCopy.addEventListener("click", function() {
    if (password.value !== "") {
        password.select();
        password.setSelectionRange(0, 99999); //for mobile
        navigator.clipboard.writeText(password.value);
        alert("Copied the password " + password.value);
    }
 }
)

//VALIDATE LENGTH INPUT
length.addEventListener("keyup", function() {
    let isnum = /^\d+$/.test(length.value);

    if (isnum === false || length.value < 8 || length.value > 128) {
        length.style.backgroundColor="#FF0000";
        document.getElementById("generate-button").disabled = true;
    }
    else {
        length.style.backgroundColor="#FFF";
        document.getElementById("generate-button").disabled = false;
    }
 }
)


