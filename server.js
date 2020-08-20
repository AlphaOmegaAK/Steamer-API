const express = require('express');
const app = express();
// const cors = require('cors');

// Config
const PORT = process.env.PORT || 4000;



// ? Middleware
// app.use(cors());
//-----Stretch----------

// Body Parser
// app.use(bodyParser.urlencoded({ extended: False }));
// Json (express)
app.use(express.json());


// Routes
// app.use("/", require("./controllers/index"));
// app.use("/auth", require("./controllers/auth"));
// app.use("/posts", require("./controllers/posts"));

app.listen(PORT, console.log(`Server is running on Port: ${PORT}`));