import styled from "styled-components";

function CreateHistory() {
  return (
    <Wrapper>
      <p>날짜</p>
      <input type="date" />
      <p>항목</p>
      <input placeholder="지출 항목" />
      <p>금액</p>
      <input placeholder="지출 금액" />
      <p>내용</p>
      <input placeholder="지출 내용" />
      <button>저장</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export default CreateHistory;
