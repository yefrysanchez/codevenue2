"use client";
import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const Profile = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className=" flex justify-center min-h-[80vh]">
      {isRegistered ? (
        <Login setIsRegistered={setIsRegistered} />
      ) : (
        <Register setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
};

export default Profile;
