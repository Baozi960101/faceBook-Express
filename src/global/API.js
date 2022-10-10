export function createNewUserAPI(
  creatNickname,
  creatUsername,
  creatPassword,
  creatPhone,
  creatMail
) {
  return fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      creatNickname,
      creatUsername,
      creatPassword,
      creatPhone,
      creatMail,
    }),
  }).then();
}

export function loginAPI(username, password) {
  return fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
}

export function checkLoginAPI(token) {
  return fetch("/checkMe", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
}

export function postArticleAPI(UserId, content, img) {
  return fetch("/article", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      UserId,
      content,
      img,
    }),
  }).then((res) => res.json());
}

export function hangleColorModeAPI(id, colorMode) {
  return fetch("/colorMode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      colorMode,
    }),
  }).then((res) => res.json());
}

export function upDateMyselfDataAPI(id, nickName, phone, email, img) {
  return fetch("/upDateMyselfData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      nickName,
      phone,
      email,
      img,
    }),
  }).then((res) => res.json());
}

export function upDateMyselfPassAPI(id, password) {
  return fetch("/upDateMyselfPass", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      password,
    }),
  }).then((res) => res.json());
}

export function allPostApi() {
  return fetch("/all").then((res) => res.json());
}

export function singlePostApi(id) {
  return fetch(`/update/${id}`).then((res) => res.json());
}

export function handleSinglePostApi(UserId, id, content, img) {
  return fetch(`/update/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      UserId,
      id,
      content,
      img,
    }),
  });
}

export function handleDeletePostApi(UserId, id) {
  return fetch(`/delete/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      UserId,
      id,
    }),
  });
}
