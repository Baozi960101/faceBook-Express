import styled from "styled-components";
import { useContext } from "react";
import {
  MEDIA_QUERY_Header_SMALL,
  MEDIA_QUERY_Header_MB,
  MEDIA_QUERY_SideBar,
} from "../../constants/style";
import photo from "../../image/photo.svg";
import work01 from "../../image/work01.png";
import work02 from "../../image/work02.png";
import work03 from "../../image/work03.png";
import { ThemeContext, AuthContext } from "../../context/context";

const Box = styled.div`
  padding-top: 10px;
  background-color: ${({ theme }) => theme.bodyBackGroundColor};
  color: ${({ theme }) => theme.color};
  max-width: 680px;
  height: 1900px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  scrollbar-color: blue orange;
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
`;

const DynamicContain = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  justify-content: space-between;
`;

const DynamicList = styled.div`
  width: 18%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 10px 8px rgb(0 0 0 / 10%), 0 2px rgb(0 0 0 / 10%);

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

const DynamicListRWD = styled(DynamicList)``;

const DynamicListIbg = styled.img`
  max-height: 100%;
`;
const DynamicMyself = ({ src }) => {
  return (
    <DynamicList>
      <DynamicListMyself>
        <DynamicListIbg src={src} />
      </DynamicListMyself>
      <DynamicListMyselfText>現實動態</DynamicListMyselfText>
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
  border-bottom: 1px solid #e4e6eb;
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
`;

const PostMyselfInput = styled.input`
  width: 88%;
  height: 25px;
  background-color: #f0f2f5;
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
  justify-content: flex-end;
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

const PostMyself = ({ user }) => {
  return (
    <PostMyselfContains>
      <PostMyselfMain>
        <PostMyselfLogo>
          <PostMyselfImg />
          User
        </PostMyselfLogo>
        <PostMyselfInput placeholder={user + "，在想些甚麼 ?"} />
      </PostMyselfMain>
      <PostMyselfUpload>
        <PostMyselfUploadContains>
          <PostMyselfUploadImg src={photo} />
          上傳相片
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

const PostDeleteBtn = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
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
  width: 30px;
  height: 30px;
  margin-right:5px;
`;

const PostContentNiceCheck = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Post = ({
  user,
  title,
  dete,
  content,
  src,
  goodNumber,
  onClickDelete,
  onClickNice,
}) => {
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
          <PostDeleteBtn onClick={onClickDelete} />
        </PostAuthDataContain>
      </PostAuthContain>
      <PostContentContain>{content}</PostContentContain>
      <PostContentImg src={src} />
      <PostContentNice>
        <PostContentNiceNumber>
          <PostContentNiceNumberImg src="" /> 444
        </PostContentNiceNumber>
        <PostContentNiceCheck>
          <PostContentNiceNumberImg src="" /> 讚
        </PostContentNiceCheck>
      </PostContentNice>
    </PostContain>
  );
};

export default function HomePages() {
  const { user, setUser } = useContext(AuthContext);

  const { colorMode } = useContext(ThemeContext);

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
        <PostMyself user="User" />
        <Post
          user="User"
          title="奇摩"
          dete="2011-11-11"
          content="我好帥"
          src={work02}
        />
      </Box>
    </>
  );
}
