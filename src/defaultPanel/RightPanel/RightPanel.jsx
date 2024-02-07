import style from "./RightPanel.module.css";
import AboutMe from "./AboutMe/AboutMe";
import "./styleForRightPanel.css";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Certificates from "./Certificates/Certificates";

const RightPanel = () => {
    return (
        <div className={style.container}>
            <AboutMe/>
            <Education/>
            <Skills/>
            <Certificates/>
        </div>
    )
}
export default RightPanel;
