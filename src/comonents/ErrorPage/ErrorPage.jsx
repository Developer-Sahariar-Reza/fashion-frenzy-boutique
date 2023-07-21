import React from "react";
import "./ErrorPage.css";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnime from "../../assets/Animations/error.json";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="error-page">
      {/* animation  */}
      <div className="error-anime">
        <Lottie animationData={errorAnime} loop={true} />
      </div>

      {/* error-information */}
      <div className="error-info">
        <h2>{status}</h2>
        <h2>{error?.message}</h2>
      </div>

      {/* go back button */}
      <Link to="/" className="go-back-btn">
        Go To HomePage
      </Link>
    </div>
  );
};

export default ErrorPage;
