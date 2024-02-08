import style from "./Education.module.css";
import EducationCard from "./EducationCard/EducationCard";

const Education = () => {
    const educationCard1 = {
        dateOfStart: "01.10.2019",
        dateOfEnd: "18.05.2023",
        title: "Engineer",
        school: "PANS (National Academy of Applied Sciences) in Jaroslav,Poland",
        rating: "4.5",
        description: "Completion of Specialized Courses in Front End Development at CBS Company in Ukraine",
    };
    const educationCard2 = {
        dateOfStart: "13.07.2023",
        dateOfEnd: "09.12.2023",
        title: "Front-end developer",
        school: "CBS(CyberBionic Systematics) in Ukraine",
        rating: "800/1000",
        description: "Completion of Specialized Courses in Front End Development at CBS Company in Ukraine",
    }
    return (
        <div className={style.container}>
            <h2 className="titleInRightPanel">Education</h2>
            <EducationCard data={educationCard1}/>
            <EducationCard data={educationCard2}/>
        </div>
    )
}
export default Education;
