import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import MonthItem from "../MonthItem/";

function MonthList() {
  const [monthList, setMonthList] = useState([]);

  const months = useMemo(() => {
    let month = [];
    for (let m = 0; m < 12; m++) {
      month.push({ month: m, isClicked: false });
    }
    return month;
  }, []);

  useEffect(() => {
    setMonthList([...months]);
  }, [months]);

  //월 클릭 시
  const handleClickBtn = (id) => {
    months.map((month) => {
      if (month.month === id - 1) {
        month.isClicked = true;
      } else month.isClicked = false;
    });
    setMonthList([...monthList]);
  };

  return (
    <Wrapper>
      {monthList.map((item) => {
        return (
          <MonthItem
            key={item.month}
            month={item.month + 1}
            isClicked={item.isClicked}
            handleClickBtn={handleClickBtn}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 20px 30px;
`;

export default MonthList;
