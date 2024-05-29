import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MoneyItem from "../MoneyItem";

function MoneyHistoryList() {
  const moneyLists = useSelector((state) => state.money.moneys);
  const month = useSelector((state) => state.money.selectedMonth);

  const [checkedmonth, setCheckedmonth] = useState([]);

  //moneyLists 바뀌면 list 리렌더링
  useEffect(() => {
    if (moneyLists.length !== 0) {
      const filteredDatas = moneyLists.filter((data) => {
        return `${data.date.split("-")[1]}` == month;
      });
      setCheckedmonth(filteredDatas);
    }
  }, [moneyLists, month]);

  useEffect(() => {
    if (moneyLists.length !== 0) {
      const filteredDatas = moneyLists.filter((data) => {
        return `${data.date.split("-")[1]}` == month;
      });
      setCheckedmonth(filteredDatas);
    }
  }, []);

  return (
    <div>
      <div></div>
      {checkedmonth.map((data) => {
        return <MoneyItem key={data.id} moneyDatas={data} />;
      })}
    </div>
  );
}

export default MoneyHistoryList;
