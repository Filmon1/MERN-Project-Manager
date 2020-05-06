const express = require("express");
const cors = require("cors");
const port = 8000;
const db_name = "projectDB"
const app = express();

app.use(cors());
app.use(express.json());


require("./config/mongoose")(db_name);
require("./routes/Project.routes")(app);

app.listen(port, () => console.log(`listening on port ${port}`));