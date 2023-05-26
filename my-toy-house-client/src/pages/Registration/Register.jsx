import React, { useContext, useState } from "react";
import "./Register.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import registerLogo from '../../assets/register.png'
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";

const Register = () => {
  const auth = getAuth(app);
  const { createUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate()
  useTitle("Register")

  const location = useLocation();

  const from = location.state?.from?.pathname || "/login" || "/";

  const handleRegister = (event) =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    createUser(email, password, photo)
    .then(userCredential =>{
      const currentUser = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      }).then(() => {
        setError("");
          navigate(from, {replace: true});
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Registration Successful',
            showConfirmButton: false,
            timer: 1500
          })
      })
      setUser(currentUser);
    })
    .catch(error => {
      if (error.code === "auth/weak-password") {
        setError("The password is less than 6 characters enter 6 digit or more");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email put a verified email address");
      }
    })
  }

  return (
    <div className="hero min-h-screen p-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left register-image">
          <img src={registerLogo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-2xl font-bold">Register now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
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
              {error && <span className="text-red-400 text-sm">{error}</span>}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <label className="label">
                  <span className="text-sm">
                    Already Have An Account ?{" "}
                    <Link
                      className="label-text-alt link link-hover text-red-400
                  "
                      to="/login"
                    >
                      Login
                    </Link>
                  </span>
                </label>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
