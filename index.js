const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv')
const port = process.env.PORT || 5500;
const { ATLAS_URI } = process.env;
var router = express.Router();
const app = express();


dotenv.config();
app.use(express.json())


//route config 추가
app.use("/api/posts", require("./routes/posts"));
app.use("/api/users", require("./routes/users"));
app.use("/api/", require("./routes/comments"));

// connect to mongoDB server
mongoose.connect(process.env.MONGO_URL,)
.then(console.log("Successfully connected to mongodb"))
.catch((err) => console.log(err))


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


module.exports = router;