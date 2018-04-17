const palindromeRoutes = require('./palindrome');
const resultRoute = require('./result');

const constructorMethod = (app) => {
    app.use('/', palindromeRoutes);
    app.use('/result', resultRoute);
    app.use('*', (req, res) => {
        res.redirect('/');
    });
};

module.exports = constructorMethod;