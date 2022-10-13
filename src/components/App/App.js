import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import Sidebar from "../Sidebar";
import ConnectionBar from "../ConnectionBar";
import LoginPages from "../../pages/LoginPages";
import HomePages from "../../pages/HomePages";
import MyselfPages from "../../pages/MyselfPages";
import { ThemeProvider } from "styled-components";
import { useEffect, useState, useLayoutEffect } from "react";
import { ThemeContext, AuthContext } from "../../global/context";
import { MEDIA_QUERY_Header_SMALL } from "../../global/style";
import { hangleColorModeAPI } from "../../global/API";
import {
  GetUserToken,
  SetUserToken,
  GetColorToken,
  SetColorToken,
} from "../../global/utils";
import { checkLoginAPI } from "../../global/API";

const theme = {
  light: {
    placeholderColor: "#65676b",
    headerHoverColor: "#f0f2f5",
    background: "white",
    color: "#1c1e21",
    homePagesColor: "#656761",
    searchBackground: "#f0f2f5",
    logoImgBackground: "#e4e6eb",
    bodyBackGroundColor: "#f0f2f5",
    setUpMainBackGroundColor: "white",
    borderBackGround: "#ced0d4",
    scrollbarColor: "#bcc0c4",
    setUpHoverBackGroundColor: "#e4e6eb",
    articleTitle: "#050505",
    updateArticleBackGround: "rgba(252, 252, 253, 0.5)",
  },
  dark: {
    placeholderColor: "#b0b3b8",
    headerHoverColor: "#3a3b3c",
    background: "#242526",
    color: "#e4e6eb",
    homePagesColor: "#B0B3B8",
    searchBackground: "#3a3b3c",
    logoImgBackground: "#3a3b3c",
    bodyBackGroundColor: "#161718",
    setUpMainBackGroundColor: "#37393a",
    borderBackGround: "#3e4042",
    scrollbarColor: "#5e5e5f",
    setUpHoverBackGroundColor: "#474849",
    articleTitle: "#E4E6EB",
    updateArticleBackGround: "rgba(16,16,17,0.8)",
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

const ChechLoadAera = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.bodyBackGroundColor};
  position: fixed;
  top: 0;
  z-index: 5;
`;

export default function App() {
  const [colorMode, setColorMode] = useState("light");
  const [user, setUser] = useState(false);
  const [searchLogo, setSearchLogo] = useState(true);
  const [menuChange, setMenuChange] = useState(false);
  const [setUpChange, setSetUpChange] = useState(false);

  const [checkTokenLooin, setCheckTokenLooin] = useState(true);

  useLayoutEffect(() => {
    if (GetColorToken()) {
      setColorMode(GetColorToken());
    } else {
      setColorMode("light");
    }
  }, []);

  useEffect(() => {
    if (!GetUserToken()) {
      setCheckTokenLooin(false);
      return;
    }
    checkLoginAPI(GetUserToken())
      .then((res) => {
        setUser(res.user);
        setCheckTokenLooin(false);
      })
      .catch((err) => {
        SetUserToken(null);
        setCheckTokenLooin(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChangeModeLight(e) {
    e.stopPropagation();
    hangleColorModeAPI(user.id, "light");
    SetColorToken("light");
    setColorMode("light");
  }

  function handleChangeModeDark(e) {
    e.stopPropagation();
    hangleColorModeAPI(user.id, "dark");
    SetColorToken("dark");
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
          setColorMode,
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
            <ChechLoadAera active={checkTokenLooin} />
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
