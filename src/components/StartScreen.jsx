import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Bem-vindo ao Lingala Quiz!</h2>
      <h3>{numQuestions} perguntas para testar seu aprendizado em Lingala!</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Vamos começar
      </button>
    </div>
  );
}

export default StartScreen;
