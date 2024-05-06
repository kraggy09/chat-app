import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../constant";
import { Auth } from "../context/Auth";

const useLogout = () => {
  const { setAuth } = useContext(Auth);
  const [loading, setLoading] = useState(false);
  const logout = async () => {
    const endpoint = "/auth/logout";
    setLoading(true);
    try {
      const res = await axios.post(api + endpoint);
      localStorage.removeItem("user");
      setAuth(null);

      console.log(res.data);
      toast.success(res.data.msg);
    } catch (error) {
      toast.error(error.message);
      toast.error(error?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };
  return { logout, loading };
};

export default useLogout;
