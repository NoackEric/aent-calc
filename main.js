let x = 0
let result = document.getElementById("result")

function math() {
    x++
    console.log(x);
    result.innerHTML = x
}

function reset() {
    x = 0
    result.innerHTML = x
}
