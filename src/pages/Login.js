import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import LoginCard from "../components/LoginCard/LoginCard";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Start making calls to our public API by logging in." />
      </Helmet>
      <div className="test-page">
        <LoginCard />
      </div>
    </div>
  );
};
export default Login;
