function getOddNumber(max) {
    var input = prompt("Input odd number less than " + max);

    var isInputInvalid = true;

    while (isInputInvalid) {

        if parseInt(input) % 2 !== 0 && parseInt(input) <= max)) break;

        input = prompt("Input odd number less than " + max");
    }
}