const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
    res.status(200).json('Data fetching...');
  });
  
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});