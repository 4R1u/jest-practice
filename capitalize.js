const capitalize = function (str) {
    if (typeof str != "string" || str.length < 1)
        return str;
    let newStr = "";
    newStr += str[0].toUpperCase();
    for (let i = 1; i < str.length; ++i)
        newStr += str[i];
    return newStr;
}

module.exports = capitalize;
