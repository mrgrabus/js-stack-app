import Tooltip from "../Tooltip/Tooltip";

import "./Sentence.css"
import WordPlaceholder from "./WordPlaceholder";

const EnglishSentence = ({ englishSentence, germanSentence, correctWord, englishCorrectWord, clickedWord }) => {
  return (
    <>
      <div className="englishWrapper">
        <p>
          {englishSentence &&
            englishSentence.map((element) => (
              <span
                className={`${element === englishCorrectWord ? "color" : ""}`}
              >
                {element}
              </span>
            ))}
        </p>
      </div>
      <div className="germanWrapper">
          {germanSentence &&
            germanSentence.map((element, index) =>
              element === correctWord ? (
                <WordPlaceholder clickedWord={clickedWord}/>
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
