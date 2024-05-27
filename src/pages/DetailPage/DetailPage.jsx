import { useParams } from "react-router-dom";
import styled from "styled-components";
import useRefInput from "../../hooks/useRefInput";

function DetailPage() {
  const param = useParams();

  const localStorages = JSON.parse(localStorage.getItem("moneylist"));
  const detailMoney = localStorages.filter((money) => {
    return money.id === param.detailId;
  })[0];
  const { date, category, amount, detail } = detailMoney;

  const [detailRef, newDetail, handleDetail] = useRefInput(detail);
  const [dateRef, newDate, handleDate] = useRefInput(date);
  const [categoryRef, newCategory, handleCategory] = useRefInput(category);
  const [amountRef, newAmount, handleAmount] = useRefInput(amount);

  const changeDetail = {
    id: param.detailId,
    date: newDate,
    category: newCategory,
    amount: newAmount,
    detail: newDetail,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(changeDetail);
    const changeLocal = localStorages.map((item) => {
      return item.id === param.detailId ? changeDetail : item;
    });
    console.log(changeLocal);
    localStorage.setItem("moneylist", JSON.stringify(changeLocal));
  };
  return (
    <Wrapper>
      <div className="sub-title">
        <p>[ 영수증 ]</p>
      </div>
      <form>
        <div className="input-div">
          <p>상품명</p>
          <input
            ref={detailRef}
            defaultValue={detail}
            onChange={(e) => handleDetail(e)}
          />
          <p>날짜</p>
          <input
            ref={dateRef}
            defaultValue={date}
            onChange={(e) => {
              handleDate(e);
            }}
          />
          <p>항목</p>
          <input
            ref={categoryRef}
            defaultValue={category}
            onChange={(e) => {
              handleCategory(e);
            }}
          />
          <p>금액</p>
          <input
            ref={amountRef}
            defaultValue={amount}
            onChange={(e) => {
              handleAmount(e);
            }}
          />
        </div>
        <div className="btn-div">
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            수정
          </button>
          <button>삭제</button>
          <button>뒤로가기</button>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 9px;
  min-width: 400px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 0 50px;

  .sub-title {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid black;
    p {
      font-size: 30px;
      padding: 30px 0;
    }
  }
  .input-div {
    margin: 10px 0;
    p {
      text-align: left;
      padding: 10px 15px;
      margin: 5px 10px;
      border-top: 2px dashed gray;
      border-bottom: 2px dashed gray;
    }
    input {
      font-size: 15px;
      padding: 14px 20px;
      margin-bottom: 15px;
      border: transparent;
      border-radius: 30px;
      width: 100%;
      background-color: #ebebeb;
      box-sizing: border-box;
      &:focus {
        outline: none;
      }
    }
  }

  .btn-div {
    margin-bottom: 50px;
    margin-left: auto;
    button {
      border: transparent;
      font-size: 15px;
      margin-left: 8px;
      border-radius: 40px;
      padding: 6px 12px;
    }
  }
`;
export default DetailPage;
