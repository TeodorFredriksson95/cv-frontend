import { jwtDecode } from "jwt-decode";
import axios from "axios";
import dayjs from "dayjs";
import { useAuth } from "../../context/AuthContext";

const baseURL = process.env.REACT_APP_AUTHENTICATION_SERVICE_BASE_URL_PRODUCTION;

const useAxios = () => {
  const { accessToken, refreshToken, setAccessToken, setRefreshToken } = useAuth();

  let axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwtDecode(accessToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) {
      return req;
    }

    const response = await axios.post(baseURL + "/refresh", {
      refreshToken: refreshToken,
    });

    localStorage.setItem("refreshToken", response.data.refreshToken);
    localStorage.setItem("accessToken", response.data.accessToken);

    setAccessToken(response.data.accessToken);
    setRefreshToken(response.data.refreshToken);

    req.headers.Authorization = `Bearer ${response.data.accessToken}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;
