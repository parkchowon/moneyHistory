import MoneyItem from "../MoneyItem";

function MoneyHistoryList({ moneyDatas }) {
  return (
    <div>
      <div></div>
      {moneyDatas.map((data) => {
        return <MoneyItem key={data.id} moneyDatas={data} />;
      })}
    </div>
  );
}

export default MoneyHistoryList;
