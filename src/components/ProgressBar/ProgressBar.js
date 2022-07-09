import "./ProgressBar.css";

const ProgressBar = ({width}) => {
    const MULTIPLER = 10;
  return (
    <div className="progressWrapper">
      <div className="bar" style={{width: `${width*MULTIPLER}%`}}></div>
    </div>
  );
};

export default ProgressBar;
