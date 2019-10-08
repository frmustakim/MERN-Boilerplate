const express = require("express");

const app = express();

//dummy example
app.get("/api/players", (req, res) => {
  const players = [
    { id: 1, firstName: "Reiss", lastName: "Nelson" },
    { id: 2, firstName: "James", lastName: "Maddison" },
    { id: 3, firstName: "Daniel", lastName: "James" }
  ];
  res.json(players);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on ${port}`));
