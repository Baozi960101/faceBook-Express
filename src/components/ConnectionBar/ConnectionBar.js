import { useContext } from "react";
import styled from "styled-components";
import {
  BarList,
  PersonalBarList,
  Curve,
} from "../BarList/BarList";
import sidebar_user from "../../image/sidebar_user.png";
import sidebar_society from "../../image/sidebar_society.png";

import { ThemeContext } from "../../context/context";
import { AuthContext } from "../../context/context";

import { MEDIA_QUERY_Header_MB , MEDIA_QUERY_SideBar , MEDIA_QUERY_Header_SMALL } from "../../constants/style";

const Area = styled.div`
  padding-top:4px;
  flex-basis:360px;
  height:calc(100vh - 64px);
  position:sticky;
  top:60px;
  
  ${MEDIA_QUERY_SideBar}{
    width: 320px;
  }
  ${MEDIA_QUERY_Header_SMALL}{
    display:none;
  }
`

const Box = styled.div`
  background-color: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 93.5%;
  

  ${MEDIA_QUERY_Header_MB}{
    width: 280px;
  }
`;


export default function ConnectionBar() {
  const { user, setUser } = useContext(AuthContext);

  const { colorMode } = useContext(ThemeContext);

  return (
    <>
      <Area>
      <Box>
        <PersonalBarList text="姓名" />
        <BarList src={sidebar_user} text="0978026876" />
        <BarList src={sidebar_society} text="Baozi960101@gmail.com" />
        <Curve />
      </Box>
      </Area>
    </>
  );
}
