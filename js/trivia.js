/* Name: Mehdi & Christian
Basic Outline: 

A basic Multiple Choice Trivia Game
 
Click to Start

Timer begins at 60 seconds and countdown

Player goes through all 10 questions
player can only guess one answer per question

Once completed, player submit's answers
HTML is updated with users score
Score includes: time spent, answers correct, and answers wrong */

/*------------------------------------------------------------ */

var questions = [{
            ques: "What year did the space race start, as both sides announced plans to launch satellites into orbit?",
            ans: ["1951", "1952", "1954", "1955"],
            name: "year",
            correct: "1955",
            divClass: ".year"
        },
        {
            ques: "Which side launched the first artificial satellite into space?",
            ans: ["China", "South Korea", "U.S.S.R.", "US"],
            name: "side",
            correct: "U.S.S.R.",
            divClass: ".side"
        },
        {
            ques: "What does Sputnik mean?",
            ans: ["Survivor", "Philanthropist", "Travler", "Stuck"],
            name: "mean",
            correct: "Travler",
            divClass: ".mean"
        },
        {
            ques: "What did the Americans name their first satellite, which was launched in 1958?",
            ans: ["Explorer 1", "MichI", "Illseic", "Steveburnman"],
            name: "sat",
            correct: "Explorer 1",
            divClass: ".sat"
        },
        {
            ques: "When was NASA founded?",
            ans: ["1952", "1953", "1957", "1958"],
            name: "date2",
            correct: "1958",
            divClass: ".date2"
        },
        {
            ques: "American space pilots were called astronauts. What were Soviet space pilots called?",
            ans: ["Comradnauts", "Cosmonauts", "Brezhnevers", "Cocomans"],
            name: "called",
            correct: "Cosmonauts",
            divClass: ".called"
        },
        {
            ques: "What year did the Space Race end with the Apollo-Soyez joint program mission?",
            ans: ["1975", "1985", "1995", "2005"],
            name: "year2",
            correct: "1975",
            divClass: ".year2"
        },
        {
            ques: "Who was the first American in space?",
            ans: ["Andrew Jackson", "John Grey", "Alan Shepard", "Ranger Smith"],
            name: "firstam",
            correct: "Alan Shepard",
            divClass: ".firstam"
        },
        {
            ques: "Which president boldly claimed in 1961 that the U.S. would land a man on the moon by the end of the decade?",
            ans: ["Obama", "Kennedy", "Johnson", "Eisenhower"],
            name: "prez",
            correct: "Kennedy",
            divClass: ".prez"
        },
        {
            ques: "What is the name of the imaginary line that separates the Earth's atmosphere from outer space?",
            ans: ["National Divide", "Spacial Integration", "Karman Line", "Linear Gradient"],
            name: "divi",
            correct: "Karman Line",
            divClass: ".divi"
        }
    ]

var labels = ["first", "second", "third", "fourth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
    // loops through the 10 questions 
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        // loops through answers for each radio button
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


// function for countdown timer
var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    // click event for submit button to stop timer
    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    // once submit is clicked...
    // tests
    // stop timer
    countdown();
    // fade out questions
    $('.container').fadeOut(500);
    // show answerScreen
    $('#answerScreen').show();
    // display correctAnswers
    $('#correctScreen').append(correctAnswers);
    // display wrongAnswers
    $('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz