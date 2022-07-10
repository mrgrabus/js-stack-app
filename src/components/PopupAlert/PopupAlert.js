import flag from "../../assets/images/flag.svg";
import "./PopupAlert.css";

const PopupAlert = ({ correctWord, success, continueHandler }) => {
  return (
    <div className={`popup animate__animated animate__fadeInUpBig animate__faster ${success !== true ? "red-bg" : "blue-bg"}`}>
      <div className="popup-info">
        {success === true ? (
          <p>Great Job!</p>
        ) : (
          <p>
            Answer: <span>{correctWord}</span>
          </p>
        )}
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
