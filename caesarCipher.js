const caesarCipher = function (str, magnitude) {
    if (typeof str != 'string' || typeof magnitude != 'number' || magnitude == 0)
        return str;

    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let newStr = "";

    for (let i = 0; i < str.length; ++i) {
        const upperIndex = upperLetters.indexOf(str[i]);
        const lowerIndex = lowerLetters.indexOf(str[i]);

        if (upperIndex == lowerIndex) {
            newStr += str[i];
            continue;
        }

        let index;

        if (upperIndex != -1)
            index = upperIndex + magnitude;
        else if (lowerIndex != -1)
            index = lowerIndex + magnitude;

        if (index >= 26 || index <= -26)
            index %= 26;

        if (upperIndex != -1)
            newStr += upperLetters[index]
        else if (lowerIndex != -1)
            newStr += lowerLetters[index]
    }

    return newStr;
};

module.exports = caesarCipher;
