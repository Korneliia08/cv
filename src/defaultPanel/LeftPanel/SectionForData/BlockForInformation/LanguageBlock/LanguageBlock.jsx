import style from "./LanguageBlock.module.css";

const LanguageBlock = () => {
    return (
        <div className="containerForComponent">
            <h2 className="title">Languages:</h2>
            <div className={style.container}><span className="content">Ukrainian</span>
                <span className="content">Polish</span>
                <span className="content">English</span></div>
        </div>
    )
}
export default LanguageBlock;
