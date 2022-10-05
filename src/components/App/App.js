import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import Sidebar from "../Sidebar";
import ConnectionBar from "../ConnectionBar";
import LoginPages from "../../pages/LoginPages";
import HomePages from "../../pages/HomePages";
import UpdatePages from "../../pages/UpdatePages";
import MyselfPages from "../../pages/MyselfPages";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { ThemeContext, AuthContext } from "../../global/context";
import { MEDIA_QUERY_Header_SMALL } from "../../global/style";

const theme = {
  light: {
    placeholderColor: "#65676b",
    headerHoverColor: "#e4e6eb",
    background: "white",
    color: "#1c1e21",
    searchBackground: "#f0f2f5",
    logoImgBackground: "#e4e6eb",
    bodyBackGroundColor: "#f0f2f5",
    setUpMainBackGroundColor: "white",
    borderBackGround: "#ced0d4",
    scrollbarColor: "#bcc0c4",
    setUpHoverBackGroundColor: "#e4e6eb",
  },
  dark: {
    placeholderColor: "#b0b3b8",
    headerHoverColor: "#3a3b3c",
    background: "#242526",
    color: "#e4e6eb",
    searchBackground: "#3a3b3c",
    logoImgBackground: "#3a3b3c",
    bodyBackGroundColor: "#161718",
    setUpMainBackGroundColor: "#37393a",
    borderBackGround: "#3e4042",
    scrollbarColor: "#5e5e5f",
    setUpHoverBackGroundColor: "#474849",
  },
};

const MainBox = styled.div`
  width: 100%;
  padding-top: ${(props) => (props.state ? "56px" : "0px")};
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bodyBackGroundColor};

  ${MEDIA_QUERY_Header_SMALL} {
    justify-content: center;
  }
`;

export default function App() {
  const [colorMode, setColorMode] = useState("light");
  const [user, setUser] = useState(false);
  const [searchLogo, setSearchLogo] = useState(true);
  const [menuChange, setMenuChange] = useState(false);
  const [setUpChange, setSetUpChange] = useState(false);

  const { pathname } = useLocation();
  console.log(pathname);

  function handleChangeModeLight(e) {
    e.stopPropagation();
    setColorMode("light");
  }

  function handleChangeModeDark(e) {
    e.stopPropagation();
    setColorMode("dark");
  }

  function searchClick(e) {
    e.stopPropagation();
    setSearchLogo(false);
  }

  function returnClick() {
    setSearchLogo(true);
    setSetUpChange(false);
  }

  function handleChangeMenu() {
    setMenuChange(!menuChange);
  }

  function handleChangeSetUp(e) {
    e.stopPropagation();
    setSetUpChange(!setUpChange);
  }

  return (
    <>
      <ThemeContext.Provider
        value={{
          handleChangeModeLight,
          handleChangeModeDark,
          searchClick,
          returnClick,
          searchLogo,
          colorMode,
        }}
      >
        <AuthContext.Provider
          value={{
            handleChangeMenu,
            menuChange,
            user,
            setUser,
            setUpChange,
            handleChangeSetUp,
          }}
        >
          <ThemeProvider theme={theme[colorMode]}>
            <Routes>
              <Route path="/" element={!user && <LoginPages />} />
            </Routes>
            {user && <Header />}
            <MainBox state={user} onClick={returnClick}>
              {user && <Sidebar />}
              <Routes>
                <Route path="/" element={user && <HomePages />} />
              </Routes>
              <Routes>
                <Route path="/update" element={user && <UpdatePages />} />
              </Routes>
              <Routes>
                <Route path="/myself" element={user && <MyselfPages />} />
              </Routes>
              {user && <ConnectionBar />}
            </MainBox>
            <Routes></Routes>
          </ThemeProvider>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
