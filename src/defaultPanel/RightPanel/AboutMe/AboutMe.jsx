import style from "./AboutMe.module.css";

const AboutMe = () => {
    return (
        <div className={style.container}>
            <h2 className="titleInRightPanel">About Me</h2>
            <p className="contentInRightPanel">
                My name is Korneliia Mushak and I am 23 years old. I come from Ukraine, but I completed my first-degree
                studies in Poland, obtaining the title of engineer. Subsequently, I undertook a course specializing in
                front-end development in the React framework in Ukraine. During this course, I was recognized as the
                <a href="https://edu.cbsystematics.com/ua/news/article/best-student-october-2023"> top-performing
                    student</a>. My creativity and passion for experimentation drive me to
                constantly seek
                innovative solutions in my work.

                I am currently seeking employment as a web developer.

                Outside of the IT industry, my interests include a passion for coffee, photography, and caring for
                animals – I have a favorite cat who is my closest companion. Time spent with loved ones is incredibly
                precious to me.

                I am someone who values teamwork and derives joy from programming. Contact with people is an important
                aspect of both my professional and personal life. My dream is to create websites, which serves as both a
                passion and a professional goal.
            </p>
        </div>
    )
}
export default AboutMe;
