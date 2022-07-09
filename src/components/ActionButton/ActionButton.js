import "./ActionButton.css";

const ActionButton = ({ clickedWord, checkAnswer, continueHandler }) => {
  const checkAnswerHandler = () => {
      if(clickedWord === "") {
        continueHandler();
      } else {
          checkAnswer();
      }  
  };
  return (
    <div className="action-wrapper">
      <div
        className={`action-button ${clickedWord !== "" ? "check-answer" : ""}`}
      >
        <button onClick={() => checkAnswerHandler()}>
          {clickedWord !== "" ? "CHECK ANSWER" : "CONTINUE"}
        </button>
      </div>
    </div>
  );
};

export default ActionButton;
