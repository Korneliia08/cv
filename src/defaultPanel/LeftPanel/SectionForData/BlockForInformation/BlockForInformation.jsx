import style from "./BlockForInformation.module.css";
import ContactBlock from "./ContactBlock/ContactBlock";
import LanguageBlock from "./LanguageBlock/LanguageBlock";
import './stylesForLeftPanel.css';
import LinksToSocialMedias from "./LinksToSocialMedias/LinksToSocialMedias";
import BlockOfHobby from "./BlockOfHobby/BlockOfHobby";

const BlockForInformation = () => {
    return (
        <div className={style.container}>
            <h1 className={style.nameSurname}>Korneliia Mushak </h1>
            <span className={style.titleOfSpacification}>Web developer</span>
            <ContactBlock/>
            <LanguageBlock/>
            <LinksToSocialMedias/>
            <BlockOfHobby/>
        </div>
    )
}
export default BlockForInformation;
