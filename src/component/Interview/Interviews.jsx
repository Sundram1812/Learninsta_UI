import { styles } from "../../styles";
import QuestionLayout from "./QuestionLayout";
import SideBar from "./SideBar";

function Interviews() {
  return (
    <div className="bg-gray-900 py-6 min-h-[63vh] max-w-[98%] hide-scrollbar ">
      <QuestionLayout>
        <p className={styles.heroHeadText}>Please Select topics</p>
      </QuestionLayout>
    </div>
  );
}

export default Interviews;
