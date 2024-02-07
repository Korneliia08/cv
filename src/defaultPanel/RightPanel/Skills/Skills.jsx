import style from "./Skills.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faFigma,
    faGitAlt,
    faGithub,
    faGulp,
    faHtml5,
    faJs,
    faNodeJs,
    faReact,
    faSass
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
    return (
        <div className={style.container}>
            <h2 className="titleInRightPanel">Skills</h2>
            <div className={style.containerForAllIcons}>
                <div className={style.blockForIcon}>
                    <FontAwesomeIcon icon={faHtml5} className={style.htmlIcon}/>
                    <span className={style.titleOfSkill}>html5</span>
                </div>
                <div className={style.blockForIcon}>
                    <FontAwesomeIcon icon={faCss3Alt} className={style.cssIcon}/>
                    <span className={style.titleOfSkill}>css3</span>
                </div>
                <div className={style.blockForIcon}>
                    <FontAwesomeIcon icon={faSass} className={style.scssIcon}/>
                    <span className={style.titleOfSkill}>scss</span>
                </div>
                <div className={style.blockForIcon}>
                    <FontAwesomeIcon icon={faJs} className={style.jsIcon}/>
                    <span className={style.titleOfSkill}>javascript</span>
                </div>
                <div className={style.blockForIcon}>
                    <img src={'https://cdn.simpleicons.org/npm'}/>
                    <span className={style.titleOfSkill}>npm</span>
                </div>
                <div className={style.blockForIcon}>
                    <FontAwesomeIcon icon={faGitAlt} className={style.gitIcon}/>
                    <span className={style.titleOfSkill}>git</span>
                </div>
                <div className={style.blockForIcon}>
                    <FontAwesomeIcon icon={faGithub} className={style.gitHubIcon}/>
                    <span className={style.titleOfSkill}>github</span>
                </div>
                <div className={style.blockForIcon}>
                    <FontAwesomeIcon icon={faReact} className={style.reactIcon}/>
                    <span className={style.titleOfSkill}>react</span>
                </div>
                <div className={style.blockForIcon}>
                    <img src={'https://cdn.simpleicons.org/redux'}/>
                    <span className={style.titleOfSkill}>redux toolkit</span>
                </div>
                <div className={style.blockForIcon}>
                    <FontAwesomeIcon icon={faFigma} className={style.figmaIcon}/>
                    <span className={style.titleOfSkill}>figma</span>
                </div>
                <div className={style.blockForIcon}>
                    <img src={'https://cdn.simpleicons.org/mysql/green'}/>
                    <span className={style.titleOfSkill}>mySql</span>
                </div>
                <div className={style.blockForIcon}>
                    <FontAwesomeIcon icon={faNodeJs} className={style.nodeJsIcon}/>
                    <span className={style.titleOfSkill}>node.js</span>
                </div>
                <div className={style.blockForIcon}>
                    <FontAwesomeIcon icon={faGulp} className={style.gulpIcon}/>
                    <span className={style.titleOfSkill}>gulp</span>
                </div>
            </div>
        </div>
    )
}
export default Skills;
