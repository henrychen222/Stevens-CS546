const express = require('express');
const router = express.Router();
// const data = require('../data/index');
// const palindrome = data.palindrome;


router.get('/', (req, res) => {
    // console.log("GET")
    // res.render( __dirname + '/../app'+ 'views/palindrome');
    //res.render("main");
    res.render("palindrome", { title: 'The Best Palindrome Checker in the World'});
    console.log("in get");

});

// router.post('/result', (req,res) => {
//     console.log("POST")
//     let testValue = req.body.palindrome;

//     try {
//         if(palindrome.isPalindrome(testValue)) {
//             let isPalindrome = "success";
//             console.log("true");
//         } 
//         else {
//             let isPalindrome = "failure";
//             console.log("false");
//         }
//     } catch(e) {
//         //res.status(404).send("has error");
//         console.log("caught error");
//         res.render('result', {input: testValue,isPalindrome: isPalindrome , error: e});    
//         return;
//     }

//     //
//     res.render('result', {isPalindrome: isPalindrome});
// });


module.exports = router;