import style from "./LinksToSocialMedias.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const LinksToSocialMedias = () => {
    return (
        <div className={style.container}>
            <div className="containerForComponent">
                <h2 className="title">Links:</h2>
                <div className={style.container}>
                    <a href="https://github.com/Korneliia08" className={style.blockForLink}>
                        <span className="content">GitHub</span>
                        <FontAwesomeIcon icon={faGithub} className={style.gitHubIcon}/>
                    </a>
                    <a href="https://github.com/Korneliia08" className={style.blockForLink}>
                        <span className="content">LinkedIn</span>
                        <FontAwesomeIcon icon={faLinkedin} className={style.linkedInIcon}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default LinksToSocialMedias;
