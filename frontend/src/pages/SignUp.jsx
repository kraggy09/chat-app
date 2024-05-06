import { useState } from "react";
import useSignUp from "../hooks/useSignUp";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [input, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    gender: "",
    confirmPassword: "",
  });
  const { signUp, loading } = useSignUp();
  const navigate = useNavigate();
  // console.log(input);
  const confirmPassword = () => {
    if (input.confirmPassword === "") {
      return true;
    }
    return input.password === input.confirmPassword;
  };

  const handleSubmit = async () => {
    await signUp(input);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-white font-semibold text-center ">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="my-2">
            <label className="label p-2">
              <span className="text-base label-text text-gray-300">
                Full Name
              </span>
            </label>
            <input
              type="text"
              value={input.fullName}
              onChange={(e) => {
                const val = e.target.value;
                setInput((prev) => {
                  return {
                    ...prev,
                    fullName: val,
                  };
                });
              }}
              placeholder="Enter your fullname"
              className="w-full input input-border-2 bordered h-10"
            />
          </div>
          <div className="my-2">
            <label className="label p-2">
              <span className="text-base label-text text-gray-300">
                Username
              </span>
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
              placeholder="Enter your username"
              className="w-full input input-border-2 bordered h-10"
            />
          </div>
          <div className="my-2">
            <label className="label p-2">
              <span className="text-base label-text text-gray-300">
                Password
              </span>
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
              placeholder="Enter your password"
              className="w-full input input-border-2 bordered h-10"
            />
          </div>
          <div className="my-2">
            <label className="label p-2">
              <span className="text-base label-text text-gray-300">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              value={input.confirmPassword}
              onChange={(e) => {
                const val = e.target.value;
                setInput((prev) => {
                  return {
                    ...prev,
                    confirmPassword: val,
                  };
                });
              }}
              placeholder="Confirm your password"
              className="w-full input input-border-2 bordered h-10"
            />
          </div>
          {!confirmPassword() && (
            <p className="text-red-600 ml-6">Pls check your password</p>
          )}
          <div className="flex">
            <div className="form-control">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text text-gray-300">Male</span>
                <input
                  type="checkbox"
                  onChange={() => {
                    setInput((prev) => {
                      return {
                        ...prev,
                        gender: "male",
                      };
                    });
                  }}
                  value={"male"}
                  checked={input.gender === "male"}
                  className="checkbox border-2 border-slate-900"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text text-gray-300">Female</span>
                <input
                  type="checkbox"
                  onChange={() => {
                    setInput((prev) => {
                      return {
                        ...prev,
                        gender: "female",
                      };
                    });
                  }}
                  value={"female"}
                  checked={input.gender === "female"}
                  className="checkbox border-2 border-slate-900"
                />
              </label>
            </div>
          </div>
          <a
            onClick={() => {
              navigate("/login");
            }}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account? Login
          </a>
          <div>
            <button className="btn btn-block bg-blue-600 text-white font-semibold border-none btn-sm mt-2">
              {loading ? (
                <span className="loading loading-dots loading-xl"></span>
              ) : (
                <span>SignUp</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
