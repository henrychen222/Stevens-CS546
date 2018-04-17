const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const configRoutes = require('./routes');
const static = express.static(__dirname + '/public');

const express_handlebars = require('express-handlebars');
const Handlebars = require('handlebars');

const handlebarInstance = express_handlebars.create({
    defaultLayout: 'main',
    helpers: {
        asJSON: (obj, spacing) => {
            if(typeof spacing == 'number') 
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

            return new Handlebars.SafeString(JSON.stringify(obj));
        }
    }
});

app.use('/public', static);    //use static resources (css, js, images)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.engine('handlebars', handlebarInstance.engine);
app.set('view engine', 'handlebars');

// app.set("views", __dirname);

configRoutes(app);


app.listen(3000, () => {
    console.log("Listening on port 3000....");
});


