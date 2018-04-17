const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    story = {
        "storyTitle": "A Chef’s Dream to Restore an Ancient West African Grain",
        "story": "Pierre Thiam, an American chef from Senegal, still remembers how when he was growing up in Dakar, some families in the countryside sent their children off to school with a little fonio tucked into their bags for luck. An ancient, sandy-colored grain, fonio was cultivated for thousands of years across West Africa and still is. Thiam remembers eating the grain too, though it wasn’t really prized, at least not in the way it used to be."
    };
    res.json(story);
});

module.exports = router;


