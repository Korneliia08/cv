import style from "./ModalForImage.module.css";

const ModalForImage = (props) => {
    const dataFunction = props.dataFunction;
    const imgSrc = props.dataSrc;
    const altText = props.dataAlt;
    return (
        <>
            <div className={style.container}>
            <span className={style.close} onClick={() => {
                dataFunction(false)
            }}>X
            </span>
                <span>th6rszh5</span>
                <img src={imgSrc} alt={altText}/>
            </div>
            <div className={style.backgroundWhichBlock}></div>
        </>
    )
}
export default ModalForImage;
