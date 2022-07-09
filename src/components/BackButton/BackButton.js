import backsvg from "../../assets/images/chevron-left.svg"

const BackButton = ({backAction}) => {
    return <div onClick={() => {backAction()}}>
    <img src={backsvg} className="white-filter" alt="backsvg"/>
    </div>
}

export default BackButton;