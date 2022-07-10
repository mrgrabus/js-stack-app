import "./ActionButton.css";

const ActionButton = ({
  clickedWord,
  checkAnswer,
  continueHandler,
  currentSentence,
  backContinue,
}) => {
  const checkAnswerHandler = () => {
    if (clickedWord[currentSentence]?.value === "") {
      continueHandler();
    } else {
      checkAnswer();
    }
  };
  const previousContinueHandler = () => {
    backContinue();
  };
  return (
    <div className="action-wrapper">
      <div
        className={`action-button ${
          clickedWord[currentSentence]?.value !== "" ? "check-answer" : ""
        }`}
      >
        {currentSentence === clickedWord.length-1 ? (
          <button onClick={() => checkAnswerHandler()}>
            {clickedWord[currentSentence]?.value !== ""
              ? "CHECK ANSWER"
              : "CONTINUE"}
          </button>
        ) : (
          <button onClick={() => previousContinueHandler()}>CONTINUE</button>
        )}
      </div>
    </div>
  );
};

export default ActionButton;
