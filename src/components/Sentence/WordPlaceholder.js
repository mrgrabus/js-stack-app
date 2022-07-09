import "./WordPlaceholder.css";

const WordPlaceholder = ({ clickedWord, setClickedWord, popupState }) => {
  return (
    <div
      className={`${
        clickedWord !== "" ? "word-placeholder" : "placeholder-wrapper"
      }
      ${
        popupState.visible === true &&
        (popupState.success === true
          ? "blue-bg text-white"
          : "red-bg text-white")
      }`}
    >
      <p onClick={() => {setClickedWord("")}}>{clickedWord}</p>
    </div>
  );
};

export default WordPlaceholder;
