import Tooltip from "../Tooltip/Tooltip";

import "./Sentence.css";
import WordPlaceholder from "./WordPlaceholder";

const EnglishSentence = ({
  englishSentence,
  germanSentence,
  correctWord,
  englishCorrectWord,
  clickedWord,
  setClickedWord,
  popupState,
}) => {
  return (
    <>
      <div className="englishWrapper">
        {englishSentence &&
          englishSentence.map((element) => (
            <p
              className={`${
                element === englishCorrectWord ? "color bold" : ""
              }`}
            >
              {element}
            </p>
          ))}
      </div>
      <div className="germanWrapper mt-20">
        {germanSentence &&
          germanSentence.map((element, index) =>
            element === correctWord ? (
              <WordPlaceholder
                clickedWord={clickedWord}
                setClickedWord={setClickedWord}
                popupState={popupState}
              />
            ) : (
              <Tooltip
                germanWord={element}
                englishWord={englishSentence[index]}
              />
            )
          )}
      </div>
    </>
  );
};

export default EnglishSentence;
