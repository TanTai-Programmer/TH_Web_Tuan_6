function appendValue(value) {
    document.getElementById("result").innerHTML += value;
}

function clearResult() {
    document.getElementById("result").innerHTML = "0";
}

function backspace() {
    var result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(0, result.length - 1);
}

function calculate() {
    var result = document.getElementById("result").innerHTML;
    var answer = eval(result);
    document.getElementById("result").innerHTML = answer;
}