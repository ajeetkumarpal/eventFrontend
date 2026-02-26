import axios from "axios";
import React, { useContext, useState } from "react";
import backendUrl from "../api";
import { toast } from "react-toastify";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUserName } = useContext(UserContext);
  const navigate = useNavigate();
  const [statusForm, setStatusForm] = useState("register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      let data =
        statusForm === "register"
          ? { name, email, password }
          : { email, password };

      console.log("start", `${backendUrl}/user/${statusForm}`);
      const response = await axios.post(
        `${backendUrl}/user/${statusForm}`,
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      
      console.log(response.data.name);

      if (response.data.success) {
        if (response.data.status === "register") {
          setStatusForm("login");
          toast.success(response.data.message);
        } else {
          localStorage.setItem("userName", response.data.name);
          setUserName(response.data.name);
          toast.success(response.data.message);
          navigate("/");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("error in registration", error.response.data.message);
      setEmail("");
      setPassword("");
      setName("");
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className=" bg-linear-to-r from-gray-900 to-gray-400 py-20">
      <form onSubmit={submitHandler} className="flex flex-col w-2/5  mx-auto  ">
        <p className="text-3xl my-4 font-semibold text-center">
          {statusForm === "register" ? "register" : "login"}
        </p>
        {statusForm === "register" && (
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
            className="my-1.5 py-1.5 rounded-xs px-4 border border-gray-400"
          />
        )}
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
          className=" my-1.5 py-1.5 rounded-xs px-4 border border-gray-400"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="mt-1.5   py-1.5 rounded-xs px-4 border border-gray-400"
        />
        <div className="flex justify-between items-center my-0.5">
          <p className="text-sm">Forgot your password?</p>
          <button
            type="button"
            onClick={() =>
              setStatusForm(
                `${statusForm === "register" ? "login" : "register"}`,
              )
            }
            className="text-sm"
          >
            {statusForm === "register" ? "login" : "create your account"} Here
          </button>
        </div>
        <button className="h-12  my-8 w-32 hover:bg-black bg-gray-600 text-center text-white font-semibold">
          {statusForm === "register" ? "register" : "login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
