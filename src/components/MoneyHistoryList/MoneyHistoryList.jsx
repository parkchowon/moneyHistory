import { useContext } from "react";
import { MoneyContext } from "../../contexts/moneyContext";
import MoneyItem from "../MoneyItem";

function MoneyHistoryList() {
  const { checkedmonth } = useContext(MoneyContext);

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
