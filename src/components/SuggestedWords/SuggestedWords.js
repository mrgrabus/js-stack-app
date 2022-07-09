import { useState } from "react";
import "./SuggestedWords.css";

const SuggestedWords = ({ words, setClickedWord, clickedWord }) => {
  const handleOnClick = (word) => {
    setClickedWord(word);
  };
  return (
    <>
      <div className="words-wrapper">
        {words &&
          words.map((word) => (
            <div
              className={`${clickedWord !== word ? "word" : "blank-word"}`}
              onClick={() => handleOnClick(word)}
            >
              {word}
            </div>
          ))}
      </div>
    </>
  );
};

export default SuggestedWords;
