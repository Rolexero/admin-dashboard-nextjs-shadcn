// const getBilling = (data: IBillingPayload) => {
//   return TrackplusStaffApi.post("/staff/billing/get_tariff", data);
// };

import BaseUrlApi from "../baseUrl";

const createSessionID = () => {
  return BaseUrlApi.get("/authentication/guest_session/new");
};

const getAccountID = (sessionId?: string) => {
  return BaseUrlApi.get("/account", {
    params: {
      session_id: sessionId,
    },
  });
};

const getpopularMovies = ({
  pageParam = 1,
  query,
}: {
  pageParam: number;
  query?: string;
}) => {
  return BaseUrlApi.get("/movie/popular", {
    params: {
      page: pageParam,
      query: query,
    },
  });
};

const getFavouriteMovies = ({
  accountId,
  sessionId,
}: {
  accountId?: string | null;
  sessionId?: string | null;
}) => {
  return BaseUrlApi.get(`/account/${accountId}/favorite/movies`);
};

const TMBDService = {
  createSessionID,
  getpopularMovies,
  getAccountID,
  getFavouriteMovies,
};

export default TMBDService;
