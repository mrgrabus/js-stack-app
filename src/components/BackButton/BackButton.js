import backsvg from "../../assets/images/chevron-left.svg";

const BackButton = ({ backAction }) => {
  return (
    <div
      onClick={() => {
        backAction();
      }}
      className="animate__animated animate__fadeInLeftBig animate__faster"
    >
      <img src={backsvg} className="white-filter" alt="backsvg" />
    </div>
  );
};

export default BackButton;
