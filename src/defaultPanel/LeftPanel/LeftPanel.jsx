import style from "./LeftPanel.module.css";
import SmallSquareInTop from "./SmallSquareInTop/SmallSquareInTop";
import SquareForImage from "./SquareForImage/SquareForImage";
import SectionForData from "./SectionForData/SectionForData";

const LeftPanel = () => {
    return (
        <div className={style.container}>
            <SmallSquareInTop/>
            <SquareForImage/>
            <SectionForData/>
        </div>
    )
}
export default LeftPanel;
