let input = document.querySelector("input")
function cals(elementval) {
    input.value += elementval;
}
function calsclear() {
    input.value = ""
}

function calsdel() {
    input.value = input.value.slice(0,input.value.length-1)
}

function calseql() {
    input.value = eval(input.value);
}