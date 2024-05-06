import { useContext, useState } from "react";
import { api } from "../constant";
import toast from "react-hot-toast";
import axios from "axios";
import { Auth } from "../context/Auth";

const useLogin = () => {
  function checkFields(username, password) {
    if (username === "" || password === "") {
      toast.error("Please fill in all the details");
      return false;
    }

    return true;
  }
  const { setAuth } = useContext(Auth);
  const [loading, setLoading] = useState(false);
  const endpoint = "/auth/login";
  const login = async ({ username, password }) => {
    let fieldCheck = checkFields(username, password);
    if (!fieldCheck) {
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(api + endpoint, {
        username,
        password,
      });
      if (res.data) {
        console.log(res.data);
        toast.success(res.data.msg);
      }
      setAuth(JSON.stringify(res?.data?.user));
      localStorage.setItem("user", JSON.stringify(res?.data?.user));
    } catch (error) {
      toast.error(error.message);
      toast.error(error?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
};

export default useLogin;
