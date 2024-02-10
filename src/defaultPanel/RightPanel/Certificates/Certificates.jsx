import style from "./Certificates.module.css";
import certificationReact from "../../../assets/images/certificationReact.jpeg";
import certificationReactAdvanced from "../../../assets/images/reactAdvanced.jpg";
import certificationHtml5Css3advanced from "../../../assets/images/html5&css3Advanced.jpg";
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
            <div className={style.blockForCertifications}>
                <img src={certificationReact} alt="certificationReact" onClick={desplayImage}/>
                <img src={certificationReactAdvanced} alt="certificationReactAdvanced" onClick={desplayImage}/>
                <img src={certificationHtml5Css3advanced} alt="certificationHtml5Css3advanced" onClick={desplayImage}/>
                <img src={certificationHtml5CssStarter} alt="certificationHtml5CssStarter" onClick={desplayImage}/>
                <img src={certificationJsStarter} alt="certificationJsStarter" onClick={desplayImage}/>
                <img src={certificationJsEssential} alt="certificationJsEssential" onClick={desplayImage}/>
                <img src={certificationGitBasics} alt="certificationGitBasics" onClick={desplayImage}/>
                {modalIsOpen ?
                    <ModalForImage dataFunction={setModalIsOpen} dataSrc={srcToImage} dataAlt={altText}/> : ""}
            </div>
        </div>
    )
}
export default Certificates;
