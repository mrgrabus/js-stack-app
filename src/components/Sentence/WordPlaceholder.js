import "./WordPlaceholder.css";

const WordPlaceholder = ({ clickedWord }) => {
  return (
    <div
      className={`${
        clickedWord !== "" ? "word-placeholder" : "placeholder-wrapper"
      }`}
    >
      <p>{clickedWord}</p>
    </div>
  );
};

export default WordPlaceholder;
