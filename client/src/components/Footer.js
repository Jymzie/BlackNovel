
import React from "react";
import { Link } from "react-router-dom";

 function Footer() {
  return (
    <footer className="isolate" style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 30%, rgba(255,255,255,1) 100%)'}}>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid container grid-cols-2 sm:flex sm:items-center sm:justify-between">
        <div className="justify-center sm:justify-start">
        <Link to="/" className="">
          <h2 className="text-2xl font-bold text-white lg:text-3xl  sm:text-4xl [text-shadow:_1px_0_4px_rgb(255_255_255_/_0.8)]">Black Novel</h2>
        </Link>
        <p className="text-right text-white text-xs">- Jimwell C. Punzalan</p>
        </div>

        <p className="mt-4 text-center text-sm text-black lg:mt-0 lg:text-right [text-shadow:_1px_0_4px_rgb(220_220_220_/_0.8)]">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
 }

export default Footer;
