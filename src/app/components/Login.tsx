import React from "react";

const Login = () => {
  return (
    <form className="bg-white max-w-md w-full h-fit  shadow-md rounded-xl px-8 pt-6 pb-20 mb-4 text-dark">
      <h2 className="font-bold text-2xl text-center mt-12">Login</h2>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border-b my-12 w-full p-4 border-dark/20 focus:border-dark active:ring-0 outline-none transition-colors duration-300"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-b w-full p-4 border-dark/20 focus:border-dark active:ring-0 outline-none transition-colors duration-300"
        />
      </div>

      <button
        aria-label="login button"
        className="w-full p-4 bg-darkAlt text-white hover:bg-primary transition-colors duration-300 mt-8 rounded-xl"
      >
        Login
      </button>
      <div className="flex flex-col items-center mt-12 gap-4">
        <span className="text-darkAlt/40 text-sm ">
          Forgot{" "}
          <span className="text-secundary font-bold hover:underline cursor-pointer">
            Password
          </span>
          ?
        </span>
        <span className="text-darkAlt/40 text-sm ">
          Don&apos;t have an account?{" "}
          <button
            aria-label="Sign up botton"
            className="text-secundary font-bold hover:underline cursor-pointer"
          >
            Sign up
          </button>
        </span>
      </div>
    </form>
  );
};

export default Login;
