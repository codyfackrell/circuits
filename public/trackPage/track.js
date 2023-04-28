// const trackPage = document.getElementById("track-info-section");
const pageTitle = document.getElementById("page-title");

// Retrieving Track Data
const retrieveTrack = () => {
  axios.get("http://localhost:4856/track")
  .then((res) => {
    let trackData = res.data;

    trackName = document.querySelectorAll(".track-title").forEach((element) => element.innerHTML = trackData.trackName)
    document.querySelector(".track-img").src=trackData.trackImg;
    document.querySelector(".carousel1").src=trackData.carousel1;
    document.querySelector(".carousel2").src=trackData.carousel2;
    document.querySelector(".carousel3").src=trackData.carousel3;
    document.querySelector(".location").innerHTML = trackData.location;
    document.querySelector(".type").innerHTML = trackData.type;
    document.querySelector(".capacity").innerHTML = trackData.capacity;
    document.querySelector(".distance").innerHTML = trackData.distance;
    document.querySelector(".surface").innerHTML = trackData.surface;
    document.querySelector(".events").innerHTML = trackData.events;
    document.querySelector(".opened").innerHTML = trackData.opened;
    document.getElementById("random1").innerHTML = trackData.random1;
    document.getElementById("random2").innerHTML = trackData.random2;
    document.getElementById("random3").innerHTML = trackData.random3;
  });
};

retrieveTrack();


 // Image Carousel Functionality
 const slides = document.querySelectorAll(".slide");
 const nextBtn = document.querySelector(".btn-next");
 const prevBtn = document.querySelector(".btn-prev");

 let curSlide = 0;
 let maxSlide = slides.length - 1;

 slides.forEach((slide, index) => {
   slide.style.transform = `translateX(${index * 100}%)`;
 });

 nextBtn.addEventListener("click", () => {
   curSlide === maxSlide ? (curSlide = 0) : curSlide++;

   slides.forEach((slide, index) => {
     slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
   });
 });

 prevBtn.addEventListener("click", () => {
   curSlide === 0 ? (curSlide = maxSlide) : curSlide--;

   slides.forEach((slide, index) => {
     slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
   });
 });



// Quiz Functionality
const retrieveQuiz = () => {
  axios.get("http://localhost:4856/trackQuiz")
  .then((res) => {
    const quizStartBtn = document.getElementById("quiz-start-btn");
    const questionContainer = document.getElementById("question-container");
    const questionNumber = document.getElementById("question-number");
    const quizQuestion = document.getElementById("quiz-question");
    const answerContainer = document.getElementById("quiz-answers");
    const quizNextBtn = document.getElementById("quiz-next-btn");

    let questions = res.data;
    let shuffledQuestions, currentQuestsionIndex;
    
    const startQuiz = () => {
      quizStartBtn.classList.add('hide');
      // shuffledQuestions = questions.sort(() => Math.random() - .5);
      currentQuestsionIndex = 0;
      questionContainer.classList.remove('hide');
      questionNumber.innerText = currentQuestsionIndex + 1
      nextQuestion()
    }
    
    quizStartBtn.addEventListener('click', startQuiz);

    quizNextBtn.addEventListener('click', () => {
      currentQuestsionIndex++;
      questionNumber.innerText = currentQuestsionIndex + 1
      nextQuestion()
    })

    const nextQuestion = () => {
      resetState();
      displayQuestion(questions[currentQuestsionIndex])
    }

    const resetState = () => {
      clearStatusClass(document.body); 
      quizNextBtn.classList.add('hide');
      while (answerContainer.firstChild) {
        answerContainer.removeChild(answerContainer.firstChild)
      }
    }

    const displayQuestion = (question) => {
      quizQuestion.innerText = question.question;

      question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.answer;
        button.classList.add("answer-btn");
        console.log(answer.isCorrect)
        if(answer.isCorrect) {
          button.dataset.correct = answer.isCorrect
        }
        button.addEventListener('click', selectAnswer);
        answerContainer.appendChild(button)
      })
    }

    const selectAnswer = (e) => {
      e.preventDefault(); 
      const selectedButton = e.target;
      const correct = selectedButton.dataset.correct
      setStatusClass(document.body, correct)
      Array.from(answerContainer.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
      })
      if(questions.length > currentQuestsionIndex + 1) {
        quizNextBtn.classList.remove('hide')
      } else {
        quizStartBtn.innerText = "Restart";
        quizStartBtn.classList.remove('hide')
      }
    }

    const setStatusClass = (element, correct) => {
      clearStatusClass(element)
      if(correct) {
        element.classList.add('correct')
      } else {
        element.classList.add('wrong')
      }
    };

    const clearStatusClass = (element) => {
      element.classList.remove('correct')
      element.classList.remove('wrong')
    }
  })
};

retrieveQuiz()