import { useState, useContext } from "react";
import styled from "styled-components";
import {
  BarList,
  PersonalBarList,
  FunctionBarList,
  Curve,
  HideBarList
} from "../../global/BarList";
import sidebar_user from "../../image/sidebar_user.png";
import sidebar_watch from "../../image/sidebar_watch.png";
import sidebar_society from "../../image/sidebar_society.png";
import sidebar_review from "../../image/sidebar_review.png";
import sidebar_play from "../../image/sidebar_play.png";
import sidebar_marketplace from "../../image/sidebar_marketplace.png";
import sidebar_live from "../../image/sidebar_live.png";
import sidebar_help from "../../image/sidebar_help.png";
import sidebar_healthy from "../../image/sidebar_healthy.png";
import sidebar_favorite from "../../image/sidebar_favorite.png";
import sidebar_fan from "../../image/sidebar_fan.png";
import sidebar_collection from "../../image/sidebar_collection.png";
import sidebar_climate from "../../image/sidebar_climate.png";
import sidebar_child from "../../image/sidebar_child.png";
import sidebar_blood from "../../image/sidebar_blood.png";
import sidebar_advertise from "../../image/sidebar_advertise.png";
import sidebar_activity from "../../image/sidebar_activity.png";

import { ThemeContext } from "../../global/context";
import { AuthContext } from "../../global/context";

import { MEDIA_QUERY_Header_MB , MEDIA_QUERY_SideBar } from "../../global/style";

const Area = styled.div`
  padding-top:4px;
  height:calc(100vh - 64px);
  overflow-y:auto;
  overflow-y: overlay;
  overflow-x:hidden;
  position:sticky;
  top:60px;

  ::-webkit-scrollbar{
    width:8px;
  }

  ::-webkit-scrollbar-thumb{
    background: ${({ theme }) => theme.scrollbarColor};
    border-radius: 20px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bodyBackGroundColor};
    border-radius: 0;
  }

  ${MEDIA_QUERY_Header_MB}{
    min-width:280px;
  }
  ${MEDIA_QUERY_SideBar}{
    display:none;
  }

  
`

const Box = styled.div`
  background-color: ${({ theme }) => theme.bodyBackGroundColor};
  max-width: 360px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 93.5%;
  
`;

const Footer = styled.div`
  max-width: 360px;
  height: 55px;
  background-color: ${({ theme }) => theme.bodyBackGroundColor};
  color: ${({ theme }) => theme.color};
  font-size:13px;
  display: flex;
  align-items: center;
  justify-content:center;


  ${MEDIA_QUERY_Header_MB}{
    min-width:280px;
  }
  ${MEDIA_QUERY_SideBar}{
    display:none;
  }
`;

const FooterContent = styled.div`
width: 95%;
padding: 0 8px;
box-sizing: border-box;
`;



export default function Sidebar() {
  const { user, setUser } = useContext(AuthContext);

  const { colorMode } = useContext(ThemeContext);

  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <>
      <Area>
      <Box>
        <PersonalBarList text="User" />
        <BarList src={sidebar_user} text="朋友" />
        <BarList src={sidebar_society} text="社群 ( 社團 )" />
        <BarList src={sidebar_marketplace} text="Marketplace" />
        <BarList src={sidebar_watch} text="Watch" />
        <BarList src={sidebar_review} text="動態回顧" />
        <BarList src={sidebar_help} text="互助情報站" />
        <HideBarList active={showMore} src={sidebar_healthy} text="心理健康" />
        <HideBarList
          active={showMore}
          src={sidebar_collection}
          text="我的珍藏"
        />
        <HideBarList
          active={showMore}
          src={sidebar_child}
          text="兒童版 Messenger"
        />
        <HideBarList active={showMore} src={sidebar_play} text="玩遊戲" />
        <HideBarList active={showMore} src={sidebar_live} text="直播訊息" />
        <HideBarList
          active={showMore}
          src={sidebar_advertise}
          text="近期廣告動態"
        />
        <HideBarList active={showMore} src={sidebar_activity} text="活動" />
        <HideBarList active={showMore} src={sidebar_blood} text="捐血情報站" />
        <HideBarList
          active={showMore}
          src={sidebar_climate}
          text="氣候科學中心"
        />
        <HideBarList active={showMore} src={sidebar_fan} text="粉絲專頁" />
        <HideBarList active={showMore} src={sidebar_favorite} text="最愛" />
        <FunctionBarList colorMode={colorMode} onClick={handleShowMore} state={showMore} />
        <Curve />
      </Box>
      <Footer>
        <FooterContent>
          隱私政策  · 服務條款  · 廣告  · Ad Choices   · Cookie  · 更多 · Meta © 2022
        </FooterContent>
      </Footer>
      </Area>
    </>
  );
}
