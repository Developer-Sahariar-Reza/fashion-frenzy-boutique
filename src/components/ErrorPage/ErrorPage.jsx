import React from "react";
import Lottie from "lottie-react";
import animation from "../../assets/Animations/error-anime.json";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section>
      <div className="w-1/3 mx-auto">
        <Lottie animationData={animation} loop={true} />
      </div>
      <h2 className="my-4 font-extrabold text-5xl text-center text-[#2E4F4F]">
        {status || "Status Code Not Found"}
      </h2>
      <p className="my-4 font-extrabold text-5xl text-center text-[#2C3333]">
        {error?.message}
      </p>
      <div className="text-center py-5">
        <Link to="/" className="btn-primary">
          Back to Homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
