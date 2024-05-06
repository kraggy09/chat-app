import { useState } from "react";
import { api } from "../constant";
import toast from "react-hot-toast";
import { useContext } from "react";
import axios from "axios";
import { Auth } from "../context/Auth";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useContext(Auth);

  function checkFields(fullName, username, password, confirmPassword, gender) {
    if (
      fullName === "" ||
      username === "" ||
      password === "" ||
      gender === ""
    ) {
      toast.error("Please fill in all the details");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Please check your password as both does not match");
      return false;
    }
    return true;
  }
  const signUp = async (input) => {
    const { fullName, username, password, gender, confirmPassword } = input;
    const endpoint = "auth/signup";

    const fieldCheck = checkFields(
      fullName,
      username,
      password,
      confirmPassword,
      gender
    );
    if (!fieldCheck) {
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(api + endpoint, {
        fullName,
        username,
        password,
        gender,
      });
      toast.success("User created successfully");
      localStorage.setItem("user", JSON.stringify(res?.data?.user));
      setAuth(JSON.stringify(res?.data?.user));
      return res.data;
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
      toast.error(error?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signUp };
};

export default useSignUp;
