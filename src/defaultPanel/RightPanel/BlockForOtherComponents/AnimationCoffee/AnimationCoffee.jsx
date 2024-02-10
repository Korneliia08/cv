import style from "./AnimationCoffee.module.css";

const AnimationCoffee = () => {
    return (
        <div className={style.container}>
            <div className={style.cupplate}></div>
            <div className={style.cup}></div>
            <div className={style.cuphandle}></div>
            <div className={style.steam}></div>
            <div className={style.steam2}></div>
            <div className={style.steam3}></div>
        </div>
    )
}
export default AnimationCoffee;
