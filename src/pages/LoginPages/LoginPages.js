import styled from "styled-components";
import { MEDIA_QUERY_MB, MEDIA_QUERY_MIDD } from "../../constants/style";
import facebook from "../../image/facebook.svg";
import cross from "../../image/cross.svg";
import { useState } from "react";

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f0f2f5;
  padding: 120px 0px 200px 0px;
  box-sizing: border-box;

  ${MEDIA_QUERY_MB} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 110px;
  }
`;

const TitieContains = styled.div`
  display: block;
  margin: 110px 0px 0 0;
  width: 500px;

  ${MEDIA_QUERY_MB} {
    width: 400px;
  }
`;

const MainLogo = styled.div`
  width: 100%;

  ${MEDIA_QUERY_MB} {
    display: flex;
    justify-content: center;
  }
`;

const Svg = styled.img`
  width: 300px;
`;

const Title = styled.div`
  width: 100%;
  font-size: 30px;
  color: black;
  font-weight: 500;
  padding-left: 30px;
  box-sizing: border-box;

  ${MEDIA_QUERY_MIDD} {
    width: 100%;
    font-size: 28px;
  }

  ${MEDIA_QUERY_MB} {
    width: 100%;
    font-size: 25px;
    color: black;
    font-weight: 500;
    text-align: center;
  }
`;

const LogoArea = () => {
  return (
    <TitieContains>
      <MainLogo>
        <Svg src={facebook} />
      </MainLogo>
      <Title>Facebook，讓你和親朋好友保持聯繫，隨時分享生活中的每一刻。</Title>
    </TitieContains>
  );
};

const LoginArea = styled.div`
  width: 430px;
  padding: 22px 20px 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  margin: 80px 40px 20px 40px;
  box-sizing: border-box;

  ${MEDIA_QUERY_MB} {
    width: 400px;
    margin: 40px 0 30px 0;
  }
`;

const LoginInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #dddfe2;
  font-size: 18px;
  padding: 14px 16px;
  outline-color: #3d84ef;
  box-sizing: border-box;

  & + & {
    margin-top: 20px;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  text-align: center;
  background-color: #1877f2;
  border: 0;
  border-radius: 8px;
  padding: 10px 0px;
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
`;

const PasswordText = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  width: 100%;
  text-align: center;
  padding: 20px 0px 25px 0px;
  border-bottom: 1px solid #dddfe2;
`;

const ForgotPassword = styled.div`
  color: red;
  text-decoration: none;
`;

const CreateNew = styled.div`
  border: none;
  border-radius: 6px;
  font-size: 18px;
  line-height: 48px;
  padding: 0 16px;
  background-color: #42b72a;
  margin-top: 25px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`;

const RemarkText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  box-sizing: box-sizing;

  ${MEDIA_QUERY_MB} {
    width: 400px;
  }
`;

const RemarkLink = styled.a`
  font-size: 14px;
  color: black;
  text-decoration: none;
  font-weight: 600;

  :hover {
    text-decoration: underline;
  }
`;

const Remark = () => {
  return (
    <RemarkText>
      為名人、品牌或商家<RemarkLink href="">建立粉絲專業</RemarkLink>。
    </RemarkText>
  );
};

const Login = ({
  username,
  password,
  handleUser,
  handlePass,
  login,
  createNew,
  active,
}) => {
  return (
    <LoginArea>
      <LoginInput value={username} onChange={handleUser} placeholder="帳號" />
      <LoginInput
        value={password}
        onChange={handlePass}
        type="password"
        placeholder="密碼"
      />
      <LoginButton onClick={login}>登入</LoginButton>
      <PasswordText active={active}>
        <ForgotPassword>登入失敗</ForgotPassword>
      </PasswordText>
      <CreateNew onClick={createNew}>建立新帳號</CreateNew>
    </LoginArea>
  );
};

const FooterArea = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 30px 0;
  box-sizing: border-box;
`;

const FooterLinkArea = styled.div`
  max-width: 980px;
  margin: auto;

  ${MEDIA_QUERY_MIDD} {
    max-width: 880px;
  }

  ${MEDIA_QUERY_MB} {
    padding: 0 30px;
  }
`;

const FooterLink = styled.a`
  padding: 0 6px;
  text-decoration: none;
  color: #737373;
  font-size: 14px;

  :hover {
    text-decoration: underline;
  }
`;

const Curve = styled.div`
  border-bottom: 1px solid #dddfe2;
  height: 10px;
  margin-bottom: 8px;
`;

const Meta = styled.div`
  text-decoration: none;
  color: #737373;
  font-size: 14px;
  margin-top: 15px;
  margin-left: 3px;
`;

const Footer = () => {
  return (
    <FooterArea>
      <FooterLinkArea>
        <FooterLink href="">中文(台灣)</FooterLink>
        <FooterLink href="">English(US)</FooterLink>
        <FooterLink href="">日本語</FooterLink>
        <FooterLink href="">Deutsch</FooterLink>
        <Curve></Curve>
        <FooterLink href="">註冊</FooterLink>
        <FooterLink href="">登入</FooterLink>
        <FooterLink href="">Message</FooterLink>
        <FooterLink href="">Facebook Lite </FooterLink>
        <FooterLink href="">遊戲</FooterLink>
        <FooterLink href="">地標</FooterLink>
        <Meta>Meta @ 2022</Meta>
      </FooterLinkArea>
    </FooterArea>
  );
};

const RegisterBody = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(252, 252, 253, 0.6);
  position: fixed;
  top: 0;
`;

const RegisterArea = styled.div`
  width: 430px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
  padding: 10px 15px 20px 15px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
`;

const RegisterTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  font-weight: 600;
  margin: 20px 0;
`;

const RegisterCross = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const RegisterError = styled.div`
  width: 100%;
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  color: red;
  margin-top: 20px;
`;

const RegisterBtn = styled.div`
  width: 120px;
  text-align: center;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  line-height: 48px;
  background-color: #42b72a;
  margin: 25px auto 0 auto;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`;

const Register = ({
  close,
  nickname,
  handelNickname,
  handelPassWord,
  handelUsername,
  active,
  err,
  login,
}) => {
  return (
    <RegisterBody active={active}>
      <RegisterArea>
        <RegisterTitle>
          <div>註冊</div>
          <RegisterCross onClick={close} src={cross} />
        </RegisterTitle>
        <LoginInput
          onChange={handelNickname}
          value={nickname}
          placeholder="設定暱稱"
        />
        <LoginInput onChange={handelUsername} placeholder="設定帳號" />
        <LoginInput
          onChange={handelPassWord}
          type="password"
          placeholder="設定密碼"
        />
        <RegisterError active={err}>請填完整</RegisterError>
        <RegisterBtn onClick={login}>建立新帳號</RegisterBtn>
      </RegisterArea>
    </RegisterBody>
  );
};

export default function LoginPages() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [creatNickname, setCreatNickname] = useState("");
  const [creatUsername, setCreatUsername] = useState("");
  const [creatPassword, setCreatPassword] = useState("");

  const [loginFail, setLoginFail] = useState(false);
  const [errArea, setErrArea] = useState(false);

  const [register, setRegister] = useState(false);

  function handleUser(e) {
    setUsername(e.target.value);
  }

  function handlePass(e) {
    setPassword(e.target.value);
  }

  function handleRegister() {
    setRegister(!register);
  }

  function handleRegisterNick(e) {
    setErrArea(false);
    setCreatNickname(e.target.value);
  }

  function handleRegisterUser(e) {
    setErrArea(false);
    setCreatUsername(e.target.value);
  }

  function handleRegisterPass(e) {
    setErrArea(false);
    setCreatPassword(e.target.value);
  }

  function handleLogin() {
    if (username === "" || password === "") {
      setLoginFail(true);
      return;
    }
    setLoginFail(false);
    console.log(username, password);
  }

  function handleRegisterLogin() {
    if (creatNickname === "" || creatUsername === "" || creatPassword === "") {
      setErrArea(true);
      return;
    }
    console.log(creatNickname, creatUsername, creatPassword);
  }

  return (
    <>
      <Body>
        <Register
          close={handleRegister}
          active={register}
          err={errArea}
          login={handleRegisterLogin}
          nickname={creatNickname}
          handelNickname={handleRegisterNick}
          handelUsername={handleRegisterUser}
          handelPassWord={handleRegisterPass}
        />
        <LogoArea />
        <div>
          <Login
            username={username}
            password={password}
            handleUser={handleUser}
            handlePass={handlePass}
            createNew={handleRegister}
            active={loginFail}
            login={handleLogin}
          />
          <Remark />
        </div>
      </Body>
      <Footer />
    </>
  );
}
