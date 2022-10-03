import { Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import ConnectionBar from "../ConnectionBar";
import LoginPages from "../../pages/LoginPages/LoginPages";
import HomePages from "../../pages/HomePages/HomePages";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { ThemeContext, AuthContext } from "../../context/context";
import { MEDIA_QUERY_Header_SMALL } from "../../constants/style";

const theme = {
  light: {
    placeholderColor: "#65676b",
    headerHoverColor: "#f0f2f5",
    background: "white",
    color: "#1c1e21",
    searchBackground: "#f0f2f5",
    logoImgBackground: "#e4e6eb",
    bodyBackGroundColor: "#f0f2f5",
    setUpMainBackGroundColor:"white",
  },
  dark: {
    placeholderColor: "#b0b3b8",
    headerHoverColor: "#3a3b3c",
    background: "#242526",
    color: "#e4e6eb",
    searchBackground: "#3a3b3c",
    logoImgBackground: "#3a3b3c",
    bodyBackGroundColor: "#f0f2f5",
    setUpMainBackGroundColor:"#37393a",
  },
};

const MainBox = styled.div`
  width:100%;
  padding-top: 56px;
  display: flex;
  justify-content:space-between;
  box-sizing: border-box;
  background-color:${({ theme }) => theme.background};

  ${MEDIA_QUERY_Header_SMALL}{
    justify-content:center;
  }
`;



export default function App() {
  const [colorMode, setColorMode] = useState("light");
  const [user, setUser] = useState(null);
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
            {pathname !== "/login" ? <Header /> : ""}
            {/* {pathname !== "/login" ? <Sidebar />:""}
            {pathname !== "/login" ? <ConnectionBar />:""}
            {pathname !== "/login" ? <HomePages />:""} */}
            <MainBox>
            <Sidebar />
            <HomePages/>
            <ConnectionBar/>
            </MainBox>
            <Routes>
              {/* <Route path="/" element={pathname !== "/login" ? <HomePages /> : ""}/> */}
            </Routes>
            <Routes>
              <Route path="/login" element={<LoginPages />} />
            </Routes>
          </ThemeProvider>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
