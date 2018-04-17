const fs = require("fs");
const filedata = require("./FileData");
const text_metrics = require("./textMetrics");

async function main(path) {
  //use try...catch block to call the function in the fileData.js for promise being rejected when there is an error
  try {
    if (!path) throw "no file name provided";
    let res;
    if (fs.existsSync(path + '.result.json')) {
      res = await filedata.getFileAsJSON(path + '.result.json');
    }
    else {
      let str = await filedata.getFileAsString(path + '.txt');
      str = text_metrics.simplify(str);
      filedata.saveStringToFile(path + '.debug.txt', str);
      res = text_metrics.createMetrics(str);
      await filedata.saveJSONToFile(path + '.result.json', res);
    }
    console.log(res);
  }
  catch (error) {
    console.log("handling file with errors");
  }
}

main('chapter1');
main('chapter2');
main('chapter3');
