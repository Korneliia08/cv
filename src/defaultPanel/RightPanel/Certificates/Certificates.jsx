import style from "./Certificates.module.css";
import certificationReact from "../../../assets/images/certificationReact.jpeg";
import certificationReactAdvanced from "../../../assets/images/certificationReactAdvanced.jpeg";
import certificationHtml5Css3advanced from "../../../assets/images/html5&css3advanced.jpeg";
import certificationHtml5CssStarter from "../../../assets/images/html5&cssStarter.jpg";
import certificationJsStarter from "../../../assets/images/JsStarter.jpg";
import certificationJsEssential from "../../../assets/images/jsEssential.jpg";
import certificationGitBasics from "../../../assets/images/gitBasics.jpg";
import {useState} from "react";
import ModalForImage from "./ModalForImage/ModalForImage";

const Certificates = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [srcToImage, setSrcToImage] = useState("");

    const [altText, setAltText] = useState("");

    function desplayImage(event) {
        setModalIsOpen(true);
        setSrcToImage(event.target.src);
        setAltText(event.target.alt);
    }

    return (
        <div className={style.container}>
            <h2 className="titleInRightPanel">Certificates</h2>
            <div className={style.blockForCertifications}><img src={certificationReact} alt="certificationReact"/>
                <img src={certificationReact} alt="certificationReact" onClick={desplayImage}/>
                <img src={certificationReactAdvanced} alt="certificationReactAdvanced"/>
                <img src={certificationHtml5Css3advanced} alt="certificationHtml5Css3advanced"/>
                <img src={certificationHtml5CssStarter} alt="certificationHtml5CssStarter"/>
                <img src={certificationJsStarter} alt="certificationJsStarter"/>
                <img src={certificationJsEssential} alt="certificationJsEssential"/>
                <img src={certificationGitBasics} alt="certificationGitBasics"/>
                {modalIsOpen ?
                    <ModalForImage dataFunction={setModalIsOpen} dataSrc={srcToImage} dataAlt={altText}/> : ""}
            </div>
        </div>
    )
}
export default Certificates;
