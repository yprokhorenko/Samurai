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
  profile: null,
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
        posts: [...state.posts, newPost],
      
        newPostText: "",
      };
    }
    
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    case SAVE_PHOTO_SUCCESS:
      return {...state, profile: {...state.profile, photos: action.photos}}

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return ({ type: ADD_POST, newPostText });
};


export const setUsersProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUsersProfile(response.data));
};

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};


export default profileReducer;
