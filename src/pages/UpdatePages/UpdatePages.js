import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import {
  MEDIA_QUERY_Header_SMALL,
  MEDIA_QUERY_Header_MB,
  MEDIA_QUERY_SideBar,
  MEDIA_QUERY,
} from "../../global/style";
import photo from "../../image/photo.svg"
import { ThemeContext, AuthContext } from "../../global/context";
import { useParams } from "react-router-dom";
import { singlePostApi, handleSinglePostApi } from "../../global/API";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  padding-top: 10px;
  background-color: ${({ theme }) => theme.bodyBackGroundColor};
  color: ${({ theme }) => theme.color};
  max-width: 680px;
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
    padding-top: 70px;
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
  text-align: center;
`;

const PostContentUpdate = styled.input`
  width: 90%;
  box-sizing: border-box;
  height: 100px;
  padding: 0px 18px;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.headerHoverColor};
  font-size: 16px;
  font-weight: 600;
  margin: 20px auto 50px auto;
`;

const PostUpdateImgDiv = styled.div`
  cursor: pointer;
`;

const PostContentImg = styled.img`
  max-width: 100%;
`;

const PostUpdateBtn = styled.button`
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

export default function UpdatePages() {
  const { user, setUser } = useContext(AuthContext);

  const { colorMode } = useContext(ThemeContext);

  const [value, setValue] = useState("");
  const [img, setImg] = useState();
  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    singlePostApi(id).then((res) => {
      setValue(res.result.content);
      setImg(res.result.img);
    });
  }, [id]);

  function handleChangeValue(e) {
    setValue(e.target.value);
  }


  function handleNewPost() {
    handleSinglePostApi(user.id, id, value, img);
    navigate("/");
  }

  const handleOnChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        setImg(reader.result);
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
          <PostUpdateTitle>編輯文章</PostUpdateTitle>
          <PostContentUpdate
            value={value}
            onChange={handleChangeValue}
          ></PostContentUpdate>
          <PostUpdateImgDiv>
            <PostContentImg src={img} />
          </PostUpdateImgDiv>
          <PostMyselfUpload>
            <PostMyselfUploadContains>
              <PostMyselfUploadImg src={photo} />
              <UploadImgBtn
                type="file"
                onChange={handleOnChange}
              ></UploadImgBtn>
              上傳圖片
            </PostMyselfUploadContains>
            {img && (
              <PostMyselfUploadContains
                onClick={() => {
                  setImg(null);
                }}
              >
                清除圖片
              </PostMyselfUploadContains>
            )}
          </PostMyselfUpload>
          <PostUpdateBtn onClick={handleNewPost}>送出</PostUpdateBtn>
        </PostContain>
      </Box>
    </>
  );
}
