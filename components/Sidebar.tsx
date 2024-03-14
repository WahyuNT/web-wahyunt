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
            <div className="d-flex align-items-start justify-content-center flex-wrap">
                <div className="col d-flex justify-content-center mb-1">
                    <Link href="/">
                        <button className='btn p-3 btn-icon'>
                            <i className="fa-solid fa-user text-white   text-utama"></i>
                        </button>
                    </Link>
                </div>
                <div className="col d-flex justify-content-center mb-1">
                    <Link href="/resume">
                        <button className='btn p-3 btn-icon' >
                            <i className="fa-solid fa-briefcase text-white ${isActive ? 'text-utama' : ''}"></i>
                        </button>
                    </Link>
                </div>
                <div className="col d-flex justify-content-center mb-1">
                    <Link href="/portofolio">
                        <button className='btn p-3 btn-icon' >
                            <i className="fa-solid fa-images text-white ${isActive ? 'text-utama' : ''}"></i>
                        </button>
                    </Link>
                </div>
                <div className="col d-flex justify-content-center mb-1">
                    <Link href="/blog">
                        <button className='btn p-3 btn-icon' >
                            <i className="fa-solid fa-newspaper text-white ${isActive ? 'text-utama' : ''}"></i>
                        </button>
                    </Link>
                </div>
                <div className="col d-flex justify-content-center mb-1">
                    <Link href="/certificate">
                        <button className='btn p-3 btn-icon' >
                            <i className="fa-solid fa-file-invoice text-white ${isActive ? 'text-utama' : ''}"></i>
                        </button>
                    </Link>
                </div>
                <div className="col d-flex justify-content-center mb-1">
                    <Link href="/award">
                        <button className='btn p-3 btn-icon' >
                            <i className="fa-solid fa-award text-white ${isActive ? 'text-utama' : ''}"></i>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
