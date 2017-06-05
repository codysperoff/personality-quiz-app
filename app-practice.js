/*Step 1: Define the global variables*/

var questionsArray = [
    { //QUESTION 1
        questionText: 'How many defensemen are on the ice at one time?',
        questionChoices: ['1', '2', '4', '6'],
        questionCorrectChoice: 2,
        correctDetails: 'There are 4 defensemen on the ice at one time; two for each team.'
    },

    { //QUESTION 2
        questionText: 'Who is the oldest player in the NHL today?',
        questionChoices: ['Wayne Gretzky', 'Jaromir Jagr', 'Marian Hossa', 'Pavel Datsyuk'],
        questionCorrectChoice: 1,
        correctDetails: 'Jaromir Jagr is the oldest player in the league at 107.'
    },

    { //QUESTION 3
        questionText: 'What\'s the difference between me and you?',
        questionChoices: ['5 bank accounts, 3 ounces and 2 vehicles', 'a banana', 'an ounce of self-respect', 'a sense of dignity'],
        questionCorrectChoice: 0,
        correctDetails: 'Xzibit said it best: \"5 bank accounts, 3 ounces and 2 vehicles\"'
    },

    { //QUESTION 4
        questionText: 'Who\'s the best goalie?',
        questionChoices: ['Corey Crawford', 'Ben Bishop', 'Marc Andre-Fleury', 'Carey Price'],
        questionCorrectChoice: 0,
        correctDetails: 'While they are all good, gotta go with Crawdaddy.'
    },

    { //QUESTION 5
        questionText: 'Which hockey movie features Paul Newman?',
        questionChoices: ['Goon', 'Miracle', 'Slapshot', 'The Love Guru'],
        questionCorrectChoice: 2,
        correctDetails: 'The timeless classic \"Slapshot\"'
    }
];

var currentQuestionNumber = 0;
var totalNumberOfQuestions = questionsArray.length;
var totalCorrectAnswers = 0;
/*Step 2: Define functions*/

//function that displays the question
function questionDisplay() {

    //inputs the current questions
    $('#question').text(questionsArray[currentQuestionNumber].questionText);

    //inputs all possible answer choices

    //1. empty out all current choices
    $('#choices').empty();
    //2.iterate over each choice
    var numberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;
    for (var i = 0; i < numberOfChoices; i++) {
        //2.create HTML for each answer choice
        var buildChoiceHTML = "<input class='option' type='radio' value='" + i + "' name='option'>" + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>";
        //3. apppend HTML to container
        $('#choices').append(buildChoiceHTML);
    }

    //display the current Question Number
    $('#questionNumberDisplay').text('Question ' + (currentQuestionNumber + 1) + ' of ' + totalNumberOfQuestions);

}

/*Step3: Use functions*/

//Hide the quiz and results section when the page loads
$('.quiz-section').hide();
$('result-section').hide();

//if they click the start button, do this
$('#startQuizButton').click(function () {
    //show quiz section and hide other section
    $('.quiz-section').show();
    $('.result-section').hide();
    $('.start-section').hide();

    //empty the result details and run the function
    $('#result_msg').empty();
    questionDisplay();
});

//when the quiz questions begin
$('.quiz-section').on('click', '.option', function () {
    console.log('hockey');
    //store the user's choice to a variable
    var userChoice = $("input[class='option']:checked").val();
    console.log(userChoice);
    //store the correct answer choice from the current question
    var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;
    console.log(correctAnswer);
    //if the user's choice matches the answer
    if (userChoice == correctAnswer) {
        totalCorrectAnswers++;
    }

    //after the user chooses an answer, add the question and answer details to the result message
    $('#result_msg').append("<h3>Q: " + questionsArray[currentQuestionNumber].questionText + "</h3>");
    $('#result_msg').append("<h4>A: " + questionsArray[currentQuestionNumber].correctDetails + "</h4>");

    //if the quiz is finished, show the result section
    if ((currentQuestionNumber + 1) == totalNumberOfQuestions) {
        //hide quiz section and show results
        $('.start-section').hide();
        $('.quiz-section').hide();
        $('.result-section').show();

        //edit final score to include howmany questions they answered correctly
        $('#finalScore').text(totalCorrectAnswers + "/" + totalNumberOfQuestions);
    } else { //if they haven't finished the quiz yet
        //increment the question number(go on to the next question)
        currentQuestionNumber++;
        //run the function one more time
        questionDisplay();
    }
});

//if the user wants to try again
$('.result-section').on('click', '#tryagain', function () {
    //reset the values of the current question and the total correct answers
    currentQuestionNumber = 0;
    totalCorrectAnswers = 0;

    //hide result and quiz sections and show start section
    $('.start-section').show();
    $('.quiz-section').hide();
    $('.result-section').hide();
});
