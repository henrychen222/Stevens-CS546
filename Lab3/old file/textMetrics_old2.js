function total_letters(str) {
    var temp = str.replace(/[^a-zA-Z]/g, "");
    return temp.length;
}

function total_words(str) {
    //Method 1
    return str.trim().split(/\s+/).length;
}

function unique_words(str) {

    var unique = str.split(/\s+/).sort().filter(function (v, i, o) { return v !== o[i - 1]; });
    return unique.length;

}

function Count_elements_times(array, what) {
    // Method 1
    // var count = 0;
    // for (var i = 0; i < array.length; i++) {
    //     if (array[i] === what) {
    //         count++;
    //     }
    // }
    // return count;

    //Method 2
    return array.filter(item => item == what).length;
}

function long_words(str) {

    //split a string into an array of substrings
    var str_array = str.split(' ');

    var longestWord = 0;

    for (var i = 0; i < str_array.length; i++) {
        if (str_array[i].length > longestWord) {
            //in this "if" block, the largest elements is str_array[i], which represents the longest word
            var count_numbers = Count_elements_times(str_array, str_array[i]);
            /*
            This will get the result 6, the longest word length
            longestWord = str_array[i].length;    
            */
        }

        return count_numbers;

    }
}

function average_word_length(str) {

    //split a string into an array of substrings
    var str_array = str.split(' ');

    var array_container = [];
    for (i = 0; i < str_array.length; i++) {
        //calculate each word length in the string array and put the results into a new array container
        array_container.push(str_array[i].length);
    }

    //calculate the total length original string by add all elements in the array container
    var sum = 0;
    for (i = 0; i < array_container.length; i++) {
        sum = sum + array_container[i];
    }

    var avg = sum / str_array.length;

    return avg;
}

function word_occurrence(str) {
    // create map for word counts
    var wordsMap = {};
    /*
      wordsMap = {
        'Oh': 2,
        'Feelin': 1,
        ...
      }
    */
    str.split(/\s+/).forEach(function (key) {
        if (wordsMap.hasOwnProperty(key)) {
            wordsMap[key]++;
        } else {
            wordsMap[key] = 1;
        }
    });

    return wordsMap;

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

    simplify: function(text) {
      
        var lowercase = text.toString().toLowerCase();
         
        var letters_whitespace = lowercase.replace(/[^a-zA-Z\s]/g, "");
        
        var no_duplicate_spaces = letters_whitespace.replace(/\s+/g, ' ');
           
        var trim = no_duplicate_spaces.trim();
    
        return trim;
    
    },

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




