import "./App.css";
import SmallCard from "./components/SmallCard/SmallCard";
import { AiOutlineUser } from "react-icons/ai";

function App() {
  return (
    <SmallCard
      title={"Etudiants"}
      num={"20+ "}
      icon={<AiOutlineUser size={30} />}
    />
  );
}

export default App;
