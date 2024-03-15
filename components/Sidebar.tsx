import React from 'react'
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Sidebar() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Periksa apakah URL saat ini sama dengan href
        setIsActive(window.location.pathname === "/");

    }, []);

    return (
        <div>
            <div className="d-flex align-items-start justify-content-center flex-wrap gap-3">
                <div className="col d-flex justify-content-center align-items-start mb-1">
                    <Link href="/" className='text-decoration-none'>
                        <button className='btn p-3 btn-icon d-flex flex-column'>
                            <i className="fa-solid fa-user text-white   text-utama"></i>
                            <small>
                                <small>
                                    <small className='text-utama'>About</small>
                                </small>
                            </small>
                        </button>
                    </Link>
                </div>
                <div className="col d-flex justify-content-center mb-1">
                    <Link href="/resume" className='text-decoration-none'>
                        <button className='btn p-3 btn-icon d-flex flex-column' >
                            <i className="fa-solid fa-briefcase text-white ${isActive ? 'text-utama' : ''}"></i>
                            <small>
                                <small>
                                    <small className='text-white'>Resume</small>
                                </small>
                            </small>
                        </button>
                    </Link>
                </div>
                <div className="col d-flex justify-content-center mb-1">
                    <Link href="/portofolio" className='text-decoration-none'>
                        <button className='btn p-3 btn-icon d-flex flex-column' >
                            <i className="fa-solid fa-images text-white ${isActive ? 'text-utama' : ''}"></i>
                            <small>
                                <small>
                                    <small className='text-white'>Portofolio</small>
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
                    <Link href="/certificate" className='text-decoration-none'>
                        <button className='btn p-3 btn-icon d-flex flex-column' >
                            <i className="fa-solid fa-file-invoice text-white ${isActive ? 'text-utama' : ''}"></i>
                            <small>
                                <small>
                                    <small className='text-white'>Certificate</small>
                                </small>
                            </small>
                        </button>
                    </Link>
                </div>
                <div className="col d-flex justify-content-center mb-1">
                    <Link href="/award" className='text-decoration-none'>
                        <button className='btn p-3 btn-icon d-flex flex-column' >
                            <i className="fa-solid fa-award text-white ${isActive ? 'text-utama' : ''}"></i>
                            <small>
                                <small>
                                    <small className='text-white'>Award</small>
                                </small>
                            </small>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
