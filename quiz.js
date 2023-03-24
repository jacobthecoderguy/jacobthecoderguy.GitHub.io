// Load questions from JSON file
async function loadQuestions() {
    let response = await fetch("database.json");
    let data = await response.json();
    return data;
  }
  
  // Display question and answer input field
  function displayQuestion(question) {
    let questionElement = document.getElementById("question");
    alert(question[0]);
    questionElement.innerHTML = question[0];
    let answerElement = document.getElementById("answer");
    answerElement.value = "";
    answerElement.focus();
  }
  
  // Display quiz result
  function displayResult(isCorrect) {
    let resultElement = document.getElementById("result");
    if (isCorrect) {
      resultElement.innerHTML = "Correct!";
      resultElement.style.color = "green";
    } else {
      resultElement.innerHTML = "Incorrect!";
      resultElement.style.color = "red";
    }
  }
  
  // Main quiz function
  async function quiz() {
    let questions = await loadQuestions();
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      let question = questions[i];
      displayQuestion(question);
      let answerElement = document.getElementById("answer");
      let submitButton = document.getElementById("submit");
      let isAnswered = false;
      let isCorrect = false;
  
      // Wait for user to submit answer
      await new Promise(resolve => {
        submitButton.onclick = () => {
          let userAnswer = answerElement.value;
          if (!isAnswered) {
            isAnswered = true;
            isCorrect = userAnswer == question[1];
            score += isCorrect ? 1 : 0;
            displayResult(isCorrect);
            resolve();
          }
        };
      });
    }
  
    // Display final score
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your score is " + score + "out of " + questions.length + ".";
    resultElement.style.color = "black";
    }
    
    // Start quiz
alert("Loaded")
quiz();
