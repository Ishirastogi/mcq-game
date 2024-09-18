import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Rome", "Madrid"],
      correctAnswer: 1,
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Hemingway", "Tolkien", "Rowling"],
      correctAnswer: 0,
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Saturn"],
      correctAnswer: 1,
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Osmium", "Oganesson", "Ozone"],
      correctAnswer: 0,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerSelect = (index) => {
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="quiz-container">
      {isFinished ? (
        <Result score={score} total={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswerSelect={handleAnswerSelect}
        />
      )}
    </div>
  );
};

export default Quiz;
