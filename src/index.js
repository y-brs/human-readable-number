module.exports = function toReadable(number) {
    const digits = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return "zero";
    }

    let result = "";

    if (number >= 100) {
        result += `${digits[Math.floor(number / 100)]} hundred`;
        number %= 100;
    }

    if (number >= 20) {
        result += ` ${tens[Math.floor(number / 10)]}`;
        number %= 10;
    } else if (number >= 10) {
        result += ` ${teens[number - 10]}`;
        number = 0;
    }

    if (number > 0) {
        result += ` ${digits[number]}`;
    }

    return result.trim();
};
