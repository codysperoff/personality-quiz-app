/*--- Step 1 - Defining global variables ---*/

var questionsArray = [
//QUESTION 1
    {
        questionText: 'How many defensemen are on the ice at one time?',
        questionChoices: ['1', '2', '4', '5'],
        questionCorrectChoice: 2,
        correctDetails: 'There are 4 defensemen on the ice at one time: 2 for each team.'
    },

//QUESTION 2
    {
        questionText: 'What is a \"Gordie Howe\" hat trick?',
        questionChoices: ['When a player scores a goal, records an assist, and gets in a fight all in one game.', 'When a player scores 3 goals in one game.', 'When a player records 3 assists in one game.', 'When a player hits a goal in with his helmet out of mid-air'],
        questionCorrectChoice: 0,
        correctDetails: 'Gordie Howe made this special type of hat trick famous, though he himself only had 2.'
    },

//QUESTION 3
    {
        questionText: 'What does it mean to get a boarding penalty?',
        questionChoices: ['When an offending player pushes, trips, or checks an opposing player violently into the boards of the hockey rink.', 'When an offending player traps the puck along the boards for a time period of longer than 5 seconds.', 'When an offending player traps an opposing player along the boards.', 'When an offending player skates along the boards for too long in regulatory play.'],
        questionCorrectChoice: 0,
        correctDetails: 'When an offending player pushes, trips, or checks an opposing player violently into the boards of the hockey rink. While a player\'s intent may not be malicious, an example must be set.'
    },

//QUESTION 4
    {
        questionText: 'How many players are on the ice at one time?',
        questionChoices: ['10', '12', '5', '6'],
        questionCorrectChoice: 1,
        correctDetails: 'There are 12 players on the ice at one time: 1 center, 2 forwards, 2 defensemen, and 1 goalie for each team.'
    },

//QUESTION 5
    {
        questionText: 'How many teams are in the National Hockey League?',
        questionChoices: ['16', '14', '30', '32'],
        questionCorrectChoice: 2,
        correctDetails: 'There are 30 teams in the NHL.'
    }
];

var currentQuestionNumber = 0;
var totalNumberOfQuestion = questionsArray.length;
var totalNumberOfCorrectAnswers = 0;


/*--- Step 2 - Defining functions ---*/

//describes how the next question in the quiz is displayed
function questionDisplay() {

    //updates the question
    $('#question').text(questionsArray[currentQuestionNumber].questionText);

    //updates the choices
    //1. delete all current question choices
    $('#choices').empty();
    //2. obtain the total number of choices for the current question
    var numberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;
    //console.log(numberOfChoices);
    //3. iterate through answer choices, and add them to the question container
    for (var i = 0; i < numberOfChoices; i++) {
        //3.1 create a row of html for the new choice
        var buildEachChoiceHTML = "<input class='option' type='radio' value=" + i + " name='option'>" + questionsArray[currentQuestionNumber].questionChoices[i] + '<br>';
        //3.2 append that row into the choices container of the html
        $('#choices').append(buildEachChoiceHTML);
    }

    //display the current question number
    $('#questionNumberDisplay').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestion);
}

/*--- Step 3 - Using functions ---*/

$(document).ready(function () {

    /*Hide quiz and results section upon load*/
    $('.quiz-section').hide();
    $('.result-section').hide();

    /*when the start quiz button is clicked*/
    $('#startQuizButton').click(function () {

        //start the quiz and show the first question
        $('.result-section').hide();
        $('.start-section').hide();
        $('.quiz-section').show();

        //empty the result details container
        $('#result_msg').empty();
        questionDisplay();
    });

    /*Show the quiz questions*/
    $('.quiz-section').on('click', '.option', function () {

        //get the user's choice
        var userSelection = $("input[class='option']:checked").val();
        //get the correct answer choice from the question array
        var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;
        //compare the user choice with correct answer
        if (userSelection == correctAnswer) {
            totalNumberOfCorrectAnswers++;
        }
        //after the user selects an answer, diplay the question and correct answer details
        $('#result_msg').append("<h3>Q: " + questionsArray[currentQuestionNumber].questionText + "</h3>");
        $('#result_msg').append("<h4>A: " + questionsArray[currentQuestionNumber].correctDetails + "</h4>");

        //if the quiz is finished, show the result-section
        if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {
            //edit the results section to include the final score
            $('#finalScore').text(totalNumberOfCorrectAnswers + "/" + totalNumberOfQuestion);

            //show results and hide other containers
            $('.quiz-section').hide();
            $('.start-section').hide();
            $('.result-section').show();
        }
        //otherwise(if the quiz is not finished) continue to the next question
        else {
            //move on to the next question
            currentQuestionNumber++;
            //display that next question
            questionDisplay();
        }
    });

    //If the user wants to try again
    $('.result-section').on('click', '#tryagain', function () {
        $('.start-section').show();
        $('.quiz-section').hide();
        $('.result-section').hide();
        //reset variables to start quiz again
        currentQuestionNumber = 0;
        totalNumberOfCorrectAnswers = 0;
    });
});
