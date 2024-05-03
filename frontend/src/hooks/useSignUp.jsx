import { useState } from "react";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);

  const signUp = async (input) => {
    const { fullName, username, password, gender } = input;
    console.log(fullName, username, password, gender, "API hitted");
    // Implement your sign-up logic here
    setLoading(true);
    // Simulating an API call with setTimeout
    setTimeout(() => {
      setLoading(false);
      console.log("User signed up successfully:", input);
    }, 2000);
  };

  return { loading, signUp };
};

export default useSignUp;
