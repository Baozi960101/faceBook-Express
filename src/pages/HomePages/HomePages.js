import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {
  MEDIA_QUERY_Header_SMALL,
  MEDIA_QUERY_Header_MB,
  MEDIA_QUERY_SideBar,
  MEDIA_QUERY
} from "../../constants/style";
import edit from "../../image/edit.svg";
import editDark from "../../image/editDark.svg";
import photo from "../../image/photo.svg";
import mail from "../../image/mail.svg";
import niceImg from "../../image/nice.svg";
import good from "../../image/good.svg";
import noGood from "../../image/noGood.svg";
import noGoodDark from "../../image/noGoodDark.svg";
import cross from "../../image/cross.svg";
import crossDark from "../../image/crossDark.svg";
import work01 from "../../image/work01.png";
import work02 from "../../image/work02.png";
import work03 from "../../image/work03.png";
import { ThemeContext, AuthContext } from "../../context/context";

const Box = styled.div`
  padding-top: 10px;
  background-color: ${({ theme }) => theme.bodyBackGroundColor};
  color: ${({ theme }) => theme.color};
  max-width: 680px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 20px;
  padding: 20px 0;

  ${MEDIA_QUERY_Header_SMALL} {
    margin: 0 40px;
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
    padding-top:40px;
    width:95%;
    margin: auto;
  }
`;

const DynamicContain = styled.div`
  width: 100%;
  max-height: 230px;
  display: flex;
  justify-content: space-between;

  ${MEDIA_QUERY}{
    display:none;
  }
`;

const DynamicList = styled.div`
  width: 19%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 10px 8px rgb(0 0 0 / 10%), 0 2px rgb(0 0 0 / 10%);

  ${MEDIA_QUERY_Header_MB} {
    width: 24%;
  }

  ${MEDIA_QUERY_SideBar} {
    width: 19%;
  }

  & + & {
    align-items: center;
  }
`;

const DynamicListMyself = styled(DynamicList)`
  width: 100%;
  height: 78%;
  border-radius: 0px;
`;

const DynamicListMyselfText = styled(DynamicList)`
  width: 100%;
  height: 22%;
  border-radius: 0px;
  padding-top: 8px;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color};
  box-sizing: border-box;
  border-top: 1px solid #d1d7e1;

  :hover {
    background-color: ${({ theme }) => theme.headerHoverColor};
  }
`;

const DynamicListRWD = styled(DynamicList)`
  ${MEDIA_QUERY_Header_MB} {
    display: none;
  }
  ${MEDIA_QUERY_SideBar} {
    display: block;
    width: 19%;
  }
`;

const DynamicListIbg = styled.img`
  max-height: 100%;
`;
const DynamicMyself = ({ src }) => {
  return (
    <DynamicList>
      <DynamicListMyself>
        <DynamicListIbg src={src} />
      </DynamicListMyself>
      <DynamicListMyselfText>最新文章</DynamicListMyselfText>
    </DynamicList>
  );
};

const Dynamic = ({ src }) => {
  return (
    <DynamicList>
      <DynamicListIbg src={src} />
    </DynamicList>
  );
};

const DynamicRWD = ({ src }) => {
  return (
    <DynamicListRWD>
      <DynamicListIbg src={src} />
    </DynamicListRWD>
  );
};

const PostMyselfContains = styled.div`
  width: 100%;
  height: 123px;
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 10px 15px rgb(0 0 0 / 10%), 0 1px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  border-radius: 10px;
  margin: 25px 0;
`;

const PostMyselfMain = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.borderBackGround};
`;

const PostMyselfLogo = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.headerHoverColor};
  border-radius: 36px;
`;

const PostMyselfImg = styled.img`
  max-height: 100%;
  cursor: pointer;
`;

const PostMyselfInput = styled.input`
  width: 88%;
  height: 22px;
  background-color: ${({ theme }) => theme.searchBackground};
  padding: 8px 12px;
  box-sizing: box-sizing;
  border-radius: 20px;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  outline: 0;
  margin-left: 15px;

  :hover {
    background-color: ${({ theme }) => theme.headerHoverColor};
  }
`;

const PostMyselfUpload = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  :hover {
    background-color: ${({ theme }) => theme.headerHoverColor};
  }
`;

const PostMyself = ({ user, value, handleValue, handleMessage }) => {
  return (
    <PostMyselfContains>
      <PostMyselfMain>
        <PostMyselfLogo>
          <PostMyselfImg />
          User
        </PostMyselfLogo>
        <PostMyselfInput
          value={value}
          onChange={handleValue}
          placeholder={user + "，在想些甚麼 ?"}
        />
      </PostMyselfMain>
      <PostMyselfUpload>
        <PostMyselfUploadContains>
          <PostMyselfUploadImg src={photo} />
          上傳相片
        </PostMyselfUploadContains>
        <PostMyselfUploadContains onClick={handleMessage}>
          <PostMyselfUploadImg src={mail} />
          送出
        </PostMyselfUploadContains>
      </PostMyselfUpload>
    </PostMyselfContains>
  );
};

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

const PostAuthContain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 18px;
`;

const PostAuthDataContain = styled.div`
  width: 92%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
`;

const PostAuthData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PostAuthTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color};
`;

const PostAuthDete = styled.div`
  font-size: 12px;
  color: #65676b;
`;

const PostBtn = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;

  & + & {
    margin-left: 20px;
  }
`;

const PostContentContain = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 18px;
  color: ${({ theme }) => theme.color};
  font-size: 16px;
  font-weight: 600;
`;

const PostContentImg = styled.img`
  max-width: 100%;
`;

const PostContentNice = styled.div`
  width: 100%;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const PostContentNiceNumber = styled.div`
  display: flex;
  align-items: center;
`;

const PostContentNiceNumberImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 7px;
`;

const PostContentNiceCheck = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const PostContentNiceChage = styled(PostContentNiceNumberImg)`
  width: 30px;
  height: 30px;
`;

export default function HomePages() {
  const [value, setValue] = useState("");

  const { user, setUser } = useContext(AuthContext);

  const { colorMode, returnClick } = useContext(ThemeContext);

  const navigate = useNavigate();

  const Post = ({
    colorMode,
    user,
    title,
    dete,
    content,
    src,
    goodNumber,
    onClickDelete,
  }) => {
    const [nice, setNice] = useState(false);

    function niceClick() {
      setNice(!nice);
    }

    function handleUpdatePost() {
      navigate("/update");
    }

    return (
      <PostContain>
        <PostAuthContain>
          <PostMyselfLogo>
            <PostMyselfImg />
            {user}
          </PostMyselfLogo>
          <PostAuthDataContain>
            <PostAuthData>
              <PostAuthTitle>{title}</PostAuthTitle>
              <PostAuthDete>{dete}</PostAuthDete>
            </PostAuthData>
            <div style={{ display: "flex" }}>
              <PostBtn
                onClick={handleUpdatePost}
                src={colorMode === "light" ? edit : editDark}
              />
              <PostBtn
                onClick={onClickDelete}
                src={colorMode === "light" ? cross : crossDark}
              />
            </div>
          </PostAuthDataContain>
        </PostAuthContain>
        <PostContentContain>{content}</PostContentContain>
        <PostContentImg src={src} />
        <PostContentNice>
          <PostContentNiceNumber>
            <PostContentNiceNumberImg src={niceImg} /> {goodNumber}
          </PostContentNiceNumber>
          <PostContentNiceCheck onClick={niceClick}>
            <PostContentNiceChage
              src={nice ? good : colorMode === "light" ? noGood : noGoodDark}
            />{" "}
            {nice ? "已讚" : "讚"}
          </PostContentNiceCheck>
        </PostContentNice>
      </PostContain>
    );
  };

  function handlePostContent(e) {
    setValue(e.target.value);
  }

  function handleMessageClick() {
    setValue("");
    console.log(value);
  }

  return (
    <>
      <Box>
        <DynamicContain>
          <DynamicMyself src={work01} />
          <Dynamic src={work01} />
          <Dynamic src={work02} />
          <Dynamic src={work03} />
          <DynamicRWD src={work01} />
        </DynamicContain>
        <PostMyself
          value={value}
          handleValue={handlePostContent}
          handleMessage={handleMessageClick}
          user="User"
        />
        <Post
          colorMode={colorMode}
          user="User"
          title="奇摩"
          dete="2011-11-11"
          content="我好帥"
          src={work02}
          goodNumber="777"
        />
        <Post
          colorMode={colorMode}
          user="User"
          title="奇摩"
          dete="2011-11-11"
          content="我好帥"
          src={work02}
          goodNumber="777"
        />
        <Post
          colorMode={colorMode}
          user="User"
          title="奇摩"
          dete="2011-11-11"
          content="我好帥"
          src={work02}
          goodNumber="777"
        />
      </Box>
    </>
  );
}
