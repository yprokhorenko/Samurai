import { authAPI } from "../api/api";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true, //https://youtu.be/R3ZsEyc4BCo?t=330 //https://youtu.be/GFN1D81sBEw?t=846
      };
    default:
      return state;
  }
};

export const initializedSuccess = (userId, email, login, isAuth) => ({
  type: INITIALIZED_SUCCESS
});

export const initializeApp = () => (dispatch) => {    //https://youtu.be/GFN1D81sBEw?t=1024 ! about promices
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initializedSuccess());
  })
};

export default appReducer;

/* thunk - f, до цього диспатчии тільки action - об'єкт
https://youtu.be/eWdnjfRu9Io?t=814
https://youtu.be/eWdnjfRu9Io?t=912
https://youtu.be/eWdnjfRu9Io?t=1346
https://youtu.be/eWdnjfRu9Io?t=1357 middleWare - щоб можна диспатчити в thunk. Щоб стор розрізняв з action'ами. https://youtu.be/dtKX3JyeVts?t=583

thunk and reducers https://youtu.be/18hAMlMkQks?t=1024
*/
//МИ ДИСПАТЧИМО НЕ АС , а його виклик (те що прийде після виклику).
// редюсер не зберігає стейт а тільки обробляє його.