import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header>
          <p>Money History</p>
        </Header>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/details/:detailId" element={<DetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 30px;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    font-weight: 800;
  }
`;
export default App;
