import style from "./SquareForImage.module.css";
import myImage from "../../../assets/images/myPhoto.jpg";


const SquareForImage = () => {
    return (
        <div className={style.container}>
            <img src={myImage} alt="my image"/>
        </div>
    )
}
export default SquareForImage;
