import style from "./BottomSquare.module.css";
import stopWar from "../../../../assets/images/stopWar.png";

const BottomSquare = () => {
    return (
        <div className={style.container}>
            <img src={stopWar} alt="stopWar"/>
        </div>
    )
}
export default BottomSquare;
