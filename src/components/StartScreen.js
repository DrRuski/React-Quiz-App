import { useQuiz } from "../context/QuizContext";

export default function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button onClick={() => dispatch({ type: "start" })} className="btn">
        Lets Start
      </button>
    </div>
  );
}
