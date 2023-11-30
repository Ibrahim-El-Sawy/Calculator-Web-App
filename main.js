// Screens 
var outputScreen = document.querySelector(".output-screen");
var inputScreen = document.querySelector("#input-screen");
var n = document.querySelector(".numbers");
// Get Option Numbers
var numbers = Array.from(document.querySelectorAll(".numbers option"));
var NumberOfOption = numbers.length;



buttonValue();

// Function to display The Numbers And Operators
function buttonValue() {

    numbers[0].onclick = responseButton;
    numbers[1].onclick = responseButton;
    numbers[2].onclick = responseButton;
    numbers[3].onclick = responseButton;
    numbers[4].onclick = responseButton;
    numbers[5].onclick = responseButton;
    numbers[6].onclick = responseButton;
    numbers[7].onclick = responseButton;
    numbers[8].onclick = responseButton;
    numbers[9].onclick = responseButton;


    numbers[10].onclick = responseButton;
    numbers[11].onclick = responseButton;
    numbers[12].onclick = responseButton;
    numbers[13].onclick = responseButton;
    numbers[14].onclick = responseButton;

    function responseButton() {
        let char = ["+", "-", "*", "/", "."];
        if (char.includes(this.textContent)) {
            if (inputScreen.textContent.length != 16 && inputScreen.textContent.length < 16) {
                if (inputScreen.textContent[inputScreen.textContent.length - 1] != this.textContent && char.includes(inputScreen.textContent[inputScreen.textContent.length - 1]) == false) {
                    var text = document.createTextNode(`${this.textContent}`)
                    inputScreen.appendChild(text);
                };
            }

        } else {
            if (inputScreen.textContent.length != 16 && inputScreen.textContent.length < 16) {
                var text = document.createTextNode(`${this.textContent}`);
                inputScreen.appendChild(text);
            }
        }
    };
};


var delet = document.querySelector("#delete");
var eqaul = document.querySelector("#equal");

eqaul.onclick = result;
delet.onclick = DeletAll;

function result() {
    removeElementOutput()
    var oparetion_reslt = document.createTextNode(`${theOperation()}`);
    outputScreen.appendChild(oparetion_reslt);
};

function removeElementOutput() {
    outputScreen.textContent = "";
};

function DeletAll() {
    inputScreen.textContent = "";
    outputScreen.textContent = "";
};


function theOperation() {
    return eval(inputScreen.textContent);
};

inputScreen.onkeypress = function keyEqaultheOperation(event) {
    if (inputScreen.textContent.length === 16) {
        inputScreen.setAttribute('contenteditable', 'false');
    };


    if (event.keyCode === 61 || event.keyCode === 13) {
        result();
        inputScreen.setAttribute('contenteditable', 'false');
        eqaul.classList.toggle("opacity");
        setTimeout(() => {
            eqaul.classList.toggle("opacity")
        }, 250);
    } else if (event.keyCode === 46) {
        numbers[numbers.length - 1].classList.toggle("opacity");
        setTimeout(() => {
            numbers[numbers.length - 1].classList.toggle("opacity")
        }, 250);
    } else if (event.keyCode === 45) {
        numbers[11].classList.toggle("opacity");
        setTimeout(() => {
            numbers[11].classList.toggle("opacity")
        }, 250);
    } else if (event.keyCode === 43) {
        numbers[10].classList.toggle("opacity");
        setTimeout(() => {
            numbers[10].classList.toggle("opacity")
        }, 250);
    } else if (event.keyCode === 47) {
        numbers[12].classList.toggle("opacity");
        setTimeout(() => {
            numbers[12].classList.toggle("opacity")
        }, 250);
    } else if (event.keyCode === 42) {
        numbers[13].classList.toggle("opacity");
        setTimeout(() => {
            numbers[13].classList.toggle("opacity")
        }, 250);
    } else if (event.keyCode === 48) {
        numbers[9].classList.toggle("opacity");
        setTimeout(() => {
            numbers[9].classList.toggle("opacity")
        }, 250);
    }



    for (let n = 0; n < 10; n++) {
        if (event.keyCode === (49 + n)) {
            numbers[n].classList.toggle("opacity");
            setTimeout(() => {
                numbers[n].classList.toggle("opacity")
            }, 250);
        }
    }


}


// return clickabale to input screen
inputScreen.onclick = function() {
    inputScreen.setAttribute('contenteditable', 'true');
};