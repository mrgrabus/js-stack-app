import flag from "../../assets/images/flag.svg";
import "./PopupAlert.css";

const PopupAlert = ({ correctWord, success, continueHandler }) => {
  console.log(success)
  return (
    <div className={`popup ${success !== true ? "red-bg" : "blue-bg"}`}>
      <div className="popup-info">
        {success == true ? <p>Great Job!</p> : <p>Answer: {correctWord}</p>}
        <img src={flag} alt="flag" className="white-filter" />
      </div>
      <button
        className={`${success !== true ? "red-text" : "blue-text"}`}
        onClick={() => {
          continueHandler();
        }}
      >
        CONTINUE
      </button>
    </div>
  );
};

export default PopupAlert;
