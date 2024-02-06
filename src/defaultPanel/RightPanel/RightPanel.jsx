import style from "./RightPanel.module.css";
import AboutMe from "./AboutMe/AboutMe";
import "./styleForRightPanel.css";
import Education from "./Education/Education";

const RightPanel = () => {
    return (
        <div className={style.container}>
            <AboutMe/>
            <Education/>
        </div>
    )
}
export default RightPanel;
