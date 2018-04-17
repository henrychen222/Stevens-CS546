const questionOne = function questionOne(arr) {
    // Implement question 1 here

    var sum = 0;
    i = arr.length;
    while (i--)
        sum += Math.pow(arr[i], 2); //use pow() function for squares of numbers
    return sum;

}

const questionTwo = function questionTwo(num) {
    // Implement question 2 here

    var group_first = 0,
        group_second = 1,
        group_third = 1

    for (i = 2; i < num + 1; i++) {

        group_third = group_first + group_second;
        group_first = group_second;
        group_second = group_third;
    }

    return group_third;

}

const questionThree = function questionThree(text) {
    // Implement question 3 here

    // METHOD 1
    //Match against the regex (g is used to search the whole text, i makes it case-insensitive) and return the number of matches
    var vowelCount = text.match(/[aeiou]/gi);
    //check for null condition and return 0 if there is no match
    return vowelCount === null ? 0 : vowelCount.length;

    // METHOD 2 
    //    var vowelCount = 0;
    //    //convert the text into string format
    //    var str = text.toString();
    //    //searching through the whole string
    //    for(i=0; i<str.length; i++){
    //       //if there is a match, count one time
    //       if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
    //            vowelCount++;       
    //       }      
    //    }   
    //      return vowelCount;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here

    if (num < 0) {
        return NaN;
    } else if (num == 0) {
        return 1;
    }
    return num * questionFour(num - 1);

}

module.exports = {
    firstName: "Wei",
    lastName: "Chen",
    studentId: "10432881",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};