import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import LoginPages from "../../pages/LoginPages/LoginPages";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { ThemeContext, AuthContext } from "../../context/context";

const theme = {
  light: {
    background: "white",
    color: "#1c1e21",
    searchBackground: "#f0f2f5",
  },
  dark: {
    background: "yellow",
    color: "#1c1e21",
    searchBackground: "#3a3b3c",
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

  function handleChangeMode() {
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
  }

  function handleChangeMenu() {
    setMenuChange(!menuChange);
  }

  function handleChangeSetUp() {
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
