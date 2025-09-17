function add(numbers) {
    if (numbers === "") return 0;

    if (!numbers.includes(',')) {
        const number = Number(numbers);
        if (!Number.isNaN(number)) return number;
    }

    const numbersSum = numbers.split(/[\n,]/).map(Number)
    return numbersSum.reduce((acc, curr) => acc + curr, 0);

}

module.exports = { add };