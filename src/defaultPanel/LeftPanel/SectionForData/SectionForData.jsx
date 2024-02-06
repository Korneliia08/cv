import style from "./SectionForData.module.css";
import BlockForInformation from "./BlockForInformation/BlockForInformation";

const SectionForData = () => {
    return (
        <section className={style.container}>
            <BlockForInformation/>
        </section>
    )
}
export default SectionForData;
