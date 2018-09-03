$(document).ready(function () {

    // Declare all globals
    var cysOne = Math.floor((Math.random() * 10) + 1);
    var cysTwo = Math.floor((Math.random() * 10) + 1);
    var cysThree = Math.floor((Math.random() * 10) + 1);
    var randomNum = Math.floor((Math.random() * 101) + 19);
    var cysScore = 0;
    var wins = 0;
    var loses = 0;

    // display the random number is the random num box
    $("#randomNumBox").html(randomNum);


    // functions for wins and loses
    function winScore() {
        alert("You Win")
        wins++;
        $("#wins").html(wins);
        cysScore = 0;
        $("#gameScore").html(cysScore);
        var randomNum = Math.floor((Math.random() * 101) + 19);
        $("#randomNumBox").html(randomNum);
        console.log(cysScore);
               
       
    }

    function loseScore() {
        alert("You Lose")
        loses++;
        $("#loses").html(loses);
        cysScore = 0;
        $("#gameScore").html(cysScore);
        var randomNum = Math.floor((Math.random() * 101) + 19);
        $("#randomNumBox").html(randomNum);
        console.log(cysScore);
        
        
    }

    // add the events for each button
    $("#blueBtn").click(function () {
        cysScore = cysOne + cysScore;
        $("#gameScore").html(cysScore);
        if (randomNum === cysScore) {
            winScore();
        } else if (randomNum < cysScore) {
            loseScore();
        }

    });

    $("#greenBtn").click(function () {
        cysScore = cysTwo + cysScore;
        $("#gameScore").html(cysScore);
        if (randomNum === cysScore) {
            winScore();
        } else if (randomNum < cysScore) {
            loseScore();
        }

    });

    $("#redBtn").click(function () {
        cysScore = cysThree + cysScore;
        $("#gameScore").html(cysScore);
        if (randomNum === cysScore) {
            winScore();
        } else if (randomNum < cysScore) {
            loseScore();
        }
    });


});