import style from "./EducationCard.module.css";

const EducationCard = () => {
    return (
        <div className={style.container}>
            <div className={style.blockForAcademicDegreeAndRating}><h3>academic degree</h3>
                <p>School<span>(Rating)</span></p></div>
            <span className="dateOfEducation">08.08.2020-08.08.2020</span>
            <p className="contentInRightPanel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque,
                ex harum inventore ipsum magnam
                quasi similique soluta! Eligendi excepturi fuga molestias neque odio optio.</p>
        </div>
    )
}
export default EducationCard;
