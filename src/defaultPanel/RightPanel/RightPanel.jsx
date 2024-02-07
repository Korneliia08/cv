import style from "./RightPanel.module.css";
import AboutMe from "./AboutMe/AboutMe";
import "./styleForRightPanel.css";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Certificates from "./Certificates/Certificates";
import BlockForOtherComponents from "./BlockForOtherComponents/BlockForOtherComponents";

const RightPanel = () => {
    return (
        <div className={style.container}>
            <div className={style.mainComponents}>
                <AboutMe/>
                <Education/>
                <Skills/>
                <Certificates/>
            </div>
            <BlockForOtherComponents/>
        </div>
    )
}
export default RightPanel;
