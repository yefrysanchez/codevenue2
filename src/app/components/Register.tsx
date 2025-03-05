import React from 'react'

type RegisterProps = {
    setIsRegistered: (isLogged: boolean) => void
}

const Register = ({setIsRegistered}:RegisterProps) => {
  return (
    <form className="bg-white max-w-md w-full h-fit  shadow-md rounded-xl px-8 pt-6 pb-20 mb-4 text-dark">
      <h2 className="font-bold text-2xl text-center mt-12">Sign Up</h2>
      <div>
      <input
          type="text"
          name="name"
          placeholder="Name"
          className="border-b my-12 w-full p-4 border-dark/20 focus:border-dark active:ring-0 outline-none transition-colors duration-300"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border-b mb-12 w-full p-4 border-dark/20 focus:border-dark active:ring-0 outline-none transition-colors duration-300"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-b w-full p-4 border-dark/20 focus:border-dark active:ring-0 outline-none transition-colors duration-300"
        />
      </div>

      <button
        aria-label="Sign up button"
        className="w-full p-4 bg-darkAlt text-white hover:bg-primary transition-colors duration-300 mt-8 rounded-xl"
      >
        Sign Up
      </button>
      
        <span className="text-darkAlt/40 block text-sm text-center mt-8">
          Already have an account?{" "}
          <button
          onClick={() => setIsRegistered(true)}
            aria-label="Sign up botton"
            className="text-secundary font-bold hover:underline cursor-pointer"
          >
            Sign in
          </button>
        </span>
     
    </form>
  )
}

export default Register
