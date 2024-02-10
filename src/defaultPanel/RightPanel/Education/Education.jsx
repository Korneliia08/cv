import style from "./Education.module.css";
import EducationCard from "./EducationCard/EducationCard";

const Education = () => {
    const educationCard1 = {
        dateOfStart: "01.10.2019",
        dateOfEnd: "18.05.2023",
        title: "Engineer",
        school: "PANS (National Academy of Applied Sciences) in Jaroslav,Poland",
        rating: "4.5",
        description: "I graduated from the State Academy of Applied Sciences in Jarosław in 2023, obtaining the title of engineer. My educational experience at this university provided me with solid theoretical and practical foundations, enabling me to develop in the areas of my interests and acquire necessary professional skills.",
    };
    const educationCard2 = {
        dateOfStart: "13.07.2023",
        dateOfEnd: "09.12.2023",
        title: "Front-end developer",
        school: "CBS(CyberBionic Systematics) in Ukraine",
        rating: "860/1000",
        description: " I completed a Front-End course at CBS in Ukraine. This intensive program provided me with a wealth of valuable knowledge in user interface development. Not only did it deepen my practical skills, but it also significantly boosted my confidence in front-end development. I now feel much more competent and ready to tackle the challenges posed by the IT industry. I am grateful for this experience, which has had a profound impact on my future career endeavors.",
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
