const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    education = [
        {
            "schoolName": "Nanjing Zhonghua high school",
            "degree": "High School Diploma",
            "favoriteClass": "Maths",
            "favoriteMemory": "At that time, I'm crazy about Math problems. Always giving up some other subjects and instead doing Math research."
        },
        {
            "schoolName": "Nanjing Xiaozhuang University",
            "degree": "Bachelors in Computer Science",
            "favoriteClass": "Linux system programming",
            "favoriteMemory": "Join different types of college organizations"
        },
        {
            "schoolName": "University of North Dakota",
            "degree": "Masters in Computer Science",
            "favoriteClass": "Advanced Artificial Intelligence",
            "favoriteMemory": "first semester lived in dorm making lots of american friends"
        },

    ];
    res.json(education);
});

module.exports = router;