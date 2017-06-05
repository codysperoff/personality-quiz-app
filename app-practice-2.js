//Step 1: Define Global variables
var questionsArray = [
//Question 1
    {
        questionText: "What is Chicago's hockey team called?",
        questionChoices: ['Jets', 'Apples', 'The Wind', 'Blackhawks'],
        correctQuestionChoice: 3,
        correctDetails: "Chicago's hockey team name is the Blackhawks."
    },
//Question 2
    {
        questionText: "Who is not a defenseman on the Blackhawks currently",
        questionChoices: ['Duncan Keith', 'Johnny Oduya', 'Brent Seabrook', 'Brian Campbell'],
        correctQuestionChoice: 1,
        correctDetails: "Johnny Oduya used to be on the blackhawks but now plays for the Dallas Stars"
    },
//Question 3
    {
        questionText: "Which city does not have a hockey team",
        questionChoices: ['Dover', 'Boston', 'Detroit', 'San Jose'],
        correctQuestionChoice: 0,
        correctDetails: "Dover. the capital of Delaware, does not have an NHL hockey team, but does have a team in the FHL."
    },
//Question 4
    {
        questionText: "In what year did the United States win a gold medal in 'Men's Ice Hockey' at the olympics?",
        questionChoices: ['2002', '1980', '1976', '1988'],
        correctQuestionChoice: 1,
        correctDetails: "The U.S. Hockey team won a gold medal in 1980 defeating the U.S.S.R. Disney made a movie called 'Miracle' which portrays their story."
    },
//Question 5
    {
        questionText: "What does the NHL stand for?",
        questionChoices: ['New Hockey League', 'Naional Hockey League', 'Notorious Hockey Load', 'Nocturnal Hockey Land'],
        correctQuestionChoice: 1,
        correctDetails: "It's the National Hockey League."
    }
];

var currentQuestionNumber = 0;
var totalNumberOfQuestions = questionsArray.length;
var totalAnswersCorrect = 0;

//Step 2: Create Usable Functions

//function that displays the question
function questionDisplay() {
    //inputs current question
    $('#question').text(questionsArray[currentQuestionNumber].questionText);

    //diaplys answer choices
    //1. emptys out the current available choices
    $('#choices').empty();

    //2. inputs new possible choices by iterating over each choice
    var numberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;
    for (var i = 0; i < numberOfChoices; i++) {
        //2.1. creates the html for each choice
        var buildChoiceHTML = "<input class='option' type='radio' value='" + i + "' name='option'>" + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>";
        //2.2. appends the new possible choices the choices class
        $('#choices').append(buildChoiceHTML);
    }

    //3. Displays current question number
    $('#questionNumberDisplay').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestions);

}

//Step 3: Use functions
//using the start-section

//hide all quiz and results sections when the page loads up
$('.quiz-section').hide();
$('.result-section').hide();

//if the start button is clicked do this
$('#startQuizButton').click(function () {

    //show quiz section, hide other sections
    $('.quiz-section').show();
    $('.start-section').hide();
    $('.result-section').hide();

    //empty the results message section
    $('#result_msg').empty();
    //run display function
    questionDisplay();

});

//when a user selects an answer
$('.quiz-section').on('click', '.option', function () {

    //compare the user's choice to the correct answer
    var userChoice = $("input[class='option']:checked").val();
    var correctAnswer = questionsArray[currentQuestionNumber].correctQuestionChoice;

    //if they're the same, increment totalAnswersCorrect
    if (userChoice == correctAnswer) {
        totalAnswersCorrect++;
    }

    //add the correct details into the results message
    $('#result_msg').append("<h3>Q: " + questionsArray[currentQuestionNumber].questionText + "</h3>");
    $('#result_msg').append("<h4>A: " + questionsArray[currentQuestionNumber].correctDetails + "</h4>");


    //if the quiz is finished
    if ((currentQuestionNumber + 1) == totalNumberOfQuestions) {

        //hide the quiz section and display results
        $('.quiz-section').hide();
        $('.start-section').hide();
        $('.result-section').show();

        //display score
        $('#finalScore').text(totalAnswersCorrect + "/" + totalNumberOfQuestions);
    } else { //increase the current question number, run question display again
        currentQuestionNumber++;
        questionDisplay();
    }
});

//if the user would like to try again
$('#tryagain').click(function () {
    //reset all of global variables
    currentQuestionNumber = 0;
    totalAnswersCorrect = 0;

    //hide results and show quiz section
    $('.start-section').show();
    $('.quiz-section').hide();
    $('.result-section').hide();
});
