import React, { useState, useEffect } from "react";
import axios from "axios";

const Otro = () => {
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get("/api/quiz"); // Endpoint del backend para obtener datos del quiz
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
            <strong>Pregunta:</strong> {question.text}
            <br />
            <strong>Respuesta:</strong> {question.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Otro;
