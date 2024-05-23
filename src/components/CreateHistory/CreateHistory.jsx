import styled from "styled-components";

function CreateHistory(input) {
  return (
    <Wrapper>
      <form>
        <p>날짜</p>
        <input value={input.date} onChange={input.dateHandler} type="date" />
        <p>항목</p>
        <select value={input.category} onChange={input.categoryHandler}>
          <option value="식비">식비</option>
          <option value="미용">미용</option>
          <option value="여행">여행</option>
          <option value="도서">도서</option>
          <option value="엔터테인먼트">엔터테인먼트</option>
          <option value="의류">의류</option>
          <option value="기타">기타</option>
        </select>
        <p>금액</p>
        <input
          value={input.amount}
          onChange={input.amountHandler}
          type="text"
          placeholder="지출 금액"
        />
        <p>내용</p>
        <input
          value={input.detail}
          onChange={input.detailHandler}
          type="text"
          placeholder="지출 내용"
        />
        <button onClick={(e) => input.handleCreateHistory(input, e)}>
          저장
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  form {
    display: flex;
    flex-direction: row;
  }
`;
export default CreateHistory;
