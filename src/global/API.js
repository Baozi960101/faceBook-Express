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


export function loginAPI(
    username,
    password,
  ) {
    return fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(res => res.json());
  }