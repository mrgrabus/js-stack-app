import "./Tooltip.css";

const Tooltip = ({ germanWord, englishWord }) => {
  return (
    <div className="tooltip-wrapper">
      <div className="tooltip">
        <span className="tooltip-text">{englishWord}</span>
        <span>{germanWord}</span>
      </div>
    </div>
  );
};

export default Tooltip;
