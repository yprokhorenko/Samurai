import { usersAPI } from "../api/api";
import thunk from "redux-thunk";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


let initialState = { //https://youtu.be/ap8HxJPwJhY?t=1470
  users: [],
  pageSize: 5,
  totalItemsCount: 0,
  currentPage: 1, //https://youtu.be/ap8HxJPwJhY?t=1893
  isFetching: true, //https://youtu.be/qE8ThPt1EIM?t=380 //https://youtu.be/iobMksCYGHE?t=201
  followingInProgress: [] //https://youtu.be/iobMksCYGHE?t=201 //https://youtu.be/iobMksCYGHE?t=805
};

const usersReducer = (state = initialState, action) => { 
  switch (action.type) {
    case FOLLOW: //https://youtu.be/ceSZUZZaW30?t=1429
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW: //https://youtu.be/ceSZUZZaW30?t=1863
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: { //https://youtu.be/ceSZUZZaW30?t=1919
      return {
        ...state,
        users: action.users, //https://youtu.be/ap8HxJPwJhY?t=3124
      };
    }
    case SET_CURRENT_PAGE: {                                            //https://youtu.be/ap8HxJPwJhY?t=2451
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalItemsCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }; //https://youtu.be/qE8ThPt1EIM?t=920
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: { //https://youtu.be/iobMksCYGHE?t=805
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage }); 
export const setTotalItemsCount = (totalItemsCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalItemsCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (requestedPage, pageSize) => { //https://youtu.be/tZahQsOc9Jk?t=365 https://youtu.be/dtKX3JyeVts?t=306
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    // dispatch(setCurrentPage(requestedPage)) #81
    let data = await usersAPI.requestUsers(requestedPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalItemsCount(data.totalCount));
  };
};

export const follow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode == 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode == 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  };
};
  

export default usersReducer;