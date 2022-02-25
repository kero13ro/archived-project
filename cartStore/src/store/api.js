const axios = require("axios");
const instance = axios.create({
  baseURL: "http://localhost:3000/",
  // baseURL: "http://192.168.184.62:5001/api/",
});

// 編輯購物車需要 header token
const instanceAuth = axios.create({
  baseURL: "http://localhost:3000/",
  // baseURL: "http://192.168.184.62:5001/api/",
});

instanceAuth.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("auth");
    token && (config.headers.Authorization = "Bearer " + token);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/* 取得 token */
export async function GetAuth() {
  // const { data } = await axios.get("http://localhost:3000/auth");
  const { data } = await instance.get("member");
  return data;
}

/* 取得書單列表 */
export async function GetBookList() {
  const { data } = await instance.get("booklist");
  return data;
}

/* 取得購物車列表 */
export async function GetCart() {
  const { data } = await instanceAuth.get("cart");
  return data;
}

/* 新增單筆購物車 */
export async function PostCart(item) {
  instanceAuth.post("cart/", item);
}

/* 編輯單筆購物車 */
export async function PutCart(id, item) {
  instanceAuth.put("cart/" + id, item);
}

/* 刪除單筆購物車 */
export async function DeleteCart(id) {
  instanceAuth.delete("cart/" + id);
}

// 追蹤清單
export async function GetTrack() {
  const { data } = await instanceAuth.get("notice");
  return data;
}

export async function AddTrack(id) {
  instanceAuth.post("notice/" + id);
}

export async function DeletetTrack(id) {
  instanceAuth.delete("notice/" + id);
}

// export async function TracktoCart(id) {
//   instanceAuth.post("notice/cart/" + id);
// }
