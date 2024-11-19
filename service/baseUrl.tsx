import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASEURL;

const BaseUrlApi = axios.create({
  baseURL: baseURL,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDJiN2FjYjhjNmVlZDBhZjgzNzUxMDEwYTUxYTg4MCIsIm5iZiI6MTczMTkyNzQ1OC40NTM1MDQ4LCJzdWIiOiI2M2MzYjQzYmFhZWM3MTAwOTQ2N2M1NTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zIf503kFLUIrqIg70FUunOH4NWr7Pn8d-jRthr492Lg",
  },
});

export default BaseUrlApi;
