import style from "./EducationCard.module.css";

const EducationCard = (props) => {
    const data = props.data;
    return (
        <div className={style.container}>
            <div className={style.blockForAcademicDegreeAndRating}>
                <h3 className={style.titleDegree}>{data.title}</h3>
                <p className={style.school}>{data.school}<span>({data.rating})</span></p></div>
            <span className="dateOfEducation">{data.dateOfStart}-{data.dateOfEnd}</span>
            <p className="contentInRightPanel">{data.description}</p>
        </div>
    )
}
export default EducationCard;
