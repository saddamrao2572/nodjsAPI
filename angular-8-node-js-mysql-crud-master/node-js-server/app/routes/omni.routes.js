module.exports = app => {
  const omni = require("../controllers/omni.controller.js");


  var router = require("express").Router();

  

  router.get("/", omni.con);


  app.use('/api/omni', router);
};
