const express = require("express");
// const cors = require("cors");
const server = express();

// server.use(cors())
server.get('/languages' , (req, res) => {
    res.json( [
                {"title":"Javascript", "tutorialcount":143},
                {"title":"C#", "tutorialcount":412},
                {"title":"Kotlin", "tutorialcount":543},
                {"title":"Elixir", "tutorialcount":145},
                {"title":"Java", "tutorialcount":212},
                {"title":"Python", "tutorialcount":2644},
                {"title":"HTML", "tutorialcount":4132},
                {"title":"CSS", "tutorialcount":5435},
                {"title":"PHP", "tutorialcount":654},
                {"title":"Go", "tutorialcount":483},
                {"title":"Perl", "tutorialcount":122},
                {"title":"Swift", "tutorialcount":432},
                {"title":"C", "tutorialcount":765},
                {"title":"C++", "tutorialcount":1201},
                {"title":"Ruby", "tutorialcount":1212},
                {"title":"Scala", "tutorialcount":2212},
                {"title":"Lua", "tutorialcount":222},
                {"title":"Haskell", "tutorialcount":23},
                {"title":"Dart", "tutorialcount":25}
            ]
        )
    }
);

//Test for getting topic detail  data
server.get('/javascript', (req, res) => {
    res.json({
            "topic":"Javascript",
            "tutorials": [
                {"title":"Javascript The easy way", "tutorialcount":143},
                {"title":"Javascript is ez", "tutorialcount":412},
                {"title":"Javascript for noobs", "tutorialcount":543},
                {"title":"What's new in ES2018", "tutorialcount":543},
            ]
        })
});



server.listen(5000, () => {
    console.log("server running on port 5000");
});