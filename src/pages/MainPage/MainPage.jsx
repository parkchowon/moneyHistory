import CreateHistory from "@/components/CreateHistory";
import MoneyHistoryList from "@/components/MoneyHistoryList";
import MonthList from "@/components/MonthList/MonthList";
import useInput from "@/hooks/useInput";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

function MainPage() {
  //날짜 초기값
  const today = new Date().toISOString().slice(0, 10);
  //Input값 저장
  const [date, dateHandler] = useInput(today);
  const [category, categoryHandler] = useInput("식비");
  const [amount, amountHandler, setAmountBlank] = useInput("");
  const [detail, detailHandler, setDetailBlank] = useInput("");
  //소비한 내역 저장하는 배열
  const [moneyDatas, setMoneyDatas] = useState(() => {
    const moneylist = JSON.parse(localStorage.getItem("moneylist"));
    if (moneylist !== null) {
      return moneylist;
    } else {
      return [];
    }
  });

  const [monthList, setMonthList] = useState([]);
  const [checkedmonth, setCheckedmonth] = useState([]);

  //유효성 검사 실패시 문구
  const [failText, setFailText] = useState("");

  //moneyDatas 바뀌면 list 리렌더링
  useEffect(() => {
    if (moneyDatas.length !== 0) {
      const id = moneyDatas[moneyDatas.length - 1].date.split("-")[1];
      const filteredDatas = moneyDatas.filter((data) => {
        return `${data.date.split("-")[1]}` == id;
      });
      localStorage.setItem("moneylist", JSON.stringify(moneyDatas));
      setCheckedmonth([...filteredDatas]);
    }
  }, [moneyDatas]);

  /** CreateHistory 컴포넌트 기능 */

  //등록버튼 누를 시
  const handleCreateHistory = (value, e) => {
    e.preventDefault();
    const year = value.date.split("-")[0];
    //유효성 검사
    if (value.amount === "") {
      setFailText("금액을 입력해주세요.");
    } else if (year < 2000 || year.length !== 4) {
      setFailText("연도를 올바르게 입력해주세요.");
    } else if (!+value.amount) {
      setFailText("금액에는 숫자를 입력해주세요.");
    } else if (value.detail === "") {
      setFailText("지출 내용을 입력해주세요.");
    } else {
      //돈 내역 list에 추가하기
      const newMoneyList = [
        ...moneyDatas,
        {
          id: v4(),
          date: value.date,
          category: value.category,
          amount: value.amount,
          detail: value.detail,
        },
      ];
      setMoneyDatas(newMoneyList);
      //선택한 달 바꿔주기
      chickedMonth(value.date.split("-")[1]);
      //input 빈칸으로 바꾸기
      setAmountBlank();
      setDetailBlank();
      //경고문구 없애기
      setFailText("");
    }
  };

  /** MonthList 기능 */
  //월별 객체 배열 만들기
  const months = useMemo(() => {
    let month = [];
    const checkedMonth = JSON.parse(localStorage.getItem("month"));
    for (let m = 0; m < 12; m++) {
      if (checkedMonth == m + 1) {
        month.push({ month: m, isClicked: true });
        continue;
      }
      month.push({ month: m, isClicked: false });
    }
    return month;
  }, []);

  //months가 바뀔때 monthList 값변경
  useEffect(() => {
    setMonthList([...months]);
    const localMonth = JSON.parse(localStorage.getItem("month"));
    const filteredDatas = moneyDatas.filter((data) => {
      return `${data.date.split("-")[1]}` == localMonth;
    });
    setCheckedmonth([...filteredDatas]);
  }, [months]);

  //월 클릭 시
  const handleClickBtn = (id) => {
    chickedMonth(id);
    const filteredDatas = moneyDatas.filter((data) => {
      return `${data.date.split("-")[1]}` == id;
    });
    localStorage.setItem("month", id);
    setCheckedmonth([...filteredDatas]);
  };

  //id로 들어오는 값의 달로 선택해주기
  const chickedMonth = (id) => {
    months.map((month) => {
      if (month.month === id - 1) {
        month.isClicked = true;
      } else month.isClicked = false;
    });
  };

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
        failText={failText}
      />
      <MonthList monthList={monthList} handleClickBtn={handleClickBtn} />
      <MoneyHistoryList moneyDatas={checkedmonth} />
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
