function getNumbers(numbers) {
    function returnNumbers() {
        return numbers.reduce((acc, el) => {
            if (el >= 0 && el <= 7){
                acc.push(el);
            }
            return acc;
        }, []).sort((a, b) => a - b);
    }
    return returnNumbers;
}

let func = getNumbers([1, 2, 3, 4, 5, 6, 7, -1, -2 ]);

console.log(func());

// 2 / 3

function sumElementsByIndex(arr, index) {

    return index >= arr.length ? "Index >= array length" : arr.reduce((acc, el, ind, arr) => index >= ind ? acc + arr[ind] : acc);

}

console.log(sumElementsByIndex([1, 2, 3, 4, 5, 6, 7], 6));

