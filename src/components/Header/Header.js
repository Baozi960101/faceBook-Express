import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import facebookLogo from "../../image/facebookLogo.svg";
import search from "../../image/search.svg";
import arrowLeft from "../../image/arrowLeft.svg";
import arrowLeftDark from "../../image/arrowLeftDark.svg";
import home from "../../image/home.svg";
import homeClick from "../../image/homeClick.svg";
import watch from "../../image/watch.svg";
import watchDark from "../../image/watchDark.svg";
import market from "../../image/market.svg";
import marketDark from "../../image/marketDark.svg";
import community from "../../image/community.svg";
import communityDark from "../../image/communityDark.svg";
import puzzle from "../../image/puzzle.svg";
import puzzleDark from "../../image/puzzleDark.svg";
import grid from "../../image/grid.svg";
import gridDark from "../../image/gridDark.svg";
import message from "../../image/message.svg";
import messageDark from "../../image/messageDark.svg";
import bell from "../../image/bell.svg";
import bellDark from "../../image/bellDark.svg";
import menu from "../../image/menu.svg";
import arrowRight from "../../image/arrowRight.svg";
import arrowRightDark from "../../image/arrowRightDark.svg";
import setting from "../../image/setting.svg";
import settingDark from "../../image/settingDark.svg";
import moon from "../../image/moon.svg";
import moonDark from "../../image/moonDark.svg";
import logout from "../../image/logout.svg";
import logoutDark from "../../image/logoutDark.svg";
import circle from "../../image/circle.svg";
import { ThemeContext } from "../../context/context";
import {
  MEDIA_QUERY_Header_MB,
  MEDIA_QUERY_Header_MIDD,
  MEDIA_QUERY_Header_SMALL,
  MEDIA_QUERY_Header_LG,
} from "../../constants/style";
import { AuthContext } from "../../context/context";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.background};
  position: fixed;
  top: 0;
  margin-bottom: 56px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 10%), 0 2px 16px rgb(0 0 0 / 10%);
  padding: 0 15px;
  box-sizing: border-box;
`;

const SearchArea = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${MEDIA_QUERY_Header_MB} {
    justify-content: start;
    width: 100px;
  }
  ${MEDIA_QUERY_Header_LG} {
    justify-content: start;
    width: 200px;
  }
`;
const SearchLogo = styled.a`
  width: 40px;
`;

const ReturnLogo = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const SearchSvg = styled.img`
  width: 100%;
`;

const SearchInputArea = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: ${(props) => (props.action ? "240px" : "260px")};
  height: 41px;
  background-color: ${({ theme }) => theme.searchBackground};
  border-radius: 30px;
  padding: 0 12px 0 35px;
  box-sizing: border-box;
  transition: width 0.2s ease-in-out;
  border: 0;
  outline: none;
  font-size: 15px;

  ::placeholder {
    color: ${({ theme }) => theme.placeholderColor};
  }

  ${MEDIA_QUERY_Header_MB} {
    width: ${(props) => (props.action ? "50px" : "250px")};
    position: ${(props) => (props.action ? "" : "fixed")};
    top: 10px;
  }
`;

const SearchImg = styled.img`
  position: absolute;
  display: inline-block;
  width: 15px;
  height: 15px;
  left: 10px;
  top: 14px;

  ${MEDIA_QUERY_Header_MB} {
    left: 20px;
  }
`;

const RWDMenu = ({ onClick, width, img }) => {
  return (
    <ClassificationRWD onClick={onClick}>
      <ClassificationLogo style={{ width: width }} src={img} />
    </ClassificationRWD>
  );
};

const Search = ({ searchLogo, returnClick, searchClick, onClick }) => {
  return (
    <SearchArea>
      {searchLogo ? (
        <SearchLogo href="/">
          <SearchSvg src={facebookLogo} />
        </SearchLogo>
      ) : (
        <ReturnLogo onClick={returnClick} src={arrowLeft} />
      )}
      <SearchInputArea>
        {searchLogo && <SearchImg src={search} />}
        <SearchInput
          action={searchLogo}
          onClick={searchClick}
          placeholder="搜尋 Facebook"
        ></SearchInput>
      </SearchInputArea>
      <RWDMenu onClick={onClick} img={menu} width="25px" />
    </SearchArea>
  );
};

const ClassificationArea = styled.div`
  display: flex;
  height: 100%;
`;

const ClassificationContains = styled.a`
  width: 130px;
  height: 100%;
  box-sizing: border-box;
  border-bottom: ${(props) => (props.action ? "3px solid #3181e6" : "")};
  box-sizing: box-sizing;
  display: flex;
  align-items: center;
  justify-content: center;

  & + & {
    margin-left: 7px;
  }

  ${MEDIA_QUERY_Header_MIDD} {
    width: 110px;
  }

  ${MEDIA_QUERY_Header_SMALL} {
    width: 50px;
  }

  ${MEDIA_QUERY_Header_LG} {
    display: none;
  }
`;

const ClassificationRWD = styled.div`
  width: 50px;
  height: 100%;
  box-sizing: border-box;
  border-bottom: 2px solid #3181e6;
  box-sizing: box-sizing;
  display: none;
  margin-left: 30px;
  cursor: pointer;

  ${MEDIA_QUERY_Header_LG} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ClassificationHover = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  :hover {
    background-color: ${({ theme }) => theme.headerHoverColor};
  }
`;

const ClassificationLogo = styled.img`
  width: 25px;
`;

const Test = styled.div`
  position: absolute;
  top: 60px;
  background-color: black;
  opacity: 0.7;
  color: white;
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 9px;
`;

const PersonalInformationArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 100%;
  cursor: pointer;
`;

const PersonalInformationList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.logoImgBackground};
  overflow: hidden;
`;

const PersonalInformationLogo = styled.img`
  width: 20px;
`;

const PersonalInformation = ({ onclick, colorMode }) => {
  return (
    <PersonalInformationArea>
      <PersonalInformationList>
        <PersonalInformationLogo
          src={colorMode === "light" ? grid : gridDark}
        />
      </PersonalInformationList>
      <PersonalInformationList>
        <PersonalInformationLogo
          src={colorMode === "light" ? message : messageDark}
        />
      </PersonalInformationList>
      <PersonalInformationList>
        <PersonalInformationLogo
          src={colorMode === "light" ? bell : bellDark}
        />
      </PersonalInformationList>
      <PersonalInformationList onClick={onclick}>ME</PersonalInformationList>
    </PersonalInformationArea>
  );
};

const SetUpMain = styled.div`
  width: 360px;
  display: ${(props) => (props.action ? "flex" : "none")};
  justify-content: flex-end;
  box-shadow: 0 10px 8px 10px rgb(0 0 0 / 10%), 0 6px 5px rgb(0 0 0 / 10%);
  border-radius: 10px;
  background-color: ${({ theme }) => theme.background};
  position: absolute;
  right: 20px;
  top: 50px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color};
`;

const OtherSetUp = styled.div`
  width: ${(props) => (props.action ? "360px" : "0px")};
  overflow: hidden;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.2s ease-in-out;
`;

const OtherSetTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 10px 25px;
  font-size: 20px;
  font-weight: 600;
  box-sizing: border-box;
`;

const OtherSetImg = styled.img`
  margin-right: 20px;
  cursor: pointer;
`;

const OtherSetUpContain = ({ backOn, title, img }) => {
  return (
    <OtherSetTitle>
      <OtherSetImg src={img} onClick={backOn} />
      {title}
    </OtherSetTitle>
  );
};

const OtherSetUpList = ({ img, text, onClick }) => {
  return (
    <SetUpContain onClick={onClick}>
      <SetUpCaption>
        <SetUpLogo>
          <SetUpSvg src={img} />
        </SetUpLogo>
        {text}
      </SetUpCaption>
    </SetUpContain>
  );
};

const SetUpArea = styled.div`
  width: ${(props) => (props.action ? "0px" : "360px")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 10px;

  transition: width 0.2s ease-in-out;
`;

const SetUpMyself = styled.div`
  width: 320px;
  height: 60px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  box-shadow: 0 10px 8px 5px rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  padding-top: 10px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.headerHoverColor};
  }
`;

const SetUpMyselfName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
`;

const SetUpContain = styled.div`
  width: 335px;
  height: 50px;
  border-radius: 10px;
  padding: 10px 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.headerHoverColor};
  }
`;

const SetUpCaption = styled.div`
  width: 300px;
  height: 50px;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

const SetUpLogo = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.logoImgBackground};
  margin-right: 15px;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SetUpSvg = styled.img`
  width: 20px;
  height: 20px;
`;

const SetUpText = styled.div`
  width: 335px;
  height: 50px;
  padding: 10px 15px 0 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

const SetUpArrow = styled.img`
  width: 24px;
  height: 24px;
`;

const SetUpList = ({ img, text, onClick, arrow }) => {
  return (
    <SetUpContain onClick={onClick}>
      <SetUpCaption>
        <SetUpLogo>
          <SetUpSvg src={img} />
        </SetUpLogo>
        {text}
      </SetUpCaption>
      <SetUpArrow src={arrow} />
    </SetUpContain>
  );
};

const ThemeMode = styled.div`
  width: 300px;
  height: 50px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 50px;
`;

const ThemeModeChoose = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 30px;
  border: 2px solid #0571ed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.img`
  width: 17px;
  height: 16px;
`;

export default function Header() {
  const [moreSetting, setMoreSetting] = useState(false);
  const [moreShow, setMoreShow] = useState(false);

  function handleSettingChange(e) {
    e.stopPropagation();
    setMoreSetting(!moreSetting);
  }

  function handleShowChange(e) {
    e.stopPropagation();
    setMoreShow(!moreShow);
  }

  const { handleChangeMenu, user, setUser, setUpChange, handleChangeSetUp } =
    useContext(AuthContext);

  const { handleChangeMode, colorMode, searchLogo, searchClick, returnClick } =
    useContext(ThemeContext);

  const { pathname } = useLocation();

  const Classification = ({ href, clickImg, img, text, width }) => {
    const [classificationClick, setClassificationClick] = useState(false);

    function MouseOverClassificationClick() {
      setClassificationClick(true);
    }

    function MouseOutClassificationClick() {
      setClassificationClick(false);
    }

    return (
      <ClassificationContains
        action={pathname === href}
        href={href}
        onMouseOver={MouseOverClassificationClick}
        onMouseOut={MouseOutClassificationClick}
      >
        <ClassificationHover>
          <ClassificationLogo
            style={{ width: width }}
            src={pathname === href ? clickImg : img}
          />
        </ClassificationHover>
        {classificationClick && <Test>{text}</Test>}
      </ClassificationContains>
    );
  };

  return (
    <>
      <Box
        onClick={() => {
          returnClick();
          setMoreShow(false);
          setMoreSetting(false);
        }}
      >
        <Search
          searchLogo={searchLogo}
          returnClick={returnClick}
          searchClick={searchClick}
          onClick={handleChangeMenu}
        />
        <ClassificationArea>
          <Classification
            href="/"
            img={home}
            clickImg={homeClick}
            text="首頁"
          />
          <Classification
            href="/watch"
            img={colorMode === "light" ? watch : watchDark}
            clickImg={watch}
            text="Watch"
            width="35px"
          />
          <Classification
            href="/marketplace"
            img={colorMode === "light" ? market : marketDark}
            clickImg={market}
            text="Marketplace"
            width="35px"
          />
          <Classification
            href="/community"
            img={colorMode === "light" ? community : communityDark}
            clickImg={community}
            text="社群"
            width="35px"
          />
          <Classification
            href="/game"
            img={colorMode === "light" ? puzzle : puzzleDark}
            clickImg={puzzle}
            text="遊戲"
            width="30px"
          />
        </ClassificationArea>
        <PersonalInformation
          colorMode={colorMode}
          onclick={(e) => {
            handleChangeSetUp(e);
            setMoreShow(false);
            setMoreSetting(false);
          }}
        />
        <SetUpMain action={setUpChange}>
          <SetUpArea action={moreSetting || moreShow}>
            <SetUpMyself>
              <SetUpMyselfName>
                <PersonalInformationList style={{ marginRight: "10px" }}>
                  ME
                </PersonalInformationList>
                ME
              </SetUpMyselfName>
            </SetUpMyself>
            <SetUpList
              onClick={handleSettingChange}
              img={colorMode === "light" ? setting : settingDark}
              text="設定和隱私"
              arrow={colorMode === "light" ? arrowRight : arrowRightDark}
            />
            <SetUpList
              onClick={handleShowChange}
              img={colorMode === "light" ? moon : moonDark}
              text="顯示方式"
              arrow={colorMode === "light" ? arrowRight : arrowRightDark}
            />
            <SetUpList
              img={colorMode === "light" ? logout : logoutDark}
              text="登出"
              arrow={colorMode === "light" ? arrowRight : arrowRightDark}
            />
            <SetUpText>
              隱私政策 · 服務條款 · 廣告 · Ad Choices · Cookie · · Meta © 2022
            </SetUpText>
          </SetUpArea>
          <OtherSetUp action={moreSetting}>
            <OtherSetUpContain
              backOn={handleSettingChange}
              title="設定和隱私"
              img={colorMode === "light" ? arrowLeft : arrowLeftDark}
            />
            <OtherSetUpList
              onClick=""
              img={colorMode === "light" ? setting : settingDark}
              text="個人"
            />
          </OtherSetUp>
          <OtherSetUp action={moreShow}>
            <OtherSetUpContain
              backOn={handleShowChange}
              title="顯示方式"
              img={colorMode === "light" ? arrowLeft : arrowLeftDark}
            />
            <OtherSetUpList
              img={colorMode === "light" ? moon : moonDark}
              text="深色模式"
            />
            <SetUpContain onClick={handleChangeMode}>
              <SetUpCaption>
                <ThemeMode>
                  <div>開啟</div>
                  <div>
                    <ThemeModeChoose>
                      <Circle src={colorMode === "dark" ? circle : ""} />
                    </ThemeModeChoose>
                  </div>
                </ThemeMode>
              </SetUpCaption>
            </SetUpContain>
            <SetUpContain onClick={handleChangeMode}>
              <SetUpCaption>
                <ThemeMode>
                  <div>關閉</div>
                  <div>
                    <ThemeModeChoose>
                      <Circle src={colorMode === "light" ? circle : ""} />
                    </ThemeModeChoose>
                  </div>
                </ThemeMode>
              </SetUpCaption>
            </SetUpContain>
          </OtherSetUp>
        </SetUpMain>
      </Box>
    </>
  );
}

// fill:#65676b
