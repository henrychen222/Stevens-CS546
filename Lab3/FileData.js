const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

// module.exports.get_file_as_string = get_file_as_string;
// module.exports.get_file_as_json = get_file_as_json;
// module.exports.save_string_to_file = save_string_to_file;
// exports.save_json_to_file = save_json_to_file;

module.exports = {

    getFileAsString: async function (path) {

        //use try...catch to call the function in the app.js for promise being rejected when there is an error
        if (!path) {
            throw "Need to provide a file name";
        }

        let file_content = await fs.readFileAsync(path, { encoding: 'utf8' });

        //promise fulfill
        return file_content;
    },

    getFileAsJSON: async function (path) {

        if (!path) throw "no file name provided";

        let file_content = await fs.readFileAsync(path, "utf8");
        let jsondata = JSON.parse(file_content);

        return jsondata;
    },

    saveStringToFile: async function (path, text) {

        //If no path is provided, it will return a rejected promise by use throwing.
        if (!path) throw "Need to provide a file name";

        //If no text is provided, it will return a rejected promise by use throwing.
        if (!text) throw "Need to provide text content";

        await fs.writeFileSync(path, text);

        return true;
    },

    saveJSONToFile: async function (path, obj) {
       //If no path is provided, it will return a rejected promise by use throwing.
        if (!path) throw "Need to provide a file name";
        //If no obj is provided, it will return a rejected promise by use throwing.
        if (!obj) throw "Need to provide text content";

        //convert the text to JSON object
        let jsontext = JSON.stringify(obj);

        await fs.writeFileSync(path, jsontext);

        return true;

    }

}

