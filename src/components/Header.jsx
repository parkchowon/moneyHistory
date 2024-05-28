import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderDiv>
      <Link to={"/"}>
        <p>Money History</p>
      </Link>
    </HeaderDiv>
  );
}
const HeaderDiv = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    font-size: 30px;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    font-weight: 800;
    &:hover {
      transform: scale(1.1);
      transition: all 0.3s;
    }
  }
`;
export default Header;
