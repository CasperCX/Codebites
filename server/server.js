const express = require("express");
// const cors = require("cors");
const server = express();

// server.use(cors())
server.get('/languages' , (req, res) => {
    res.json( [
                {"model":"Sentra", "doors":4},
                {"model":"Maxima", "doors":4},
                {"model":"Skyline", "doors":2}
            ]
        )
    }
);



server.listen(5000, () => {
    console.log("server running on port 5000");
});