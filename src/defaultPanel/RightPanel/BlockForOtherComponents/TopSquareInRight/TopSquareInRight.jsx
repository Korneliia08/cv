import style from "./TopSquareInRight.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbtack} from "@fortawesome/free-solid-svg-icons";

const TopSquareInRight = () => {
    return (
        <div className={style.container}>
            <FontAwesomeIcon icon={faThumbtack} className={style.thumbtackIcon}/>
            <h5>My projects</h5>
            <h4>Projects with scripts: </h4>
            <a href="https://korneliia08.github.io/myBet/" target={"_blank"}>my bet</a>
            <a href="https://korneliia08.github.io/weather-forecast/" target={"_blank"}>forecast</a>
            <a href="https://korneliia08.github.io/deliciousCoffee/cart" target={"_blank"}>delicious coffee</a>
            <a href="https://korneliia08.github.io/shop/" target={"_blank"}>shop</a>
            <a href="https://korneliia08.github.io/toDoList2/" target={"_blank"}>to do list</a>
            <h4>Only templates, whithout script: </h4>
            <a href="https://korneliia08.github.io/giraffe-club/src/" target={"_blank"}>giraffe-club</a>
            <a href="https://korneliia08.github.io/roomDesign/" target={"_blank"}>room design</a>
            <a href="https://korneliia08.github.io/trafico/" target={"_blank"}>trafico</a>
            <a href="https://korneliia08.github.io/Rayal-Park/" target={"_blank"}>rayal park</a>
            <a href="https://korneliia08.github.io/yummi/" target={"_blank"}>yummi</a>
        </div>
    )
}
export default TopSquareInRight;
