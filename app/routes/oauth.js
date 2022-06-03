const express = require('express');
const axios = require("axios");
const router = express.Router();

const{ CLIENT_ID,CLIENT_SECRET,ACCESS_TOKEN_URL,PORT} =process.env;

router.get("/redirect", (req, res) => {
    axios({
      method: "POST",
      url: `${ACCESS_TOKEN_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      res.redirect(
          
        `http://localhost:${PORT}?access_token=${response.data.access_token}`
      );
    });
  });

module.exports = router;