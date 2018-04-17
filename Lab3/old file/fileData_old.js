//https://www.promisejs.org/

module.exports.get_file_as_string = get_file_as_string;
module.exports.get_file_as_json = get_file_as_json;
module.exports.save_string_to_file = save_string_to_file;
exports.save_json_to_file = save_json_to_file;

var get_file_as_string = async function getFileAsString(path) {
    if (!path) {
        throw "Need to provide a file name";
        
    }
                 
        
    let file = await fs.readFileAsync(path, { encoding: 'utf8' });
    return true;
    
}

var get_file_as_json =  async function getFileAsJSON(path) {
    return new Promise((fulfill, reject) => {
        //If no path is provided, it will return a rejected promise by use throwing.
        if (!path) throw "no file name provided";

        fs.readFile(path, "utf8", (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            try {
                //json.parse() convert a string to a JavaScript object
                let jsondata = JSON.parse(data);
                fulfill(jsondata);
            }
            //if there is an error when reading the file,promise will reject, passing the error to the rejection callback
            catch (parseError) {
                reject(parseError);
            }
        });
    });

}

var save_string_to_file = async function saveStringToFile(path, text) {
    return new Promise(
        function (resolve, reject) {
            //If no path is provided, it will return a rejected promise by use throwing.
            if (!path) {
                throw "Need to provide a file name";
                return;
            }

            //If no text is provided, it will return a rejected promise by use throwing.
            if (!text) {
                throw "Need to provide text content";
                return;
            }

            fs.writeFile(path, JSON.stringify(text),
                (error) => {
                    //if there is an error when reading the file,promise will reject, passing the error to the rejection callback
                    if (error) {
                        reject(error);
                        console.log('Oops, an error occured %s', err);
                    } else {
                        //????????????????????
                        //return a promise that will resolve to true when saving is completed
                        //resolve(data);    how to write here
                        console.log("the text has been saved")
                    }
                });
        });
}

var save_json_to_file = async function saveJSONToFile(path, obj) {
    return new Promise(
        function (resolve, reject) {
            //If no path is provided, it will return a rejected promise by use throwing.
            if (!path) {
                throw "Need to provide a file name";
                return;
            }

            //If no text is provided, it will return a rejected promise by use throwing.
            if (!text) {
                throw "Need to provide text content";
                return;
            }


            //convert the text to JSON object
            let jsontext = JSON.parse(text);

            fs.writeFile(path, JSON.stringify(text),
                (error) => {
                    //if there is an error when reading the file,promise will reject, passing the error to the rejection callback
                    if (error) {
                        reject(error);
                        console.log('Oops, an error occured %s', err);
                    } else {
                        //return a promise that will resolve to true when saving is completed
                        //resolve(data);    how to write here
                        console.log("the text has been saved")
                    }
                });
        });
}






















// module.exports = {
//     description: "This is all functions need to be exported",
//     async getFileAsString: function (path) {

//         // var result = await resolveAfter2Seconds();

//         return new Promise(
//             function (resolve, reject) {
//                 //If no path is provided, it will return a rejected promise by use throwing.
//                 if (!path) {
//                     throw "Need to provide a file name";
//                     return;
//                 }
//                 fs.readFile(path, { encoding: 'utf8' },
//                     (error, data) => {
//                         //if there is an error when reading the file,promise will reject, passing the error to the rejection callback
//                         if (error) {
//                             reject(error);
//                             console.log('Oops, an error occured %s', err);
//                         } else {
//                             //return a promise
//                             resolve(data);
//                         }
//                     });
//             });


//         // fs.readFileAsync(...)
//         //     .then(function (result) {
//         //         var json = JSON.parse(result);
//         //         console.log("the json", result);
//         //     })
//         //     .catch(FileNotFoundError, function (e) {
//         //         console.log("File " + e.path + " does not exist");
//         //     });
//         //      .catch (SyntaxError, function(e) {
//         //     console.log("Error happened when parsing JSON", e);
//         // })

//         // function readFile(filename, enc){
//         //     return new Promise(function (fulfill, reject){
//         //       fs.readFile(filename, enc, function (err, res){
//         //         if (err) reject(err);
//         //         else fulfill(res);
//         //       });
//         //     });
//         //   }

//     },
//     async getFileAsJSON: function (path) {

//         return new Promise((fulfill, reject) => {
//             //If no path is provided, it will return a rejected promise by use throwing.
//             if (!path) throw "no file name provided";

//             fs.readFile(path, "utf8", (error, data) => {
//                 if (error) {
//                     reject(error);
//                     return;
//                 }
//                 try {
//                     //json.parse() convert a string to a JavaScript object
//                     let jsondata = JSON.parse(data);
//                     fulfill(jsondata);
//                 }
//                 //if there is an error when reading the file,promise will reject, passing the error to the rejection callback
//                 catch (parseError) {
//                     reject(parseError);
//                 }
//             });
//         });
//         // return new Promise(function (fulfill, reject) {
//         //     readFile(filename, 'utf8').done(function (res) {
//         //         try {
//         //             fulfill(JSON.parse(res));
//         //         } catch (ex) {
//         //             reject(ex);
//         //         }
//         //     }, reject);
//         // });

//     },
//     async saveStringToFile: (path, text) => {
//         return new Promise(
//             function (resolve, reject) {
//                 //If no path is provided, it will return a rejected promise by use throwing.
//                 if (!path) {
//                     throw "Need to provide a file name";
//                     return;
//                 }

//                 //If no text is provided, it will return a rejected promise by use throwing.
//                 if (!text) {
//                     throw "Need to provide text content";
//                     return;
//                 }

//                 fs.readFile(path, { encoding: 'utf8' },
//                     (error, data) => {
//                         //if there is an error when reading the file,promise will reject, passing the error to the rejection callback
//                         if (error) {
//                             reject(error);
//                             console.log('Oops, an error occured %s', err);
//                         } else {
//                             //return a promise
//                             resolve(data);
//                         }
//                     });
//             });

//     },
//     async saveJSONToFile: (path, obj) => {



//     }
// };

