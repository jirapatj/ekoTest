
let words = ['foo(bar)', '(bar)', 'foo(bar)blim', 'foo(foo(bar))blim']

function reverseWord(word) {
    return word.includes('(') ? reverseWord(reverseText(word)) : word
}

function reverseText(word) {
    var regEx = /\(([^()]*)\)/i;
    var subStr = regEx.exec(word)[1];

    subStr = subStr.split('').reverse().join('');
    return word.replace(regEx, subStr)
}

function main() {
    for (let item of words) {
        console.log(reverseWord(item))
    }
}

main()