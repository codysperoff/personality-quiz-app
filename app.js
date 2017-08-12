/*--- Step 1 - Defining global variables ---*/

var questionsArray = [
//Extraverted
    {
        questionText: 'I see myself as extraverted and enthusiastic.',
        questionChoices: ['disagree strongly', 'disagree moderately', 'disagree a little', 'neither agree nor disagree', 'agree a little', 'agree moderately', 'agree strongly'],
        questionCorrectChoice: 2,
        correctDetails: 'There are 4 defensemen on the ice at one time: 2 for each team.'
    },

//Agreeableness
    {
        questionText: 'I see myself as sympathetic and warm.',
        questionChoices: ['disagree strongly', 'disagree moderately', 'disagree a little', 'neither agree nor disagree', 'agree a little', 'agree moderately', 'agree strongly'],
        questionCorrectChoice: 0,
        correctDetails: 'Gordie Howe made this special type of hat trick famous, though he himself only had 2.'
    },

//Conscientiousness
    {
        questionText: 'I see myself as dependable and self-disciplined.',
        questionChoices: ['disagree strongly', 'disagree moderately', 'disagree a little', 'neither agree nor disagree', 'agree a little', 'agree moderately', 'agree strongly'],
        questionCorrectChoice: 0,
        correctDetails: 'When an offending player pushes, trips, or checks an opposing player violently into the boards of the hockey rink. While a player\'s intent may not be malicious, an example must be set.'
    },

//Emotional Stability
    {
        questionText: 'I see myself as anxious and easily upset.',
        questionChoices: ['disagree strongly', 'disagree moderately', 'disagree a little', 'neither agree nor disagree', 'agree a little', 'agree moderately', 'agree strongly'],
        questionCorrectChoice: 1,
        correctDetails: 'There are 12 players on the ice at one time: 1 center, 2 forwards, 2 defensemen, and 1 goalie for each team.'
    },

//Openness to new experiences
    {
        questionText: 'I see myself being open to new experiences',
        questionChoices: ['disagree strongly', 'disagree moderately', 'disagree a little', 'neither agree nor disagree', 'agree a little', 'agree moderately', 'agree strongly'],
        questionCorrectChoice: 2,
        correctDetails: 'There are 30 teams in the NHL.'
    },

//Extraverted Opposite
    {
        questionText: 'I see myself as reserved and quiet.',
        questionChoices: ['agree strongly', 'agree moderately', 'agree a little', 'neither agree nor disagree', 'disagree a little', 'disagree moderately', 'disagree strongly'],
        questionCorrectChoice: 2,
        correctDetails: 'There are 30 teams in the NHL.'
    },

//Agreeableness Opposite
    {
        questionText: 'I see myself as critical and quarrelsome.',
        questionChoices: ['agree strongly', 'agree moderately', 'agree a little', 'neither agree nor disagree', 'disagree a little', 'disagree moderately', 'disagree strongly'],
        questionCorrectChoice: 2,
        correctDetails: 'There are 30 teams in the NHL.'
    },

//Conscientiousness Opposite
    {
        questionText: 'I see myself as disorganized and careless.',
        questionChoices: ['agree strongly', 'agree moderately', 'agree a little', 'neither agree nor disagree', 'disagree a little', 'disagree moderately', 'disagree strongly'],
        questionCorrectChoice: 2,
        correctDetails: 'There are 30 teams in the NHL.'
    },

//Emotional Stability Opposite
    {
        questionText: 'I see myself as calm and emotionally stable.',
        questionChoices: ['agree strongly', 'agree moderately', 'agree a little', 'neither agree nor disagree', 'disagree a little', 'disagree moderately', 'disagree strongly'],
        questionCorrectChoice: 2,
        correctDetails: 'There are 30 teams in the NHL.'
    },

//Openness to new xperiences Opposite
    {
        questionText: 'I see myself as conventional and uncreative.',
        questionChoices: ['agree strongly', 'agree moderately', 'agree a little', 'neither agree nor disagree', 'disagree a little', 'disagree moderately', 'disagree strongly'],
        questionCorrectChoice: 2,
        correctDetails: 'There are 30 teams in the NHL.'
    }

];

var currentQuestionNumber = 0;

var totalNumberOfQuestion = questionsArray.length;

var extravertScore = 0;
var agreeablenessScore = 0;
var conscientiousnessScore = 0;
var emotionalStabilityScore = 0;
var opennessScore = 0;


//var totalNumberOfCorrectAnswers = 0;


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

        //if its the first or sixth question, add the score to extravertScore
        //if its the second or seventh question, add the score to agreeablenessScore
        //if its the third or eighth question, add the score to conscientiousnessScore
        //if its the fourth or ninth question, add the score to emotionalStabilityScore
        //if its the fifth or tenth question, add the score to opennessScore

        if (currentQuestionNumber == 0 || currentQuestionNumber == 5) {
            extravertScore += (userSelection + 1);
        } else if (currentQuestionNumber == 1 || currentQuestionNumber == 6) {
            agreeablenessScore += (userSelection + 1);
        } else if (currentQuestionNumber == 2 || currentQuestionNumber == 7) {
            conscientiousnessScore += (userSelection + 1);
        } else if (currentQuestionNumber == 3 || currentQuestionNumber == 8) {
            emotionalStabilityScore += (userSelection + 1);
        } else {
            opennessScore += (userSelection + 1);
        }



        //get the correct answer choice from the question array
        //        var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;


        //        //compare the user choice with correct answer
        //        if (userSelection == correctAnswer) {
        //            totalNumberOfCorrectAnswers++;
        //        }
        //        //after the user selects an answer, diplay the question and correct answer details
        //        $('#result_msg').append("<h3>Q: " + questionsArray[currentQuestionNumber].questionText + "</h3>");
        //        $('#result_msg').append("<h4>A: " + questionsArray[currentQuestionNumber].correctDetails + "</h4>");

        //if the quiz is finished, show the result-section
        if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {
            //calculate the scores
            extravertScore = extravertScore / 2;
            agreeablenessScore = agreeablenessScore / 2;
            conscientiousnessScore = conscientiousnessScore / 2;
            emotionalStabilityScore = emotionalStabilityScore / 2;
            opennessScore = opennessScore / 2;

            //display scores and links to wikipedia sites.

            $('#result_msg').append("Extraversion: " + extravertScore + ". More information about extraversion can be found <a href='https://en.wikipedia.org/wiki/Big_Five_personality_traits#Extraversion'>here</a>. <br>");
            $('#result_msg').append("<br>");
            $('#result_msg').append("Agreeableness: " + agreeablenessScore + ". More information about agreeableness can be found <a href='https://en.wikipedia.org/wiki/Big_Five_personality_traits#Agreeableness'>here</a>.<br>");
            $('#result_msg').append("<br>");
            $('#result_msg').append("Conscientiousness: " + conscientiousnessScore + ". More information about conscientiousness can be found <a href='https://en.wikipedia.org/wiki/Big_Five_personality_traits#Conscientiousness'>here</a>.<br>");
            $('#result_msg').append("<br>");
            $('#result_msg').append("Emotional Stabiliy: " + emotionalStabilityScore + ". More information about emotional stability can be found <a href='https://en.wikipedia.org/wiki/Big_Five_personality_traits#Neuroticism'>here</a>.<br>");
            $('#result_msg').append("<br>");
            $('#result_msg').append("Openness to experience: " + opennessScore + ". More information about openness can be found <a href='https://en.wikipedia.org/wiki/Big_Five_personality_traits#Openness_to_experience'>here</a>.<br>");

            //edit the results section to include the final score
            //            $('#finalScore').text(totalNumberOfCorrectAnswers + "/" + totalNumberOfQuestion);

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
