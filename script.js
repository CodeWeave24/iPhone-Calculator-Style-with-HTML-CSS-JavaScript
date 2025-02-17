function calculator(input) {
    let display = document.getElementById("inputDisplay");
    let result = document.getElementById("resultDisplay");

    if (input === "C") {
        display.innerHTML = "0";
        result.innerHTML = "";
    } else if (input === "+/-") {
        if (display.innerHTML === "0") return;
        if (display.innerHTML.startsWith("-")) {
            display.innerHTML = display.innerHTML.slice(1);
        } else {
            display.innerHTML = "-" + display.innerHTML;
        }
    } else if (input === "=") {
        try {
            let calculated = eval(display.innerHTML.replace(/×/g, "*").replace(/÷/g, "/"));
            result.innerHTML = calculated.toLocaleString("en-US");
        } catch (err) {
            result.innerHTML = "ERROR";
        }
    } else {
        if (display.innerHTML === "0" && !isNaN(input)) {
            display.innerHTML = input;
        } else {
            display.innerHTML += input;
        }

        let numericValue = display.innerHTML.replace(/,/g, "").replace(/×/g, "*").replace(/÷/g, "/");
        if (!isNaN(numericValue)) {
            display.innerHTML = Number(numericValue).toLocaleString("en-US");
        }
    }
}

window.onload = function () {
    document.getElementById("inputDisplay").innerHTML = "0";
};