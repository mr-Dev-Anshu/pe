import app from "./app.js";
import dbConnection from "./dbConnection/db.js";

dbConnection()
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(`App is running on ${process.env.PORT}`);
    });
  })

  .catch(() => {
    console.log("App not running  ");
  });
