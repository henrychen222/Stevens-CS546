const express = require('express');
const app = express();
const configRoutes = require("./routes");

configRoutes(app);

app.listen(3000, () => {
    console.log("Server is now starting!");
    console.log("Your routes will be served on http://localhost:3000");
})

