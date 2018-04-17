function simple(str) {
    if(!str) throw "no string is provided";
    if(typeof str !== 'string') throw 'not a string';
    return str.toLowerCase().replace(/[^a-zA-Z\s]/g, "").replace(/\s+/g, ' ').trim();
}

function createMetrics(str) {
    str = simple(str);
    let totalletters = str.replace(/\s/g, '').length;
    let arr = str.split(' ');
    let totalwords = arr.length;
    let occ = {};
    let longword = 0;
    for (let word of arr) {
        if (word.length >= 6) longword++;
        if (word in occ) {
            occ[word]++;
        }
        else occ[word] = 1;
    }
    return {
        totalLetters: totalletters,
        totalWords: totalwords,
        uniqueWords: Object.keys(occ).length,
        longWords: longword,
        averageWordLength: totalletters / totalwords,
        wordOccurrences: occ
    };
}

module.exports = {
    simplify: simple,
    createMetrics: createMetrics
}