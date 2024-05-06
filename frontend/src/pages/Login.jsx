import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { login, loading } = useLogin();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    await login(input);
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-white font-semibold text-center ">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="my-2">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              value={input.username}
              onChange={(e) => {
                const val = e.target.value;
                setInput((prev) => {
                  return {
                    ...prev,
                    username: val,
                  };
                });
              }}
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="my-2">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              value={input.password}
              onChange={(e) => {
                const val = e.target.value;
                setInput((prev) => {
                  return {
                    ...prev,
                    password: val,
                  };
                });
              }}
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            onClick={() => {
              navigate("/signup");
            }}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm border-none bg-sky-600 font-semibold mt-2">
              {loading ? (
                <span className="loading loading-dots loading-xl"></span>
              ) : (
                <span>Login</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
