import style from "./BottomSquare.module.css";
import korneliia from "./../../../../assets/images/korneliia.png"

const BottomSquare = () => {
    return (
        <div className={style.container}>
            <img className={style.image} src={korneliia}/>
        </div>
    )
}
export default BottomSquare;
