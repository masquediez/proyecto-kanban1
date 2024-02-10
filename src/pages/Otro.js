import React, { useState, useEffect } from "react";
import axios from "axios";

const Otro = () => {
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/quiz"); // Cambia la URL según sea necesario
        setQuizData(response.data);
      } catch (error) {
        console.error("Error al obtener datos del quiz:", error);
      }
    };

    fetchQuizData();
  }, []);

  if (!quizData) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Quiz</h2>
      <ul>
        {quizData.map((question, index) => (
          <li key={index}>
            <strong>Pregunta:</strong> {question.question}
            <br />
            <strong>Respuestas:</strong>
            <ul>
              {question.options.map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ul>
            <strong>Respuesta correcta:</strong> {question.correctAnswer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Otro;
