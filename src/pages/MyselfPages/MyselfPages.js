import styled from "styled-components";
import { useContext, useState } from "react";
import {
  MEDIA_QUERY_Header_SMALL,
  MEDIA_QUERY_Header_MB,
  MEDIA_QUERY_SideBar,
  MEDIA_QUERY,
} from "../../constants/style";
import { AuthContext } from "../../context/context";

const Box = styled.div`
  padding-top: 10px;
  background-color: ${({ theme }) => theme.bodyBackGroundColor};
  color: ${({ theme }) => theme.color};
  width: 680px;
  display: flex;
  height: calc(100vh - 55px);
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

  ${MEDIA_QUERY} {
    padding-top: 75px;
    width: 95%;
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
    margin-top: 50px;
  }
`;

const PostUpdateTitle = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 18px;
  color: ${({ theme }) => theme.color};
  font-size: 25px;
  font-weight: 600;
  text-align: center;
`;

const UpdateHeadArea = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const UpdateHeadContains = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.logoImgBackground};
  border-radius: 40px;
`;

const UpdateHead = styled.img`
  max-height: 100%;
  cursor: pointer;
`;

const Btn = styled.button`
  margin: 30px 30px 15px auto;
  width: 80px;
  padding: 5px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  background-color: #2374e1;
  border: 0;
  color: white;
`;

const DateContent = styled.div`
  width: 100%;
  height: 50%;
  padding: 0 30px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  & + & {
    margin-top: 20px;
  }
`;

const DateTitle = styled.div`
  width: 130px;
  margin-right: 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.color};
`;

const ValueInput = styled.input`
  padding: 5px 15px;
  width: 70%;
  height: 40px;
  font-size: 16px;
  border-radius: 10px;
  border: 0;
  outline: none;
  background-color: ${({ theme }) => theme.searchBackground};
  box-sizing: border-box;

  color: ${({ theme }) => theme.color};

  :hover {
    background-color: ${({ theme }) => theme.setUpHoverBackGroundColor};
  }
`;

const ErrMessage = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 18px 0 15px;
  color: red;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  display: ${(props) => (props.active ? "block" : "none")};
`;

export default function MyselfPages() {
  const { user, setUser } = useContext(AuthContext);

  const [nickname, setNickname] = useState(null);
  const [pass, setPass] = useState(null);
  const [passAgain, setPassAgain] = useState(null);
  const [phone, setPhone] = useState(null);
  const [mail, setMail] = useState(null);

  const [img, setImg] = useState("");

  const [passErr, setPassErr] = useState(false);
  const [myDataErr, setMyDataErr] = useState(false);

  function handleChangeNick(e) {
    setNickname(e.target.value);
  }

  function handleChangePass(e) {
    setPass(e.target.value);
  }

  function handleChangePassAgain(e) {
    setPassAgain(e.target.value);
  }

  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  function handleChangeMail(e) {
    setMail(e.target.value);
  }

  function handleChangeImg(e) {
    setImg(e.target.value);
  }

  function upDatePassword() {
    if (pass === passAgain) {
      console.log(pass, "送出");
      setPassErr(true);
    }
    setPassErr(false);
    return;
  }

  function upDateMyself() {
    if (nickname === "") {
      setMyDataErr(true);
    }
    setMyDataErr(false);
    console.log(nickname, phone, mail);
  }

  return (
    <>
      <Box>
        <PostContain>
          <PostUpdateTitle>更改密碼</PostUpdateTitle>
          <DateContent>
            <DateTitle>新密碼 :</DateTitle>
            <ValueInput
              type="password"
              placeholder="必填"
              onChange={handleChangePass}
              value={pass}
            />
          </DateContent>
          <DateContent>
            <DateTitle>確認輸入密碼 :</DateTitle>
            <ValueInput
              type="password"
              placeholder="必填"
              onChange={handleChangePassAgain}
              value={passAgain}
            />
          </DateContent>
          <ErrMessage active={passErr}>請重新輸入</ErrMessage>
          <Btn onClick={upDatePassword}>送出</Btn>
        </PostContain>
        <PostContain>
          <PostUpdateTitle>更改個人資料</PostUpdateTitle>
          <UpdateHeadArea>
            <UpdateHeadContains>
              <UpdateHead src="" />
            </UpdateHeadContains>
          </UpdateHeadArea>
          <DateContent>
            <DateTitle>暱稱 :</DateTitle>
            <ValueInput
              placeholder="必填"
              onChange={handleChangeNick}
              value={nickname}
            />
          </DateContent>
          <DateContent>
            <DateTitle>電話 :</DateTitle>
            <ValueInput
              placeholder="選填"
              onChange={handleChangePhone}
              value={phone}
            />
          </DateContent>
          <DateContent>
            <DateTitle>電子信箱 :</DateTitle>
            <ValueInput
              placeholder="選填"
              onChange={handleChangeMail}
              value={mail}
            />
          </DateContent>
          <ErrMessage active={myDataErr}>請重新輸入</ErrMessage>
          <Btn onClick={upDateMyself}>送出</Btn>
        </PostContain>
      </Box>
    </>
  );
}
