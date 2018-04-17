const fs = require("fs");
var path = require('path'); 
const filedata = require("./FileData");
const text_metrics = require("./textMetrics");

//how to know which result file to check
async function read_each_file() {

  //var string_lab = "Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23";

  //let example = await filedata.getFileAsString();

  // let simply_text = await text_metrics.simplify(string_lab);
  // console.log(simply_text);

  // let object_output = await text_metrics.createMetrics(string_lab);
  // console.log(object_output);


  //Check if chapter1.result.json exists
  


fs.exists('chapter1.result.json', function(exists) { 
  if (exists) { 
      filedata.getFileAsJSON("chapter1.result.json");
      console.log("hello-----------------------------------");
  }else{
    console.log("-----------json file is not exist, let's get the file-------------------------");
    //simplify the text and store the result in chapter1.debug.txt
    let simplfied_file_content = filedata.getFileAsString("chapter1.txt"); 
    console.log(simplfied_file_content);
    console.log("----------------test222222222222222222----------------------------------");
    filedata.saveStringToFile("chapter1.debug.txt", simplfied_file_content);
    

    //Run the text metrics and store those results in chapter1.result.json
    let text_metrics_results = text_metrics.createMetrics("Hello, my -! This is a great day to say hello.\n\n\tHello! 2 3 4 23");
    console.log("----------------test33333333333333333333----------------------------------");
    filedata.saveJSONToFile("chapter1.result.json", text_metrics_results);
    console.log("----------------test444444444444444444----------------------------------");

    //print the resulting text_metrics
    console.log(text_metrics_results);
  } 
  });

  
  // const stat = await fs.statAsync('chapter1.result.json');
  // if (stat) {
  //   console.log(stat);
  // } else {

    
  // }

  // catch (error) {
  //   console.log("error happens when handling the original file");
  // }



 
}



read_each_file();