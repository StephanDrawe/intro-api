const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

app.use(bodyParser.json()) //middleware
// app.use('/static', express.static('public'))
app.use('/home', express.static('public/index.html'))

app.get("/", (req, res, next) => {
    // console.log(req); Extremely large amount of metadata
    res.json("Hello World 🐶") //response at route "/"
})

app.post("/", (req, res, next) => {
    // console.log(req.body);
    const data = req.body;
    data.progress = "In Progress";
    res.json(data);
})
// app.post
// app.put
// app.patch
// app.delete

app.listen(PORT, () => {
    console.log(`🐶🐶🐶Server running on port http://localhost:${PORT}/ 🐶🐶🐶`);
})

// week 21 PAT officehour connect github and gitignore super fast tutorial at the end