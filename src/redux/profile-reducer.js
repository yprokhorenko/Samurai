import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
  posts: [
    { id: 1, message: "Hey, what do you want?", likesCount: 8 },
    { id: 2, message: "Ok, than", likesCount: 3 },
    { id: 3, message: "Don't text me plz?", likesCount: 6 },
  ],
  profile: null, //https://youtu.be/MM02LsZqssQ?t=1633
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost], //https://youtu.be/R3ZsEyc4BCo?t=1922
        newPostText: "",
      };
    }
    
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }; //https://youtu.be/MM02LsZqssQ?t=1561
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    case SAVE_PHOTO_SUCCESS: //https://youtu.be/fnzO0U1mSb8?t=1603
      return {...state, profile: {...state.profile, photos: action.photos}}

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return ({ type: ADD_POST, newPostText });
};


export const setUsersProfile = (profile) => ({ //https://youtu.be/MM02LsZqssQ?t=1561
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => async (dispatch) => { //https://youtu.be/18hAMlMkQks?t=807
  let response = await usersAPI.getProfile(userId);
  dispatch(setUsersProfile(response.data));
};

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getStatus = (userId) => async (dispatch) => { //https://youtu.be/1faxVHNBnsU?t=692
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => { //https://youtu.be/1faxVHNBnsU?t=951
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhotoSuccess = (photos) => ({ //https://youtu.be/fnzO0U1mSb8?t=1430
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const savePhoto = (file) => async (dispatch) => { //https://youtu.be/fnzO0U1mSb8?t=1292
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile, _error, getState,setStatus) => async (dispatch) => { //https://youtu.be/-tDhjScH_0s?t=2193 //https://youtu.be/-tDhjScH_0s?t=2371 network
const userId = getState().auth.userId;
const response = await profileAPI.saveProfile(profile);
if (response.data.resultCode === 0) {
  dispatch(getUserProfile(userId)); //https://youtu.be/-tDhjScH_0s?t=2753
} else { //https://youtu.be/-tDhjScH_0s?t=3428
         //https://qna.habr.com/q/954041
  // let _error = response.data.messages[0];  
  // setStatus({error: data.data.messages})
  setStatus({error: response.data.data.messages})
}
};



export default profileReducer;
