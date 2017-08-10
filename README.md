# Friend-Finder


Simple survey app that matches users with a compatible friend based on the answers from a ten question survey.

User must fill out two fields on the form, their name and a picture. 

Below the form are ten questions that the user must fill out. Once the user clicks submit, a matching algorithm fetches your best match!

All fields must be filled out before submitting!

# Built With
* Node
* Express
* Body-Parser

# Comparison Algorithm
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




# Screenshots

Starting Page

![screenshot 29](https://user-images.githubusercontent.com/21977931/29145516-8a0bcef0-7d2b-11e7-97aa-b0f61ff0d4de.png)

Survey Page

Must fill out all fields before submitting, that means no unanswered questions

![screenshot 30](https://user-images.githubusercontent.com/21977931/29146003-507a76da-7d2d-11e7-8bb8-636d26e98276.png)

Results

When all fields are filled, clicking the submit button will yield the user's match

![screenshot 31](https://user-images.githubusercontent.com/21977931/29146167-dbb22fe0-7d2d-11e7-87c4-5a7768c8721e.png)
