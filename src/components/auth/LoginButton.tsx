import { Login } from "@/api/auth";
import React from "react";
import { useSanctum } from "react-sanctum";
import { Button } from "reactstrap";

const LoginButton = (data) => {
  const { authenticated, user, signIn } = useSanctum();

  const handleLogin = () => {
    Login(data)
      .then(() => window.alert("Signed in!"))
      .catch(() => window.alert("Incorrect email or password"));
  };

  if (authenticated === true) {
    return <h1>Welcome, {user.name}</h1>;
  } else {
    return <Button className="login-btn" onClick={handleLogin} >ورود</Button>;
  }
};

export default LoginButton;