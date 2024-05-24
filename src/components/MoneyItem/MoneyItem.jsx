import { Link } from "react-router-dom";
import styled from "styled-components";

function MoneyItem({ moneyDatas }) {
  return (
    <Wrapper>
      <Link to={`/detail/${moneyDatas.id}`}>
        <div>
          <p className="date">{moneyDatas.date}</p>
          <div>
            <p className="category">[{moneyDatas.category}]</p>
            <p className="detail">{moneyDatas.detail}</p>
            <p className="amount">{moneyDatas.amount}원</p>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  cursor: pointer;
  width: 750px;
  height: 40px;
  margin: 10px 0;
  box-shadow: 0 0 5px gainsboro;
  padding: 20px 35px;
  border-radius: 20px;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .date {
    margin-bottom: 5px;
    font-size: 13px;
    color: gray;
  }

  div > div {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
    margin-bottom: 5px;
  }

  a {
    display: flex;
    flex-direction: row;
    width: 100%;
    text-decoration-line: none;
    color: black;
  }

  .detail {
    position: absolute;
    left: 120px;
    font-weight: 600;
  }

  .amount {
    margin-left: auto;
    color: mediumaquamarine;
    font-weight: 600;
  }
`;
export default MoneyItem;
