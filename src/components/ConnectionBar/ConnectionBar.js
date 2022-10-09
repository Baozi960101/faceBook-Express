import { useContext } from "react";
import styled from "styled-components";
import {
  ConnectionMailBarList,
  ConnectionPhoneBarList,
  PersonalBarList,
  Curve,
} from "../../global/BarList";
import datePhone from "../../image/datePhone.svg";
import dateMail from "../../image/dateMail.svg";

import { AuthContext } from "../../global/context";

import { MEDIA_QUERY_Header_MB , MEDIA_QUERY_SideBar , MEDIA_QUERY_Header_SMALL } from "../../global/style";

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
  background-color: ${({ theme }) => theme.bodyBackGroundColor};
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
  const { user } = useContext(AuthContext);

  return (
    <>
      <Area>
      <Box>
        <PersonalBarList src={user.img} text={user.nickName} />
        <ConnectionPhoneBarList src={datePhone} text={user.phone} />
        <ConnectionMailBarList  src={dateMail} text={user.email} />
        <Curve />
      </Box>
      </Area>
    </>
  );
}
