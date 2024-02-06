import style from "./Education.module.css";
import EducationCard from "./EducationCard/EducationCard";

const Education = () => {
    return (
        <div className={style.container}>
            <h2 className="titleInRightPanel">Education</h2>
            <EducationCard/>
            <EducationCard/>
        </div>
    )
}
export default Education;
