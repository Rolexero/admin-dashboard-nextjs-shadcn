import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASEURL;

const BaseUrlApi = axios.create({
  baseURL: baseURL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});

export default BaseUrlApi;
