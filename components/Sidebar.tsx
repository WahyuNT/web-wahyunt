import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const [location, setLocation] = useState("");

  useEffect(() => {
    // Periksa apakah URL saat ini sama dengan href
    const currentLocation = window.location.pathname;
    setLocation(currentLocation);
  }, []);

  return (
    <div>
      <div className="d-flex align-items-start justify-content-center flex-wrap gap-3 ">
        <div className="col d-flex justify-content-center align-items-start mb-1">
          <Link href="/" className="text-decoration-none">
            <button
              className={`btn p-3 btn-icon d-flex flex-column ${
                location === "/" ? "text-utama" : "text-white"
              }`}
            >
              <i className="fa-solid fa-user   "></i>
              <small>
                <small>
                  <small className="">About</small>
                </small>
              </small>
            </button>
          </Link>
        </div>
        <div className="col d-flex justify-content-center mb-1">
          <Link href="/resume" className="text-decoration-none">
            <button
              className={`btn p-3 btn-icon d-flex flex-column ${
                location === "/resume" ? "text-utama" : "text-white"
              }`}
            >
              <i className="fa-solid fa-briefcase "></i>
              <small>
                <small>
                  <small className="">Resume</small>
                </small>
              </small>
            </button>
          </Link>
        </div>
        <div className="col d-flex justify-content-center mb-1">
          <Link href="/portofolio" className="text-decoration-none">
            <button
              className={`btn p-3 btn-icon d-flex flex-column ${
                location === "/portofolio" ? "text-utama" : "text-white"
              }`}
            >
              <i className="fa-solid fa-images "></i>
              <small>
                <small>
                  <small className="">Portofolio</small>
                </small>
              </small>
            </button>
          </Link>
        </div>
        {/* <div className="col d-flex justify-content-center mb-1">
                    <Link href="/blog" className='text-decoration-none'>
                        <button className='btn p-3 btn-icon d-flex flex-column' >
                            <i className="fa-solid fa-newspaper text-white ${isActive ? 'text-utama' : ''}"></i>
                            <small>
                                <small>
                                    <small className='text-white'>Blog</small>
                                </small>
                            </small>
                        </button>
                    </Link>
                </div> */}
        <div className="col d-flex justify-content-center mb-1">
          <Link href="/certificate" className="text-decoration-none">
            <button
              className={`btn p-3 btn-icon d-flex flex-column ${
                location === "/certificate" ? "text-utama" : "text-white"
              }`}
            >
              <i className="fa-solid fa-file-contract"></i>
              <small>
                <small>
                  <small className="">Certificate</small>
                </small>
              </small>
            </button>
          </Link>
        </div>
        <div className="col d-flex justify-content-center mb-1">
          <Link href="/awards" className="text-decoration-none">
            <button
              className={`btn p-3 btn-icon d-flex flex-column ${
                location === "/awards" ? "text-utama" : "text-white"
              }`}
            >
              <i className="fa-solid fa-awards "></i>
              <small>
                <small>
                  <small className="">Award</small>
                </small>
              </small>
            </button>
          </Link>
        </div>
        <div className="col d-flex justify-content-center mb-1">
          <Link href="/cv" className="text-decoration-none">
            <button
              className={`btn p-3 btn-icon d-flex flex-column ${
                location === "/cv" ? "text-utama" : "text-white"
              }`}
            >
              <i className="fa-solid fa-file-invoice "></i>
              <small>
                <small>
                  <small className="">CV</small>
                </small>
              </small>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
