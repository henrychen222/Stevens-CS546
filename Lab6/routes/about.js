const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    about = {
        "name": "Wei Chen",
        "cwid": "10432881",
        "biography": {
            "first paragraph": "My name is Wei Chen, I was born in Yancheng, Jiangsu Province, China."
                + "I live in my town for 10 years and actually that's a awesome place for childish time."
                + "My family moved to Nanjing, China------the capital in Jiangsu Province in 2003 because my dad was admitted as a Master student in Nanjing Agriculture University."
                + "My family settled down there from 2003 till now.I continued my primary school from 4th grade in Nanjing."
                + "After that, I went to Middle school, senior high school, and university all in Nanjing."
                + "I studied Computer Science in my undergraduate period because I'm interested in technology."
                + "In August 2016, I went to University of North Dakota for a CS Master Degree."
                + "That was the first time for me to go abroad and I was curious about everything."
                + "After one and a half year studying in UND, I decided to transfer to Stevens as I feel Stevens is a more prestigious and advanced university.\n",

            "Second paragraph": "My dad is an associate professor in a unversity and my mom is a construction manager in a company."
                + "I'm the only child because of one-child policy.\n"

        },
        "favoriteShows": ["American Gods", "American Vandal", "At Home With Amy Sedaris", "Better Things", "Big Little Lies", "Black Mirror", "Crazy Ex-Girlfriend", "The Deuce", "Dirk Gently's Holistic Detective Agency", "Game Of Thrones", "The Good Place", "The Handmaid's Tale", "Insecure", "Jimmy Kimmel Live!", "Late Night With Seth Meyers", "Legion", "Master Of None", "One Day At A Time", "Ozark", "RuPaul's Drag Race", "Search Party", "Speechless", "Stand-Up Specials", "Star Trek: Discovery", "Vietnam War"],
        "hobbies": ["Travelling", "Photography", "Reading History and biography/autobiography", "Pool/Billiards", "Video Games", "Chess", "Table Tennis", "Tennis", "Badminton"]
    };
    res.json(about);
});

module.exports = router;

