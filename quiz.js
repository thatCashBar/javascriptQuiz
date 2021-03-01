let quizScore = 0;
let questionInputArr = [];
let questionsMissedArr = [];
let answersArr = 
[
    "Windows",
    "2007",
    "8",
    "kilobyte",
    "No",
    "HyperText Transfer Protocol",
    "Cascading Style Sheets",
    "Hotmail",
    "Browsers",
    "Twitter"
];

let answerOne = prompt("What is the name of the Operating System produced by Microsoft?");
answerOne.toLowerCase();
questionInputArr.push(answerOne);
let answerTwo = prompt("What year was the very first model of the iPhone released?");
answerTwo.toLowerCase();
questionInputArr.push(answerTwo);
let answerThree = prompt("How many 'bits' are in one 'byte'?");
answerThree.toLowerCase();
questionInputArr.push(answerThree);
let answerFour = prompt("What is often seen as the smallest unit of memory?");
answerFour.toLowerCase();
questionInputArr.push(answerFour);
let answerFive = prompt("Is Java a type of Operating System?");
answerFive.toLowerCase();
questionInputArr.push(answerFive);
let answerSix = prompt("What does “HTTP” stand for?");
answerSix.toLowerCase();
questionInputArr.push(answerSix);
let answerSeven = prompt("What does CSS stand for in web development?");
answerSeven.toLowerCase();
questionInputArr.push(answerSeven);
let answerEight = prompt("Which email service is owned by Microsoft?");
answerEight.toLowerCase();
questionInputArr.push(answerEight);
let answerNine = prompt("Google Chrome, Safari, Firefox, and Explorer are different types of what?");
answerNine.toLowerCase();
questionInputArr.push(answerNine);
let answerTen = prompt("What was Twitter’s original name?");
answerTen.toLowerCase();
questionInputArr.push(answerTen);

function GradeQuestion(question)
{
    switch(question) {
        case answerOne:
            if (answerOne == answersArr[0].toLowerCase())
            {
                quizScore += 10;
            }
            else
            {
                questionsMissedArr.push(1);
            }
            break;
        case answerTwo:
            if (answerTwo == answersArr[1].toLowerCase())
            {
                quizScore += 10;
            }
            else
            {
                questionsMissedArr.push(2);
            }
            break;
        case answerThree:
            if (answerThree == answersArr[2].toLowerCase())
            {
                quizScore += 10;
            }
            else
            {
                questionsMissedArr.push(3);
            }
          break;
        case answerFour:
            if (answerFour == answersArr[3].toLowerCase())
            {
                quizScore += 10;
            }
            else
            {
                questionsMissedArr.push(4);
            }
          break;
        case answerFive:
            if (answerFive == answersArr[4].toLowerCase())
            {
                quizScore += 10;
            }
            else
            {
                questionsMissedArr.push(5);
            }
          break;
        case answerSix:
            if (answerSix == answersArr[5].toLowerCase())
            {
                quizScore += 10;
            }
            else
            {
                questionsMissedArr.push(6);
            }
          break;
        case answerSeven:
            if (answerSeven == answersArr[6].toLowerCase())
            {
                quizScore += 10;
            }
            else
            {
                questionsMissedArr.push(7);
            }
          break;
        case answerEight:
            if (answerEight == answersArr[7].toLowerCase())
            {
                quizScore += 10;
            }
            else
            {
                questionsMissedArr.push(8);
            }
          break;
        case answerNine:
            if (answerNine == answersArr[8].toLowerCase())
            {
                quizScore += 10;
            }
            else
            {
                questionsMissedArr.push(9);
            }
          break;
        case answerTen:
            if (answerTen == answersArr[9].toLowerCase())
            {
                quizScore += 10;
            }
            else
            {
                questionsMissedArr.push(10);
            }
          break;
      }
}

function GradeQuiz()
{
    GradeQuestion(answerOne);
    GradeQuestion(answerTwo);
    GradeQuestion(answerThree);
    GradeQuestion(answerFour);
    GradeQuestion(answerFive);
    GradeQuestion(answerSix);
    GradeQuestion(answerSeven);
    GradeQuestion(answerEight);
    GradeQuestion(answerNine);
    GradeQuestion(answerTen);

    console.log("\nQuiz Completed!");
    console.log(`You scored ${quizScore}/100`);

    if (quizScore == 100)
    {
        console.log("Great Job!");
    }
    else
    {
        console.log("Questions Missed:");
        for (i = 0; i < questionsMissedArr.length; i++)
        {
            console.log(`Question #${questionsMissedArr[i]}`);
            console.log(`You answered: ${questionInputArr[questionsMissedArr[i]]}`);
            console.log(`The Correct Answer is: "${answersArr[questionsMissedArr[i]]}"`);
        }
    }
}

GradeQuiz();