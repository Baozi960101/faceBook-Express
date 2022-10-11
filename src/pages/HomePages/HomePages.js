/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  MEDIA_QUERY_Header_SMALL,
  MEDIA_QUERY_Header_MB,
  MEDIA_QUERY_SideBar,
  MEDIA_QUERY,
  MEDIA_QUERY_Load,
  MEDIA_QUERY_Load_2,
} from "../../global/style";
import edit from "../../image/edit.svg";
import editDark from "../../image/editDark.svg";
import photo from "../../image/photo.svg";
import mail from "../../image/mail.svg";
import niceImg from "../../image/nice.svg";
import good from "../../image/good.svg";
import noGood from "../../image/noGood.svg";
import noGoodDark from "../../image/noGoodDark.svg";
import options from "../../image/options.svg";
import optionsDark from "../../image/optionsDark.svg";
import cross from "../../image/cross.svg";
import crossDark from "../../image/crossDark.svg";
import { ThemeContext, AuthContext } from "../../global/context";
import {
  postArticleAPI,
  allPostApi,
  handleDeletePostApi,
  handleSinglePostApi,
} from "../../global/API";
import Swal from "sweetalert2";
import Skeleton from "@mui/material/Skeleton";

const Box = styled.div`
  padding-top: 10px;
  background-color: ${({ theme }) => theme.bodyBackGroundColor};
  color: ${({ theme }) => theme.color};
  width: 680px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 20px;
  padding: 20px 0;

  z-index: 0;

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

  ${MEDIA_QUERY} {
    padding-top: 40px;
    width: 95%;
    margin: auto;
  }
`;

const LoadArea = styled.div`
  background-color: ${({ theme }) => theme.bodyBackGroundColor};
  width: 680px;
  height: 100vh;
  position: fixed;
  top: 55px;
  z-index: 1;
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding-top: 22px;
  box-sizing: border-box;

  ${MEDIA_QUERY_Load} {
    width: 660px;
  }

  ${MEDIA_QUERY_Load_2} {
    width: 630px;
  }

  ${MEDIA_QUERY_Header_SMALL} {
    margin: 0;
  }

  ${MEDIA_QUERY_Header_MB} {
    width: calc(100vw - 650px);
  }

  ${MEDIA_QUERY_SideBar} {
    width: calc(100vw - 370px);
  }
  ${MEDIA_QUERY_Header_SMALL} {
    width: 0px;
    overflow: hidden;
  }
`;

const DynamicContain = styled.div`
  width: 100%;
  max-height: 230px;
  display: flex;
  justify-content: space-between;

  ${MEDIA_QUERY} {
    display: none;
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
  padding: 13px 20px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.borderBackGround};
  padding-bottom: 12px;
  box-sizing: border-box;
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
  background-color: ${({ theme }) => theme.searchBackground};
  color: ${({ theme }) => theme.color};
  padding: 8px 12px;
  box-sizing: box-sizing;
  border-radius: 20px;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  outline: 0;
  margin-left: 8px;

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
  margin-top: 10px;
`;

const PostMyselfUploadImg = styled.img`
  width: 28px;
  height: 28px;
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
  font-size: 15px;
  color: ${({ theme }) => theme.homePagesColor};

  position: relative;

  :hover {
    background-color: ${({ theme }) => theme.headerHoverColor};
  }
`;

const PostMyself = ({
  user,
  value,
  imgValue,
  handleValue,
  handleImgValue,
  handleDeleteImgValue,
  handleMessage,
}) => {
  return (
    <PostMyselfContains>
      <PostMyselfMain>
        <PostMyselfLogo>
          <PostMyselfImg src={user.img} />
        </PostMyselfLogo>
        <PostMyselfInput
          value={value}
          onChange={handleValue}
          placeholder={user.nickName + "，在想些什麼 ?"}
        />
      </PostMyselfMain>
      <img src={imgValue} />
      <PostMyselfUpload>
        <PostMyselfUploadContains>
          <PostMyselfUploadImg src={photo} />
          <UploadImgBtn type="file" onChange={handleImgValue}></UploadImgBtn>
          上傳圖片
        </PostMyselfUploadContains>
        {imgValue && (
          <PostMyselfUploadContains onClick={handleDeleteImgValue}>
            清除圖片
          </PostMyselfUploadContains>
        )}
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
  padding: 10px 0 30px 0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgb(0 0 0 / 10%), 0 1px rgb(0 0 0 / 10%);
  position: relative;

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
  margin-left: 8px;
`;

const PostAuthData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const PostAuthTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.articleTitle};
`;

const PostAuthDete = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.homePagesColor};
  font-weight: 400;
`;

const PostBtn = styled.img`
  cursor: pointer;
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;

const PostContentContain = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 18px;
  color: ${({ theme }) => theme.articleTitle};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
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
  width: 28px;
  height: 28px;
`;

const UploadImgBtn = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  opacity: 0;
`;

const MoreOption = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  background-color: ${({ theme }) => theme.background};
  width: 120px;
  height: 100px;
  position: absolute;
  top: 40px;
  right: 30px;
  border-radius: 8px;
  box-shadow: 0 10px 10px rgb(0 0 0 / 10%), 0 2px 10px rgb(0 0 0 / 10%);
  flex-direction: column;
  overflow: hidden;
`;

const MoreOptionArea = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 15px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.headerHoverColor};
  }
`;

const UpdateArticleBackGround = styled.div`
  width: 680px;
  height: 100%;
  position: fixed;
  top: 0;
  display: ${(props) => (props.active ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.updateArticleBackGround};
  z-index: 2;
  overflow-y: auto;
  padding-bottom: 100px;
  padding-top: 100px;
  box-sizing: border-box;
`;

const UpdateArticleArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 500px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 10px 10px rgb(0 0 0 / 10%), 0 2px 10px rgb(0 0 0 / 10%);
  border-radius: 10px;
`;

const UpdateArticleTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  position: relative;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid #e5e5e5;
`;

const UpdateArticleAreaCross = styled.div`
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.logoImgBackground};
  position: absolute;
  top: 10px;
  right: 10px;

  :hover {
    background-color: ${({ theme }) => theme.headerHoverColor};
  }
`;

const UpdateArticleCrossBtn = styled.img`
  width: 15px;
  height: 15px;
`;

const UpdateArticleInput = styled.textarea`
  width: 90%;
  font-size: 16px;
  padding: 10px 20px;
  margin: 20px auto;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const UpdateArticleBtn = styled.div`
  margin: 10px auto 0 auto;
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #1b74e4;
  color: white;
  cursor: pointer;
`;

const SkeletonNow = ({ loading, colorMode }) => {
  return (
    <LoadArea active={loading}>
      <PostMyselfContains style={{ marginBottom: "2px" }}>
        <PostMyselfMain>
          <Skeleton
            variant="circular"
            sx={{ bgcolor: colorMode === "light" ? "" : "#3a3b3c" }}
            width={40}
            height={40}
          />
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: colorMode === "light" ? "" : "#3a3b3c" }}
            width={590}
            height={30}
          />
        </PostMyselfMain>
        <PostMyselfUpload>
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: colorMode === "light" ? "" : "#3a3b3c" }}
            width={250}
            height={40}
          />
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: colorMode === "light" ? "" : "#3a3b3c" }}
            width={250}
            height={40}
          />
        </PostMyselfUpload>
      </PostMyselfContains>
      <PostMyselfContains style={{ marginBottom: "2px" }}>
        <PostMyselfMain style={{ border: "0" }}>
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: colorMode === "light" ? "" : "#3a3b3c" }}
            width={650}
            height={10}
          />
        </PostMyselfMain>
        <PostMyselfMain style={{ border: "0" }}>
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: colorMode === "light" ? "" : "#3a3b3c" }}
            width={200}
            height={8}
          />
        </PostMyselfMain>
        <PostMyselfUpload>
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: colorMode === "light" ? "" : "#3a3b3c" }}
            width={650}
            height={30}
          />
        </PostMyselfUpload>
        <PostMyselfMain style={{ border: "0", marginTop: "20px" }}>
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: colorMode === "light" ? "" : "#3a3b3c" }}
            width={650}
            height={220}
          />
        </PostMyselfMain>
      </PostMyselfContains>
      <PostMyselfContains style={{ marginBottom: "2px" }}>
        <PostMyselfMain style={{ border: "0" }}>
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: colorMode === "light" ? "" : "#3a3b3c" }}
            width={650}
            height={10}
          />
        </PostMyselfMain>
        <PostMyselfMain style={{ border: "0" }}>
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: colorMode === "light" ? "" : "#3a3b3c" }}
            width={200}
            height={8}
          />
        </PostMyselfMain>
        <PostMyselfUpload>
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: colorMode === "light" ? "" : "#3a3b3c" }}
            width={650}
            height={30}
          />
        </PostMyselfUpload>
        <PostMyselfMain style={{ border: "0", marginTop: "20px" }}>
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: colorMode === "light" ? "" : "#3a3b3c" }}
            width={650}
            height={220}
          />
        </PostMyselfMain>
      </PostMyselfContains>
    </LoadArea>
  );
};

export default function HomePages() {
  const [loading, setLoading] = useState(true);

  const [value, setValue] = useState("");
  const [imageValue, setImageValue] = useState("");

  const [allPost, setAllPost] = useState([]);

  const { user } = useContext(AuthContext);

  const { colorMode } = useContext(ThemeContext);

  useEffect(() => {
    allPostApi().then((res) => {
      setAllPost(res.result);
      setLoading(false);
    });
  }, []);

  const Post = ({
    user,
    id,
    colorMode,
    head,
    title,
    dete,
    content,
    src,
    goodNumber,
    articleId,
  }) => {
    const [nice, setNice] = useState(false);
    const [option, setOption] = useState(false);

    const [editChange, setEditChange] = useState(false);

    const [titleValue, setTitleValue] = useState(content);
    const [imageValue, setImageValue] = useState(src);

    function clostOption(e) {
      e.stopPropagation();
      setOption(false);
    }

    function niceClick() {
      setNice(!nice);
    }

    function handleUpdatePost() {
      setEditChange(true);
    }

    function handleDeletePost() {
      handleDeletePostApi(user.id, articleId);
      setLoading(true);
      Swal.fire({
        icon: "success",
        title: "刪除成功",
        confirmButtonColor: "#1877F2",
      }).then(() => {
        allPostApi().then((res) => {
          setAllPost(res.result);
          setLoading(false);
        });
      });
    }

    const handleOnChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          setImageValue(reader.result);
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    };

    function handleNewPost() {
      handleSinglePostApi(id, articleId, titleValue, imageValue);
      setEditChange(false);
      setLoading(true);
      Swal.fire({
        icon: "success",
        title: "修改成功",
        confirmButtonColor: "#1877F2",
      }).then(() => {
        allPostApi().then((res) => {
          setAllPost(res.result);
          setLoading(false);
        });
      });
    }

    return (
      <PostContain onClick={clostOption} id={id}>
        <UpdateArticleBackGround active={editChange}>
          <UpdateArticleArea>
            <UpdateArticleTitle>
              編輯貼文
              <UpdateArticleAreaCross
                onClick={() => {
                  setEditChange(false);
                }}
              >
                <UpdateArticleCrossBtn
                  src={colorMode === "light" ? cross : crossDark}
                />
              </UpdateArticleAreaCross>
            </UpdateArticleTitle>
            <UpdateArticleInput
              rows="10"
              onChange={(e) => {
                setTitleValue(e.target.value);
              }}
              value={titleValue}
            ></UpdateArticleInput>
            <img style={{ margin: "15px 0" }} src={imageValue} />
            <PostMyselfUpload style={{ width: "90%", margin: "auto" }}>
              <PostMyselfUploadContains>
                <PostMyselfUploadImg src={photo} />
                <UploadImgBtn
                  type="file"
                  onChange={handleOnChange}
                ></UploadImgBtn>
                上傳圖片
              </PostMyselfUploadContains>
              {imageValue && (
                <PostMyselfUploadContains
                  onClick={() => {
                    setImageValue(null);
                  }}
                >
                  清除圖片
                </PostMyselfUploadContains>
              )}
            </PostMyselfUpload>
            <UpdateArticleBtn onClick={handleNewPost}>儲存</UpdateArticleBtn>
          </UpdateArticleArea>
        </UpdateArticleBackGround>
        <PostAuthContain>
          <PostMyselfLogo>
            <PostMyselfImg src={head} />
          </PostMyselfLogo>
          <PostAuthDataContain>
            <PostAuthData>
              <PostAuthTitle>{title}</PostAuthTitle>
              <PostAuthDete>{dete}</PostAuthDete>
            </PostAuthData>
            <MoreOption active={option}>
              <MoreOptionArea onClick={handleUpdatePost}>
                <PostBtn
                  src={colorMode === "light" ? edit : editDark}
                  style={{ marginLeft: "15px", marginRight: "10px" }}
                />
                編輯
              </MoreOptionArea>
              <MoreOptionArea onClick={handleDeletePost}>
                <PostBtn
                  src={colorMode === "light" ? cross : crossDark}
                  style={{ marginLeft: "15px", marginRight: "10px" }}
                />
                刪除
              </MoreOptionArea>
            </MoreOption>
            {user.id === parseInt(id) && (
              <div style={{ display: "flex" }}>
                <PostBtn
                  onClick={(e) => {
                    e.stopPropagation();
                    setOption(!option);
                  }}
                  src={colorMode === "light" ? options : optionsDark}
                />
                {/* <PostBtn
                  onClick={handleDeletePost}
                  src={colorMode === "light" ? cross : crossDark}
                /> */}
              </div>
            )}
          </PostAuthDataContain>
        </PostAuthContain>
        <PostContentContain>{content}</PostContentContain>
        <PostContentImg src={src} />
        {/* <PostContentNice>
          <PostContentNiceNumber>
            <PostContentNiceNumberImg src={niceImg} /> {goodNumber}
          </PostContentNiceNumber>
          <PostContentNiceCheck onClick={niceClick}>
            <PostContentNiceChage
              src={nice ? good : colorMode === "light" ? noGood : noGoodDark}
            />{" "}
            {nice ? "已讚" : "讚"}
          </PostContentNiceCheck>
        </PostContentNice> */}
      </PostContain>
    );
  };

  function handlePostContent(e) {
    setValue(e.target.value);
  }

  function handlePostArticle() {
    if (value === "") {
      return;
    }
    setValue("");
    setImageValue("");
    postArticleAPI(user.id, value, imageValue);
    setLoading(true);
    Swal.fire({
      icon: "success",
      title: "發文成功",
      confirmButtonColor: "#1877F2",
    }).then(() => {
      allPostApi().then((res) => {
        setAllPost(res.result);
        setLoading(false);
      });
    });
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

  const NewPost = useMemo(() => {
    return allPost.map((date) => {
      return (
        <Post
          user={user}
          key={date.id}
          id={date.UserId}
          colorMode={colorMode}
          head={date.User.img}
          title={date.User.nickName}
          articleId={date.id}
          dete={new Date(date.createdAt).toLocaleDateString()}
          content={date.content}
          src={date.img}
        />
      );
    });
  }, [allPost, colorMode, user]);

  return (
    <>
      <Box>
        <SkeletonNow loading={loading} colorMode={colorMode} />
        {/* <DynamicContain>
          <DynamicMyself src={work01} />
          <Dynamic src={work01} />
          <Dynamic src={work02} />
          <Dynamic src={work03} />
          <DynamicRWD src={work01} />
        </DynamicContain> */}
        <PostMyself
          imgValue={imageValue}
          value={value}
          handleValue={handlePostContent}
          handleImgValue={handleOnChange}
          handleDeleteImgValue={() => {
            setImageValue(null);
          }}
          handleMessage={handlePostArticle}
          user={user}
        />
        {allPost.length !== 0 && NewPost}
      </Box>
    </>
  );
}
