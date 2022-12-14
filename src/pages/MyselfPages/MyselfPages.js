/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import { useContext, useState } from "react";
import {
  MEDIA_QUERY_Header_SMALL,
  MEDIA_QUERY_Header_MB,
  MEDIA_QUERY_SideBar,
  MEDIA_QUERY,
} from "../../global/style";
import { AuthContext, ThemeContext } from "../../global/context";
import { useNavigate } from "react-router-dom";
import { upDateMyselfDataAPI, upDateMyselfPassAPI } from "../../global/API";
import { SetUserToken } from "../../global/utils";
import Swal from "sweetalert2";
import photo from "../../image/photo.svg";

const Box = styled.div`
  padding-top: 10px;
  background-color: ${({ theme }) => theme.bodyBackGroundColor};
  color: ${({ theme }) => theme.color};
  width: 680px;
  display: flex;
  height: auto;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.logoImgBackground};
  border-radius: 40px;
`;

const UpdateHead = styled.img`
  max-height: 100%;
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
  margin-top: 20px;
`;

const DateTitle = styled.div`
  width: 130px;
  margin-right: 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.color};

  ${MEDIA_QUERY_Header_MB} {
    font-size: 16px;
  }
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

const PostMyselfUpload = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
`;

const PostMyselfUploadContains = styled.div`
  width: 33%;
  height: 25px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: box-sizing;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  color: ${({ theme }) => theme.color};

  position: relative;

  :hover {
    background-color: ${({ theme }) => theme.headerHoverColor};
  }
`;

const PostMyselfUploadImg = styled.img`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-top: 1px;
`;

const UploadImgBtn = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  opacity: 0;
`;

export default function MyselfPages() {
  const { user, setUser } = useContext(AuthContext);
  const { returnClick } = useContext(ThemeContext);

  const [nickName, setNickName] = useState(user.nickName);
  const [pass, setPass] = useState(null);
  const [passAgain, setPassAgain] = useState(null);
  const [phone, setPhone] = useState(user.phone);
  const [mail, setMail] = useState(user.email);

  const [imageValue, setImageValue] = useState(user.img);

  const [passErr, setPassErr] = useState(false);
  const [myDataErr, setMyDataErr] = useState(false);

  const navigate = useNavigate();

  function handleChangeNick(e) {
    setNickName(e.target.value);
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

  function upDatePassword() {
    if (pass !== passAgain || pass === null) {
      setPassErr(true);
      return;
    }
    setPassErr(false);
    upDateMyselfPassAPI(user.id, pass);
    Swal.fire({
      icon: "success",
      title: "??????????????????????????????",
      confirmButtonColor: "#1877F2",
    });
    returnClick();
    setUser(false);
    SetUserToken();
    navigate("/");
  }

  function upDateMyself() {
    if (nickName === "" || nickName === null) {
      setMyDataErr(true);
      return;
    }
    setMyDataErr(false);
    upDateMyselfDataAPI(user.id, nickName, phone, mail, imageValue);
    Swal.fire({
      icon: "success",
      title: "??????????????????????????????",
      confirmButtonColor: "#1877F2",
    });
    returnClick();
    setUser(false);
    SetUserToken();
    navigate("/");
  }

  const handleOnChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        setImageValue(reader.result);
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Box>
        <PostContain>
          <PostUpdateTitle>????????????</PostUpdateTitle>
          <DateContent>
            <DateTitle>????????? :</DateTitle>
            <ValueInput
              type="password"
              placeholder="??????"
              onChange={handleChangePass}
              value={pass}
            />
          </DateContent>
          <DateContent>
            <DateTitle>?????????????????? :</DateTitle>
            <ValueInput
              type="password"
              placeholder="??????"
              onChange={handleChangePassAgain}
              value={passAgain}
            />
          </DateContent>
          <ErrMessage active={passErr}>???????????????</ErrMessage>
          <Btn onClick={upDatePassword}>??????</Btn>
        </PostContain>
        <PostContain>
          <PostUpdateTitle>??????????????????</PostUpdateTitle>
          <UpdateHeadArea>
            <UpdateHeadContains>
              <UpdateHead src={user.img} />
            </UpdateHeadContains>
          </UpdateHeadArea>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ maxWidth: "50%" }} src={imageValue} />
          </div>

          <PostMyselfUpload>
            <PostMyselfUploadContains>
              <PostMyselfUploadImg src={photo} />
              <UploadImgBtn
                type="file"
                onChange={handleOnChange}
              ></UploadImgBtn>
              ????????????
            </PostMyselfUploadContains>
            {imageValue && (
              <PostMyselfUploadContains
                onClick={() => {
                  setImageValue(null);
                }}
              >
                ????????????
              </PostMyselfUploadContains>
            )}
          </PostMyselfUpload>
          <DateContent>
            <DateTitle>?????? :</DateTitle>
            <ValueInput
              placeholder="??????"
              onChange={handleChangeNick}
              value={nickName}
            />
          </DateContent>
          <DateContent>
            <DateTitle>?????? :</DateTitle>
            <ValueInput
              placeholder="??????"
              onChange={handleChangePhone}
              value={phone}
            />
          </DateContent>
          <DateContent>
            <DateTitle>???????????? :</DateTitle>
            <ValueInput
              placeholder="??????"
              onChange={handleChangeMail}
              value={mail}
            />
          </DateContent>
          <ErrMessage active={myDataErr}>???????????????</ErrMessage>
          <Btn onClick={upDateMyself}>??????</Btn>
        </PostContain>
      </Box>
    </>
  );
}
