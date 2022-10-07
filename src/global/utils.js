const token = "token";

export const SetUserToken = (UserToken) => {
    return localStorage.setItem(token, UserToken);
};

export const GetUserToken = () => {
    return localStorage.getItem(token);
  };