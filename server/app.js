if(process.env.NODE_ENV != "production"){
  require('dotenv').config()
}

const express = require('express');
const router = require('./routers');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

app
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use("/api",router)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
