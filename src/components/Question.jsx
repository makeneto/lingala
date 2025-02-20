import { useQuiz } from "../contexts/QuizContext";
import HighlightedQuestion from "./HighlightedQuestion";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  if (!question) return null; // Evita erro caso `questions` não esteja pronto

  return (
    <div>
      <HighlightedQuestion text={question.question} highlight={question.highlight} />
      <Options question={question} />
    </div>
  );
}

export default Question;
