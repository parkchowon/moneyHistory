import styled from "styled-components";
import MonthItem from "../MonthItem/";

function MonthList(props) {
  const { monthList, handleClickBtn } = props;

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
