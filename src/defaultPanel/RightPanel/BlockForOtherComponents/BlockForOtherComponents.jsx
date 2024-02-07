import style from "./BlockForOtherComponents.module.css";
import BottomSquare from "./BottomSquare/BottomSquare";
import TopSquareInRight from "./TopSquareInRight/TopSquareInRight";
import BlockForDescriptionAboutProject from "./BlockForDescriptionAboutProject/BlockForDescriptionAboutProject";

const BlockForOtherComponents = () => {
    return (
        <div className={style.container}>
            <TopSquareInRight/>
            <BlockForDescriptionAboutProject/>
            <BottomSquare/>
        </div>
    )
}
export default BlockForOtherComponents;
