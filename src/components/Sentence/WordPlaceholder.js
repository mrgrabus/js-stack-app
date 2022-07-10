import "./WordPlaceholder.css";

const WordPlaceholder = ({ clickedWord, setClickedWord, popupState, currentSentence}) => {
  const clickHandler = () => {
    const temp = [];
    clickedWord.map((item, index) => {
      if(index === currentSentence) {
        temp.push({ value: ""});
      }
      else {
        temp.push(item);
      }
      return 1;
    })
    setClickedWord(temp);
  } 
  return (
    <div
      className={`${
        clickedWord[currentSentence].value !== "" ? "word-placeholder" : "placeholder-wrapper"
      }
      ${
        popupState.visible === true &&
        (popupState.success === true
          ? "blue-bg text-white"
          : "red-bg text-white")
      }`}
    >
      <p onClick={clickHandler}>{clickedWord[currentSentence].value}</p>
    </div>
  );
};

export default WordPlaceholder;
