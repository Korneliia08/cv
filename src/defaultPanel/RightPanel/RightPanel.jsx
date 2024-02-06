import style from "./RightPanel.module.css";
import AboutMe from "./AboutMe/AboutMe";
import "./styleForRightPanel.css";

const RightPanel = () => {
    return (
        <div className={style.container}>
            <AboutMe/>
        </div>
    )
}
export default RightPanel;
