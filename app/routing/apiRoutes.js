var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {
app.get("/api/friends", function (req, res) {
    return res.json(Friends);
});

app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
  
  
    console.log(newFriend);
  
    Friends.push(newFriend);
  
    res.json(newFriend);
  });

}