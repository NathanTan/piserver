let express = require("express");
let app = express();

/* serves main page */
app.get("/", function(req, res) {
   res.sendFile('index.htm')
});

app.get("/squidward", (req, res) => {
    res.sendFile(__dirname + "/AsciiArt/squidward.txt")
})

let port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });