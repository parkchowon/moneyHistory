import styled from "styled-components";

function MonthItem({ month }) {
  return (
    <Wrapper>
      <p>{month}월</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: antiquewhite;
  border-radius: 100px;
  width: 50px;
`;

export default MonthItem;
