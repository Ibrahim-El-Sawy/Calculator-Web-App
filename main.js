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
            if (inputScreen.textContent.length != 21 && inputScreen.textContent.length < 21) {
                if (inputScreen.textContent[inputScreen.textContent.length - 1] != this.textContent && char.includes(inputScreen.textContent[inputScreen.textContent.length - 1]) == false) {
                    var text = document.createTextNode(`${this.textContent}`)
                    inputScreen.appendChild(text);
                }
            }

        } else {
            if (inputScreen.textContent.length != 21 && inputScreen.textContent.length < 21) {
                var text = document.createTextNode(`${this.textContent}`);
                inputScreen.appendChild(text);
            }
        }
    }
}


var delet = document.querySelector("#delete");
var eqaul = document.querySelector("#equal");

eqaul.onclick = result;
delet.onclick = DeletAll;

function result() {
    removeElementOutput()
    var d = document.createTextNode(`${theOperation()}`);
    outputScreen.appendChild(d);
}

function removeElementOutput() {
    outputScreen.textContent = "";
}

function DeletAll() {
    inputScreen.textContent = "";
    outputScreen.textContent = "";
}


function theOperation() {
    return eval(inputScreen.textContent);
}
inputScreen.onkeypress = function keyEqaultheOperation(event) {
    if (event.keyCode === 61) {
        result()
    }
}