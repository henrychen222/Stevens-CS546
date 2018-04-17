function check_argument_is_provided(obj1, obj2) {
    if (obj1 === undefined) throw "obj1 is not provided";

    if (typeof obj2 === "undefined") throw "obj2 is not provided";
}

function check_object(obj1, obj2) {
    if (typeof obj1 !== "object") 
        throw `${obj1 || "provided object"} is not an object`;
    
    if (typeof obj2 !== "object")
        throw `${obj2 || "provided object"} is not an object`;
    
}

function isArray(obj) {
    if (obj === "undefined")
        throw "Array is not provided";

    //if (!Array.isArray(obj))  throw "This is not an Array";
   
    if (Object.prototype.toString.call(obj) !== "[object Array]") {
        throw "This is not an Array";
    }

}

module.exports = {
    description: "This is a calculator for CS-546",
    deepEquality: (obj1, obj2) => {
        //check_object(obj1, "first object");
        //check_object(obj2, "second object");

        check_argument_is_provided(obj1, "first object");
        check_object(obj1,obj2);
        check_argument_is_provided(obj2, "second object");
             
        //JSON.stringify(): converts a JavaScript value to a JSON string
        return JSON.stringify(obj1) === JSON.stringify(obj2);

    },
    uniqueElements: (arr) => {
        isArray(arr);
        //Count the unique elements
        return new Set(arr).size;


        // for (var i = 0; i <=arr.length; i++) {
        // 	for(var j=i; j<=arr.length; j++){
        // 		if( i!= j && arr[i] == arr[j]){
        //              return true;
        // 		}
        // 	}
        // }
        // return false;

        // var counts = [];
        // for (var i = 0; i <=arr.length; i++) {
        //     if (counts[arr[i]] === undefined) {
        //         counts[arr[i]] = 1;
        //     } else {
        //         return true;
        //     }
        // }
        // return false;

        // var counts = {};
        // for (var i = 0; i <=arr.length; i++){
        // 	counts[arr[i]] = 1+ (counts[arr[i]] || 0);
        // }
        // return counts;   
        

    },
    countOfEachCharacterInString: (str) => {
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

};