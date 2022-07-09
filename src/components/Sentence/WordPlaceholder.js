import "./WordPlaceholder.css";

const WordPlaceholder = ({ clickedWord, popupState }) => {
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
      <p>{clickedWord}</p>
    </div>
  );
};

export default WordPlaceholder;
