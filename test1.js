console.log('begin')

function token(words) {

    let map = new Map()

    for (let item of words) {

        let word = item.split('')
        word.sort()
        word = word.toString()
        word = word.replace(/,/g, '')
        map.set(item, word)

    }

    return map;
}

function grouping(group, map) {
    for (const [gKey, gValue] of group.entries()) {
        let list = [];
        for (const [key, value] of map.entries()) {
            if (gKey == value) {
                list.push(key);
            }
        }
        group.set(gKey, list);
    }
    return group
}

function main() {

    let words = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS']
    let map = new Map()
    let group = new Map()


    map = token(words)


    for (const [key, value] of map.entries()) {
        group.set(value, key)
    }


    group = grouping(group, map);


    // pring result
    for (const [key, value] of group.entries()) {
        console.log(value)
    }

}


main()

