const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 8000;

// req is short for request
// res is short for response
app.post("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});
  res.json(
    {message: "This is express"}
  )

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

app.listen(port, () => { console.log(`Listening on port ${port}`)});