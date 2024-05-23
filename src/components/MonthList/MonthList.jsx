import { useMemo } from "react";
import styled from "styled-components";
import MonthItem from "../MonthItem/";

function MonthList() {
  const months = useMemo(() => {
    const month = [];
    for (let i = 0; i < 12; i++) {
      month.push(i);
    }
    return month;
  }, []);

  return (
    <Wrapper>
      {months.map((item) => {
        return <MonthItem key={item} month={item + 1} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px 100px 100px;
  grid-template-rows: 50px 50px;
  p {
    width: 100px;
  }
`;

export default MonthList;
