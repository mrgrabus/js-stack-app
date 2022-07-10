import "./SuggestedWords.css";

const SuggestedWords = ({ words, setClickedWord, clickedWord, currentSentence, popupState}) => {
  const handleOnClick = (word) => {
      const temp = [];
      clickedWord.map((item, index) => {
        if(index === currentSentence) {
          temp.push({ value: word});
        }
        else {
          temp.push(item);
        }
        return 1;
      })
      setClickedWord(temp);
  };
  return (
    <>
      <div className="words-wrapper">
        {words &&
          words.map((word) => (
            <div
              className={`${clickedWord[currentSentence].value !== word ? "word" : "blank-word"} ${popupState === true ? "thirty-transparent" : ""}`}
              onClick={() => handleOnClick(word)}
              key={word}
            >
              {word}
            </div>
          ))}
      </div>
    </>
  );
};

export default SuggestedWords;
