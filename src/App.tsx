import React, { useState } from 'react';
import { QuestionCard } from './components/QuestionCard';
import { fetchQuestions, Difficulty, QuestionState } from './API';
import { GlobalStyle, Wrapper } from './App.styles';
// import './App.css'
import axios from 'axios'
import firebase from './firebase'

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {

  const [loader, setLoader] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);
  async function sendNotification() {
    const messaging = firebase.messaging();
    messaging.requestPermission()
    const token = await messaging.getToken();
    const response = await axios.post(
      'https://fcm.googleapis.com/fcm/send',
      {
        notification: {
          title: "Quize App",
          body: "Time For Check Your Iq,",
          click_action: "",
          icon: 'https://github.com/dawood6/project-7a-2/blob/master/public/quiz_3_192x192.png?raw=true',
        },
        "to": token
      },
      { headers: { 'Content-Type': 'application/json', 'Authorization': 'key=AAAAeSjObMc:APA91bGNv0TghabphtZPinizS1QEtSKriVrB_rVb9FBdXrKoBz_RbA7ELT4Bnx5ubhfwt_ZSKVmIMdbe2ZKNMBY4WnuhLC8crz41Q81QpKBolR9nAi7-bZJfGypKioyxJFSqD9G7winl' } }
    );
    console.log('Response: ', response);
  }
  setInterval(sendNotification(), 14400000)
  const startQuiz = async () => {
    setLoader(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoader(false);
  };

  const nextQuestion = async () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    }
    else {
      setNumber(nextQuestion);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore(prev => prev + 1)

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }

      setUserAnswers(prev => [...prev, answerObject])
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Trivia Quiz Made By Dawood Sadiq</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className='start' onClick={startQuiz}>
            Begin Quiz
          </button>) : null}
        {!gameOver ? (
          <p className='score'>
            Score: {score}
          </p>) : null}
        {loader ? (
          <div className="loader-div">
            <span className="loader">
              <span />
              <span />
            </span>
          </div>) : null}
        <div className="q-card">
          {!loader && !gameOver ? (
            <QuestionCard
              questionNum={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />) : null}
        </div>
        {!gameOver && !loader && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next
          </button>) : null}
      </Wrapper>
    </>
  );
}

export default App;