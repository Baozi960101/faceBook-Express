const token = "token";
const mode = "mode";

export const SetUserToken = (UserToken) => {
    return localStorage.setItem(token, UserToken);
};

export const GetUserToken = () => {
    return localStorage.getItem(token);
  };

  export const SetColorToken = (color) => {
    return localStorage.setItem(mode, color);
};

export const GetColorToken = () => {
    return localStorage.getItem(mode);
  };  