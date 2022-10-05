import styled from "styled-components";
import { useContext, useState } from "react";
import {
  MEDIA_QUERY_Header_SMALL,
  MEDIA_QUERY_Header_MB,
  MEDIA_QUERY_SideBar,
  MEDIA_QUERY
} from "../../constants/style";
import work02 from "../../image/work02.png";
import { ThemeContext, AuthContext } from "../../context/context";

const Box = styled.div`
  padding-top: 10px;
  background-color: ${({ theme }) => theme.bodyBackGroundColor};
  color: ${({ theme }) => theme.color};
  max-width: 680px;
  display: flex;
  height:calc(100vh - 55px);
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 20px;
  padding: 20px 0;

  ${MEDIA_QUERY_Header_SMALL} {
    margin: 50px 40px;
    
  }

  ${MEDIA_QUERY_Header_MB} {
    max-width: calc(100vw - 650px);
  }

  ${MEDIA_QUERY_SideBar} {
    max-width: calc(100vw - 350px);
  }
  ${MEDIA_QUERY_Header_SMALL} {
    max-width: 680px;
  }

  ${MEDIA_QUERY}{
    padding-top:70px;
    width:95%;
    margin: auto;
  }
`;

const PostContain = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgb(0 0 0 / 10%), 0 1px rgb(0 0 0 / 10%);

  & + & {
    margin-top: 20px;
  }
`;

const PostUpdateTitle = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 18px;
  color: ${({ theme }) => theme.color};
  font-size: 25px;
  font-weight: 600;
  text-align:center;
`;

const PostContentUpdate = styled.textarea`
  width: 90%;
  box-sizing: border-box;
  padding: 15px 18px;
  color: ${({ theme }) => theme.color};
  background-color:${({ theme }) => theme.headerHoverColor};
  font-size: 16px;
  font-weight: 600;
  margin: 20px auto 50px auto;
`;

const PostUpdateImgDiv = styled.div`
  cursor: pointer;
`

const PostContentImg = styled.img`
  max-width: 100%;
`;



const PostUpdateBtn = styled.button`
  margin:30px 30px 15px auto;
  width:80px;
  padding:5px 20px;
  font-size:16px;
  cursor: pointer;
  border-radius:8px;
  background-color:#2374e1;
  border:0;
  color: white;
`


export default function UpdatePages() {
  const { user, setUser } = useContext(AuthContext);

  const { colorMode } = useContext(ThemeContext);

  const [value, setValue] = useState(656565656);
  const [img, setImg] = useState("");

  function handleChangeValue(e) {
    setValue(e.target.value);
  }

  function handleChangeImg(e) {
    setImg(e.target.value);
  }

  return (
    <>
      <Box>
        <PostContain>
          <PostUpdateTitle>編輯文章</PostUpdateTitle>
          <PostContentUpdate onChange={handleChangeValue} rows={5}>{value}</PostContentUpdate>
          <PostUpdateImgDiv>
            <PostContentImg src={work02} />
          </PostUpdateImgDiv>
          <PostUpdateBtn>送出</PostUpdateBtn>
        </PostContain>
      </Box>
    </>
  );
}
