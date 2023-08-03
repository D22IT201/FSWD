// import required essentials
const express = require("express");
// create new router
const router = express.Router();

// create a JSON data array
let data = [
  {
    id: 1,
    title: "apple",
    
  },
  {
    id: 2,
    title: "banana",
   
  },
  {
    id: 3,
    title: "Mango",
    
  },
];

// this end-point of an API returns JSON data array
router.get("/view", function (req, res) {
  res.status(200).json(data);
});

router.get("/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});

//app.get("add/id")
//

router.post("/add",function(req, res){

  var receviedID=req.body.id;
  var receviedTitle=req.body.title;
  
  var newobj={
    "id":receviedID,
    "title":receviedTitle
 };
  data.push(newobj);
  res.status(200).json(data);
});

router.delete("/delete/:id",function(req, res){

 let found = data.find(function(item){
    return item.id === parseInt(req.params.id);
 });

  if(found){
    delete data[found.id];
  }
  res.status(200).json(data);
});

// router.delete("/delete/:id",function(req, res){

//   let found = data.find(function(item){
//      return item.id === parseInt(req.params.id);
//   });
 
//    if(found){
//      delete data[found.id];
//    }
//    res.status(200).json(data);
//  });
 
 router.put("update/:id/:title", function (req, res){
  var receivedtitle = req.params.title;
  let found = data.find(function (item){
    return item.id === parseInt(req.params.id);
  });
  if(found){
    found.title = receivedtitle;
  }
  res.status(200).send(data);
});

module.exports = router;