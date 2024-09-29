import axios from "../axios"
import instance from "axios"

export const apiGetCategories = () =>
  axios({
    method: "get",
    url: "/common/category/",
  })
export const apiGetOptions = () =>
  axios({
    method: "get",
    url: "/common/options/",
  })
export const apiGetRoles = () =>
  axios({
    method: "get",
    url: "/common/roles/",
  })
export const apiUpdateViews = (data) =>
  axios({
    method: "put",
    url: "/common/views/",
    data,
  })
export const apiGetDashboard = (params) =>
  axios({
    method: "get",
    url: "/common/dashboard/",
    params,
  })
export const apiGetProvinces = () =>
  instance({
    method: "get",
    url: `https://provinces.open-api.vn/api/?depth=3`,
  })
export const apiUploadImageCloudinary = (data) =>
  instance({
    method: "post",
    url: `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload`,
    data,
  })
export const apiGetLngLatFromAddress = (params) =>
  instance({
    method: "get",
    url: `https://api.geoapify.com/v1/geocode/search`,
    params,
  })
