// var string = "   The dog      has a long   tail, and it     is RED!    ";
// // var str = "abc's test#s";
// //string = string.replace(/\s\s+/g, ' ');
// string = string.replace(/  +/g, ' ');
// string = string.trim();

// console.log(string);
// var string_lab = "Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23";
// console.log(total_letters(string_lab));
// console.log(total_words(string_lab));
// console.log(word_occurrence(string_lab));
// console.log(unique_words(string_lab));

function total_letters(str) {
    var temp = str.replace(/[^a-zA-Z]/g, "");
    return temp.length;
}

function total_words(str) {
    //Method 1
    return str.trim().split(/\s+/).length;

    //Method 2
    // return str.split(' ').length;

    // Method 3
    // s = s.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
    // s = s.replace(/[ ]{2,}/gi, " ");//2 or more space to 1
    // s = s.replace(/\n /, "\n"); // exclude newline with a start spacing

    //Method 4
    // var matches = str.match(/[\w\d]+/gi);
    // return matches ? matches.length : 0;

    //Method 5
    // var count = 0;
    // words = str.split(" ");
    // for (i = 0; i < words.length; i++) {
    //     // inner loop -- do the count
    //     if (words[i] != "") count += 1;
    // }
    // return count;
}

function unique_words(str) {
    var unique = str.split(/\s+/).sort().filter(function (v, i, o) { return v !== o[i - 1]; });
    return unique.length;
}

function long_words(str) {

}

function average_word_length(str) {
    let whole_string_length = 0;
    for (let j = 0; j < str.length; j++) {
        whole_string_length += str[j].length;
    }
    let average = whole_string_length / str.length;
    return average;
}

function word_occurrence(str) {
    // // create map for word counts
    // var wordsMap = {};
    // /*
    //   wordsMap = {
    //     'Oh': 2,
    //     'Feelin': 1,
    //     ...
    //   }
    // */
    // str.split(/\s+/).forEach(function (key) {
    //     if (wordsMap.hasOwnProperty(key)) {
    //         wordsMap[key]++;
    //     } else {
    //         wordsMap[key] = 1;
    //     }
    // });

    // return wordsMap;
    var counts = {};
    for (var i = 0; i <= str.length; i++) {
        var character = str.charAt(i);
        if (counts[character]) {
            counts[character]++;
        } else {
            counts[character] = 1;
        }
    }
    return counts;
}

function simplify(text) {

    //Convert the text to lowercase
    var lowercase = text.toString().toLowerCase();

    //Remove all characters except for letters and whitespace characters
    var letters_whitespace = lowercase.replace(/[^a-zA-Z\s]/g, "");
    // letters_whitespace = letters_whitespace.split("");
    //text = text.replace(/[^a-zA-Z]/g, '');    //only except letters

    //Convert all duplicate spaces to be single spaces
    /* Convert all white space to simple spaces
    (new lines become spaces; tabs become spaces, spaces stay the same, etc) */
    var no_duplicate_spaces = letters_whitespace.replace(/\s+/g, ' ');

    //replace(/[\r\n]+/g, '\n\n')  //remove multiple new line
    //text = text.replace(/  +/g, ' ');

    //Trim the whitespace off the start and end of the text
    var trim = no_duplicate_spaces.trim();

    return trim;

}

module.exports = {

    createMetrics: function (text) {

        // //scan through the text  simplify the text, and return an object   ?????????
        // for(let i = 0 ; i< String(text).length; i++){}


        //simplify   ???????????/
        var simplify_text = simplify(text);
        // //return an object ??????????????
        // return (util.inspect(JSON.parse(text), false, null));

        let totalLetter = total_letters(simplify_text);
        let totalWords = total_words(simplify_text);
        let uniqueWords = unique_words(simplify_text);
        let longWords = long_words(simplify_text);
        let averageWordLength = average_word_length(simplify_text);
        let wordOccurrence = word_occurrence(simplify_text);

        let jsondata = `{\n totalLetters: ${totalLetter}, \n totalWords: ${totalWords}, \n uniqueWords: ${uniqueWords}, \n longWords: ${longWords}, \n averageWordLength: ${averageWordLength}, \n wordOccurrences: ${wordOccurrence}, `;

        jsondata += wordOccurrence + "\n}";
        return jsondata;


    }

}




