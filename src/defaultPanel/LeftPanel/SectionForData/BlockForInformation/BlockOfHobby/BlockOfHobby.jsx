import style from "./BlockOfHobby.module.css";

const BlockOfHobby = () => {
    return (
        <div className={style.container}>
            <div className="containerForComponent">
                <h2 className="title">My hobby:</h2>
                <div className={style.container}><span className="content">photography</span>
                    <span className="content">billiards</span>
                    <span className="content">diamond mosaic</span>
                    <span className="content">badminton</span></div>
            </div>
        </div>
    )
}
export default BlockOfHobby;
