
var friendData = require("../data/friends"); //importing our friend list data



//Math.abs(arg);
module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendData); //
    
  });
 

  app.post("/api/friends", function(req, res) {
    var convertScores = [];//will contain all parsed scores from a user
    var allDifferences = []; //will contain all difference scores to be compared later on
    var eachDifference = 0; // setting the initial value of individual differences to 0
    // console.log(req.body.scores);
    for(i = 0; i < req.body.scores.length; i++){
      convertScores.push(parseInt(req.body.scores[i]));
    }
    req.body.scores = [];
    for(i = 0; i < convertScores.length; i++){  //re-entering the parsed values before the new 
                                                //user gets saved to the server
      req.body.scores.push(convertScores[i]);
    }
    console.log("new submit");
    console.log(convertScores);
    // console.log(friendData[0].name);
    // console.log(friendData[0].scores)

    //run through all of the saved friends in the database

    for(i = 0; i <friendData.length; i++){
      for(j = 0; j < friendData[i].scores.length; j++){
        eachDifference = eachDifference + (Math.abs(convertScores[j]-friendData[i].scores[j])); 
        // alltotalDifferences.push(Math.abs(convertScores[j]-friendData[i].scores[j]));
        
      }
      allDifferences.push(eachDifference); //pushing each differences into an array of all differences
      eachDifference = 0;
    }
    console.log(allDifferences);
    var match = Math.min(...allDifferences);
    console.log(match);
    var matchIndex = allDifferences.indexOf(match);
    var yourMatch = friendData[matchIndex].name;
    var yourMatchphoto = friendData[matchIndex].photo;
    console.log(yourMatchphoto);
    // module.exports = yourMatch;
    // exports.yourMatchphoto;

    console.log("Congratulations, your match is" + " " + yourMatch);




    friendData.push(req.body); 
    res.json(friendData[matchIndex]);
    // res.json(yourMatchphoto)
    // converstScores = [];


  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];
    console.log(friendData);
  });
};
