import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import LoginPages from "../../pages/LoginPages/LoginPages";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { ThemeContext, AuthContext } from "../../context/context";

const theme = {
  light: {
    placeholderColor:"#65676b",
    headerHoverColor:"#f0f2f5",
    background: "white",
    color: "#1c1e21",
    searchBackground: "#f0f2f5",
    logoImgBackground:"#e4e6eb",
  },
  dark: {
    placeholderColor:"#b0b3b8",
    headerHoverColor:"#3a3b3c",
    background: "#242526",
    color: "#e4e6eb",
    searchBackground: "#3a3b3c",
    logoImgBackground:"#3a3b3c",
  },
};

export default function App() {
  const [colorMode, setColorMode] = useState("light");
  const [user, setUser] = useState(null);
  const [searchLogo, setSearchLogo] = useState(true);
  const [menuChange, setMenuChange] = useState(false);
  const [setUpChange, setSetUpChange] = useState(false);

  const { pathname } = useLocation();

  console.log(pathname);

  function handleChangeMode(e) {
    e.stopPropagation();
    if (colorMode === "light") {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
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
          handleChangeMode,
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
            <Routes>
              <Route path="/" />
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
