import { authAPI } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = { //https://youtu.be/b3pU3hsJlNk?t=693  //https://youtu.be/b3pU3hsJlNk?t=861 api docs
  userId: null,
  email: null,
  login: null,
  isAuth: false //https://youtu.be/b3pU3hsJlNk?t=2054 https://youtu.be/_X3dVadZp2U?t=323
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: //https://youtu.be/b3pU3hsJlNk?t=923 по 19хв
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ 
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth}, //https://youtu.be/b3pU3hsJlNk?t=2054
});

export const getAuthUserData = () => async (dispatch) => { //https://youtu.be/18hAMlMkQks?t=1080
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data; //https://youtu.be/b3pU3hsJlNk?t=1557
    dispatch(setAuthUserData(id, email, login, true)); //https://youtu.be/oWeSh6-Mrvg?t=831
  }
}; 
       
export const login =    
  (email, password, rememberMe, setStatus) => async (dispatch) => { //https://youtu.be/oWeSh6-Mrvg?t=207 https://youtu.be/oWeSh6-Mrvg?t=493
    let response = await authAPI.login(email, password, rememberMe); 
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else { //https://youtu.be/oWeSh6-Mrvg?t=909
      setStatus(response.data.messages);
    } 
  };

export const logout = () => async (dispatch) => { //https://youtu.be/oWeSh6-Mrvg?t=622
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false)); //https://youtu.be/oWeSh6-Mrvg?t=831
  }
};


export default authReducer;
