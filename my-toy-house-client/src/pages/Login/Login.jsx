import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import loginLogo from '../../assets/login.png'
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";
import { getAuth, signInWithPopup } from "firebase/auth";

const Login = () => {

  const {signIn, googleProvider} = useContext(AuthContext)
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const location = useLocation();
  const auth = getAuth();
  useTitle("Login")
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      navigate(from, {replace: true})
    })
    .catch((error) => {
      console.log(error);
      if (error.code === "auth/wrong-password") {
        setError("Wrong password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        setError("User not found. Please check your email.");
      } else if (error.code === "auth/invalid-email") {
        setError("Wrong Email");
      }
    });
  }

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen p-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left login-image">
          <img src={loginLogo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-2xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {error && <span className="text-sm text-red-600">
                  {error}
                </span>}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
              <label className="label">
                <span className="text-sm">
                  Don't Have An Account ?{" "}
                  <Link
                    className="label-text-alt link link-hover text-red-400
                  "
                    to="/register"
                  >
                    Register
                  </Link>
                </span>
              </label>
            </div>
          <div className="divider mt-0">OR</div>
          <div className="flex justify-center align-middle text-3xl">
          <FaGoogle 
          onClick={handleGoogleLogin}
          className="mr-4"></FaGoogle>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
