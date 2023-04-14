import axios from "axios";

const instance = axios.create({ //https://youtu.be/tZahQsOc9Jk?t=1075
  withCredentials: true, //https://youtu.be/b3pU3hsJlNk?t=1557 //https://youtu.be/oLIrtUrm5us?t=846 //https://youtu.be/oLIrtUrm5us?t=1246
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { //https://youtu.be/oLIrtUrm5us?t=1043
    "API-KEY": "41265121-4fb6-4f15-8656-7aadcab7731c",
  },
});

export const usersAPI = { //https://youtu.be/tZahQsOc9Jk?t=1327
  requestUsers(currentPage = 1, pageSize = 10) { //https://youtu.be/tZahQsOc9Jk?t=365
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`) //https://youtu.be/ap8HxJPwJhY?t=2324
      .then((response) => {  //https://youtu.be/18hAMlMkQks?t=227
        return response.data; //https://youtu.be/tZahQsOc9Jk?t=738 will be only data from response загальне
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) { //https://youtu.be/1faxVHNBnsU?t=218 uri vs url
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) { //https://youtu.be/1faxVHNBnsU?t=358 загальне по запитам ДУЖЕ важливе
    return instance.put(`profile/status/`, { status: status });
  },

  savePhoto(photoFile) { //https://youtu.be/fnzO0U1mSb8?t=1653
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put("profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};
export const authAPI = {  //https://youtu.be/oLIrtUrm5us?t=846 get/post загальне //https://youtu.be/oLIrtUrm5us?t=978
  me() {
    return instance.get(`auth/me`); //https://youtu.be/b3pU3hsJlNk?t=1536  https://youtu.be/18hAMlMkQks?t=473
  },
  login(email, password, rememberMe = false) {  //https://youtu.be/oWeSh6-Mrvg?t=250
    return instance.post(`auth/login`, { email, password, rememberMe }); //https://youtu.be/oLIrtUrm5us?t=729
  }, 
  logout() {
    return instance.delete(`auth/login`);
  },
};

//https://youtu.be/JtbSOJKRJAI?t=278 юзати async await замість then, всюди #90, +8:15 //https://youtu.be/JtbSOJKRJAI?t=778 13:15
//всі запити крім GET требують обов'язкового ключа доступу api key https://youtu.be/oLIrtUrm5us?t=1043 
// post vs put https://youtu.be/oLIrtUrm5us?t=1459 , https://youtu.be/oWeSh6-Mrvg?t=250
// тут робимо запити на сервер, а не в BLL (reduceri) , бо редюсер - чиста ф, там не можна робити запити. 
//https://youtu.be/1faxVHNBnsU?t=2048 request payload
//result code 10 = capcha
// formik error from server https://youtu.be/nvhFGeSrWx0?t=432 !!!!!!!! FORMIK API ERROR
//https://youtu.be/KU81NnNcjmw?t=1130 get vs post 
//https://youtu.be/JtbSOJKRJAI?t=747 thunk and thunkCreator