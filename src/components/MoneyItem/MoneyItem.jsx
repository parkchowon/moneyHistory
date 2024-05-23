import styled from "styled-components";

function MoneyItem() {
  return (
    <Wrapper>
      <p>날짜</p>
      <p>지출 내용</p>
      <p>금액</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export default MoneyItem;
