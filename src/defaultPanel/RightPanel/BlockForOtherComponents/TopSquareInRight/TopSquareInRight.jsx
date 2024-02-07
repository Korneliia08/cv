import style from "./TopSquareInRight.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbtack} from "@fortawesome/free-solid-svg-icons";

const TopSquareInRight = () => {
    return (
        <div className={style.container}>
            <FontAwesomeIcon icon={faThumbtack} className={style.thumbtackIcon}/>
            <h5>My projects</h5>
            <nav>
                <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">4</a>
                <a href="">5</a>
                <a href="">other</a>
            </nav>
        </div>
    )
}
export default TopSquareInRight;
