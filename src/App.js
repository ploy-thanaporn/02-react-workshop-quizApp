import { createContext, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <DataContext.Provider value={{ appState, setAppState, score, setScore }}>
      <div className="App">
        <h1>Web Development Quiz</h1>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;

// context ถูกนำมาใช้ในกรณีที่ต้องการประกาศ global variable ภายในแอพ ก็คือ ส่วนของ state
// ต้องการอยากให้ state ส่วนใดมีการเปลี่ยนแปลงค่า ระหว่างที่รันตัวแอพขึ้นมา
