const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const clearBtn = document.getElementById("clear-btn");

const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
];

const convertToRoman = (num) => {
    let result = "";

    for (const { value, symbol } of romanNumerals) {
        const count = Math.floor(num / value);
        result += symbol.repeat(count);
        num -= value * count;
    }

    return result;

}

const handleConversion = () => {
    const num = parseInt(numberInput.value, 10);

    if (isNaN(num)) {
        output.innerHTML = "Please enter a valid number";
    } else if (num <= 0) {
        output.innerHTML = "Please enter a number greater than or equal to 1";
    } else if (num >= 4000) {
        output.innerHTML = "Please enter a number less than or equal to 3999";
    } else {
        const result = convertToRoman(num);
        output.innerHTML = result;
    }
};

convertBtn.addEventListener("click", handleConversion);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleConversion();
    }
});

clearBtn.addEventListener("click", () => {
    numberInput.value = ""; 
    output.innerHTML = ""; 
});





