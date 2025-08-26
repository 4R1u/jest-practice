const analyzeArray = function (arr) {
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    const length = arr.length;

    arr.forEach(i => {
        sum += i;
        if (i < min)
            min = i;
        if (i > max)
            max = i;
    });

    return {
        average: sum / length,
        min,
        max,
        length
    };
};

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = analyzeArray;
