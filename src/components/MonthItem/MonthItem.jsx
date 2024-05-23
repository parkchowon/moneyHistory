import styled from "styled-components";

function MonthItem({ month, isClicked, handleClickBtn }) {
  return (
    <Wrapper $isclicked={isClicked} onClick={() => handleClickBtn(month)}>
      {month}월
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background-color: ${(props) =>
    props.$isclicked ? "mediumaquamarine" : "#e9e9e9"};
  color: ${(props) => (props.$isclicked ? "white" : "black")};
  border: transparent;
  border-radius: 20px;
  height: 35px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;

  cursor: pointer;
  &:hover {
    background-color: mediumaquamarine;
    color: white;
  }
`;

export default MonthItem;
