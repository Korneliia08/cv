import style from "./BlockForInformation.module.css";
import ContactBlock from "./ContactBlock/ContactBlock";
import LanguageBlock from "./LanguageBlock/LanguageBlock";
import './stylesForLeftPanel.css';

const BlockForInformation = () => {
    return (
        <div className={style.container}>
            <h1 className={style.nameSurname}>Korneliia Mushak </h1>
            <span className={style.titleOfSpacification}>Web developer</span>
            <ContactBlock/>
            <LanguageBlock/>
        </div>
    )
}
export default BlockForInformation;
