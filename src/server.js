/* const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("¡Hola mundo desde Express!");
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
======================================================================================================
*/
const express = require("express");
const app = express();
const PORT = 3000;

// Array de preguntas y respuestas del quiz
const quizData = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["París", "Madrid", "Londres", "Roma"],
    correctAnswer: "París",
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
    correctAnswer: "Amazonas",
  },
  {
    question: "¿Cuál es la capital de Alemania?",
    options: ["París", "Madrid", "Londres", "Berlin"],
    correctAnswer: "Berlin",
  },
  {
    question: "¿Cuál es la montaña más Alta del mundo?",
    options: ["Amazonas", "Nilo", "Everest", "Misisipi"],
    correctAnswer: "Everest",
  },
  // Aquí irían tus preguntas y respuestas
];

// Ruta para obtener todas las preguntas del quiz
app.get("/api/quiz", (req, res) => {
  res.json(quizData);
});

// Ruta para obtener una pregunta aleatoria del quiz
app.get("/api/quiz/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quizData.length);
  res.json(quizData[randomIndex]);
});

// Ruta para la raíz
app.get("/", (req, res) => {
  res.send("¡Bienvenido a la aplicación de quiz!");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
