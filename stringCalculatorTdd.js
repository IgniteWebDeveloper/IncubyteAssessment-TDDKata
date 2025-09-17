
function escapeForRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function add(numbers) {
    if (numbers === "") return 0;

    let input = numbers;

    if (!input.includes(',')) {
        const number = Number(input);
        if (!Number.isNaN(number)) return number;
    }

    let splitRegex = /,|\n/;

    if (input.startsWith("//")) {
        const delimiterEndIndex = input.indexOf("\n");
        const customDelimiter = input.substring(2, delimiterEndIndex);
        input = input.slice(delimiterEndIndex + 1);

        splitRegex = new RegExp(escapeForRegex(customDelimiter));
    }

    const filteredNumbers = input
        .split(splitRegex)
        .filter(number => number !== "" && number !== undefined)
        .map(number => Number(number));

    return filteredNumbers.reduce((acc, curr) => acc + curr, 0);

}

module.exports = { add };