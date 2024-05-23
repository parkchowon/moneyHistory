import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import CreateHistory from "../../components/CreateHistory";
import MoneyHistoryList from "../../components/MoneyHistoryList";
import MonthList from "../../components/MonthList/MonthList";
import useInput from "../../hooks/useInput";

function MainPage() {
  //날짜 초기값
  const today = new Date().toISOString().slice(0, 10);
  //Input값 저장
  const [date, dateHandler] = useInput(today);
  const [category, categoryHandler] = useInput("식비");
  const [amount, amountHandler] = useInput("");
  const [detail, detailHandler] = useInput("");
  //소비한 내역 저장하는 배열
  const [moneyDatas, setMoneyDatas] = useState([]);

  //등록버튼 누를 시
  const handleCreateHistory = (value, e) => {
    e.preventDefault();
    setMoneyDatas([
      ...moneyDatas,
      {
        id: v4,
        date: value.date,
        category: value.category,
        amount: value.amount,
        detail: value.detail,
      },
    ]);
  };

  useEffect(() => {
    console.log(moneyDatas);
  }, [moneyDatas]);

  return (
    <Wrapper>
      <CreateHistory
        date={date}
        dateHandler={dateHandler}
        category={category}
        categoryHandler={categoryHandler}
        amount={amount}
        amountHandler={amountHandler}
        detail={detail}
        detailHandler={detailHandler}
        handleCreateHistory={handleCreateHistory}
      />
      <MonthList />
      <MoneyHistoryList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainPage;
