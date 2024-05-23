import CreateHistory from "./components/CreateHistory";
import MoneyHistoryList from "./components/MoneyHistoryList";
import MonthList from "./components/MonthList/MonthList";
import "./styles/App.css";

function App() {
  return (
    <>
      <CreateHistory />
      <MonthList />
      <MoneyHistoryList />
    </>
  );
}

export default App;
