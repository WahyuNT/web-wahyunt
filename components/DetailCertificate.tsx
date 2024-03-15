import { width } from '@fortawesome/free-solid-svg-icons/fa0'
import Link from 'next/link'
import React from 'react'

export default function DetailCertificate() {
    return (
        <div className='p-2'>
            <div className="card-body  px-1" style={{ maxHeight: "100%" }}>

                <div className="d-flex align-items-center justify-content-start mb-3">
                    <Link href="/portofolio">
                        <button className='btn card-sosmed btn-icon me-2 text-utama'>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    </Link>
                    <div className="col ">
                        <div className="d-flex justify-content-center ">
                            <div className="card h-100 bg-transparent card-border px-3">
                                <div className="d-flex justify-content-center align-align-items-center">
                                    <h5 className="text-utama my-1"><b>Title</b></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="d-flex">
                <div className="col pe-3">
                    <div className="card  bg-transparent ">
                        <img src="https://i.pinimg.com/736x/f3/67/1e/f3671e8449db15d15a4953e330bb6015.jpg" className='w-100 certificate-image' alt="" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="card card-glass bg-transparent" style={{ borderRadius: "15px" }}>
                        <div className="card-body pb-0 text-second">
                            <small className='text-white text-utama fw-bold'>Detail :</small>
                            <ul className='list-unstyled mb-2'>
                                <li >
                                    <i className="fa-solid text-utama fa-sm fa-building me-2"></i><small>Microsoft</small>
                                </li>
                                <li>
                                    <i className="fa-solid text-utama fa-sm fa-calendar-days me-2"></i><small>Aug 2023 - Aug 2025 </small>
                                </li>
                                <li>
                                    <i className="fa-solid text-utama fa-sm fa-hashtag me-2"></i><small>123456789</small>
                                </li>
                            </ul>
                            <div className="d-flex justify-content-center">
                                <button className='btn btn-primary  mb-3 rounded-pill btn-xs text-dark px-2 py-1 '><i className="fa-solid fa-file-arrow-down me-1"></i>Download PDF</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
