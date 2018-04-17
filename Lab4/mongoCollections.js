/*You store this database connection in a variable: dbConnection 
  and use it to access collections*/
const dbConnection = require("./mongoConnection");

/* This will allow you to have one reference to each collection per app */
/* Feel free to copy and paste this this */

/*You store this collection reference in a variable: getCollectionFN 
  and use it to access collection operations */
const getCollectionFn = collection => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      _col = await db.collection(collection);
    }

    return _col;
  };
};

/* Now, you can list your collections here: */
module.exports = {
  todo: getCollectionFn("todo")
  
};
