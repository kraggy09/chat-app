const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center ">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div className="my-2">
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full input input-border-2 bordered h-10"
            />
          </div>
          <div className="my-2">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full input input-border-2 bordered h-10"
            />
          </div>
          <div className="my-2">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full input input-border-2 bordered h-10"
            />
          </div>
          <div className="my-2">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full input input-border-2 bordered h-10"
            />
          </div>
          <div className="flex">
            <div className="form-control">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input
                  type="checkbox"
                  className="checkbox border-2 border-slate-900"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input
                  type="checkbox"
                  className="checkbox border-2 border-slate-900"
                />
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account? Login
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
