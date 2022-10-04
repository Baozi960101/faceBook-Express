import styled from "styled-components";
import { MEDIA_QUERY_MB , MEDIA_QUERY_MIDD } from "../../constants/style";
import facebook from "../../image/facebook.svg";

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
  box-sizing:border-box;

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

const PasswordText = styled.a`
  width: 100%;
  text-align: center;
  padding: 20px 0px 25px 0px;
  border-bottom: 1px solid #dddfe2;
`;

const ForgotPassword = styled.a`
  color: #1877f2;
  cursor: pointer;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const CreateNew = styled.a`
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
`;

const RemarkText = styled.div`
  width:100%;
  text-align: center;
  font-size: 14px;
  box-sizing:box-sizing;

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

const Login = ({}) => {
  return (
    <LoginArea>
      <LoginInput placeholder="電子郵件地址或手機號碼" />
      <LoginInput type="password" placeholder="密碼" />
      <LoginButton>登入</LoginButton>
      <PasswordText>
        <ForgotPassword href="">忘記密碼 ?</ForgotPassword>
      </PasswordText>
      <CreateNew href="">建立新帳號</CreateNew>
    </LoginArea>
  );
};

const FooterArea = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
`;

const FooterLinkArea = styled.div`
  max-width:980px;
  margin:auto;

  ${MEDIA_QUERY_MIDD} {
    max-width:880px;
  }

  ${MEDIA_QUERY_MB} {
    padding:0 30px;
  }
`

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

export default function LoginPages() {
  return (
    <>
      <Body>
        <LogoArea />
        <div>
          <Login />
          <Remark />
        </div>
      </Body>
      <Footer />
    </>
  );
}
