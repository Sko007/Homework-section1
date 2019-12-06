const express = require("express");
const bodyParser = require("body-parser");
const bodyParse = bodyParser.json();
const app = express();
const port = process.env.PORT || 3000;
const validation = require("./middleware")




app.use(bodyParse);
app.use(validation)


app.post("/messages", (req, res, next) => {

})

app.listen(port, () => console.log(`Server listens on port ${port}`));
