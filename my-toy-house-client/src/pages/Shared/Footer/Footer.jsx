import React from "react";
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'
import logo from "../../../assets/logo (1).png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="p-4">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="footer-company-section">
          <img src={logo} alt="" />
          <p>
            Action figure toys Ltd.
            <br />
            Providing reliable tech since 2023
          </p>
          <p>Address: Sabujbag, Patuakhali Sadar, Patuakhali.</p>
          <p className="text-sm">Copyright © 2023 - All right reserved by Action figure toys Ltd.</p>
        </div>
        <div>
          <span className="footer-title">Contact With Us</span>
          <a className="link link-hover">Email: dr.rakibulislammridha@gmail.com</a>
          <a className="link link-hover">Call: 01666666899</a>
          <a className="link link-hover">Yahoo!: abcd@Yahoo.com</a>
        </div>
        <div>
          <span className="footer-title">Find Your Way</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">All Toys</a>
          <a className="link link-hover">My toys</a>
        </div>
        <div>
          <span className="footer-title">Find Us On</span>
          <a className="link link-hover"><FaGoogle className="text-xl mb-2"></FaGoogle></a>
          <a className="link link-hover"> <FaFacebook className="text-xl mb-2"></FaFacebook> </a>
          <a className="link link-hover"><FaInstagram className="text-xl mb-2"></FaInstagram></a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
