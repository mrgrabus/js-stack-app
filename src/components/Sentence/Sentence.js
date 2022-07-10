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
  currentSentence,
}) => {
  return (
    <>
      <div className="englishWrapper">
        {englishSentence &&
          englishSentence.map((element, index) => (
            <p
              className={`${
                element === englishCorrectWord ? "color bold" : ""
              }`}
              key={index}
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
                currentSentence={currentSentence}
                key={index}
              />
            ) : (
              <Tooltip
                germanWord={element}
                englishWord={englishSentence[index]}
                key={index}
              />
            )
          )}
      </div>
    </>
  );
};

export default EnglishSentence;
