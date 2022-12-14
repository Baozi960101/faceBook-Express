import styled from "styled-components";
import arrowDown from "../image/arrowDown.svg";
import arrowDownDark from "../image/arrowDownDark.svg";
import arrowUp from "../image/arrowUp.svg";
import arrowUpDark from "../image/arrowUpDark.svg";

const BarListContains = styled.a`
  width: 95%;
  height: 52px;
  padding: 0 8px;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: ${({ theme }) => theme.headerHoverColor};
  }
`;

const HideBarListContains = styled.a`
  width: 95%;
  height:52px;
  height: ${(props) => (props.active ? "50px" : "0px")};
  padding: 0 8px;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  text-decoration: none;

  :hover {
    background-color: ${({ theme }) => theme.headerHoverColor};
  }
`;

export const BarListPlainText = styled.div`
  width: 88%;
  height: 40px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
`;

const BarListIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 12px;
`;

const PersonalBarListArea = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 30px;
  margin-right: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.logoImgBackground};
`;

const PersonalBarListImg = styled.img`
  max-width: 100%;
`;

const FunctionBarListArea = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 30px;
  margin-right: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.logoImgBackground};
`;

export const Curve = styled.div`
  width: 88%;
  border-bottom: 2px solid;
  margin: 8px 0px;
  box-sizing: border-box;
  border-color: ${({ theme }) => theme.borderBackGround};
`;

export const BarList = ({ text, src, onClick }) => {
  return (
    <BarListContains
      target="_blank"
      href="https://www.facebook.com/"
      onClick={onClick}
    >
      <BarListIcon src={src} />
      {text}
    </BarListContains>
  );
};

export const ConnectionPhoneBarList = ({ text, src, onClick }) => {
  return (
    <BarListContains onClick={onClick}>
      <BarListIcon
        style={{ width: "26px", height: "26px", marginLeft: "5px" }}
        src={src}
      />
      {text}
    </BarListContains>
  );
};

export const ConnectionMailBarList = ({ text, src, onClick }) => {
  return (
    <BarListContains href={"mailto:" + text} onClick={onClick}>
      <BarListIcon
        style={{ width: "26px", height: "26px", marginLeft: "5px" }}
        src={src}
      />
      {text}
    </BarListContains>
  );
};

export const HideBarList = ({ active, text, src, onClick }) => {
  return (
    <HideBarListContains
      target="_blank"
      href="https://www.facebook.com/"
      active={active}
      onClick={onClick}
    >
      <BarListIcon src={src} />
      {text}
    </HideBarListContains>
  );
};

export const PersonalBarList = ({ text, src, onClick }) => {
  return (
    <BarListContains onClick={onClick}>
      <PersonalBarListArea>
        <PersonalBarListImg src={src} />
      </PersonalBarListArea>
      {text}
    </BarListContains>
  );
};

export const FunctionBarList = ({ state, onClick, colorMode }) => {
  return (
    <BarListContains onClick={onClick}>
      <FunctionBarListArea>
        {colorMode === "light" ? (
          <PersonalBarListImg src={state ? arrowUp : arrowDown} />
        ) : (
          <PersonalBarListImg src={state ? arrowUpDark : arrowDownDark} />
        )}
      </FunctionBarListArea>
      {!state ? "????????????" : "????????????"}
    </BarListContains>
  );
};
