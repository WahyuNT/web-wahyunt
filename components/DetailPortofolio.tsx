import { width } from '@fortawesome/free-solid-svg-icons/fa0'
import Link from 'next/link'
import React from 'react'

export default function DetailPortofolio() {
    return (
        <div>

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

            <div className="d-flex gap-2">
                <div className=" bg-transparent card-glass p-2">
                    <div className="card bg-transparent  p-1">
                        <img src="https://i.pinimg.com/564x/f2/c5/ed/f2c5ed701123f181f478f7d4e7f9c9d2.jpg" className="detail-porto-image " alt="" />
                    </div>
                </div>
                <div className=" bg-transparent card-glass p-2">
                    <div className="card bg-transparent  p-1">
                        <img src="https://i.pinimg.com/564x/cc/98/2b/cc982bbb14c3b04af3be413ccbd687c0.jpg" className="detail-porto-image " alt="" />
                    </div>
                </div>
            </div>

            {/* <hr className=' text-second border-1 my-3 ' /> */}
            <div className="d-flex justify-content-start mt-3  flex-wrap">
                <div className="pe-2">
                    <div className="card card-glass bg-transparent mb-2">
                        <div className="d-flex justify-content-start px-3 py-2">
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-rocket fa-xl text-utama me-2"></i>
                            </div>
                            <div className=" d-flex align-items-start flex-column ps-1">
                                <small>
                                    <small className=" text-second mb-0">Purpose</small>
                                </small>
                                <small className="text-white ">Event Amikom</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pe-2">
                    <div className="card card-glass bg-transparent mb-2">
                        <div className="d-flex justify-content-start px-3 py-2">
                            <div className="d-flex align-items-center">

                                <i className="fa-solid fa-globe fa-xl text-utama me-2"></i>
                            </div>

                            <div className=" d-flex align-items-start flex-column ps-1">
                                <small>
                                    <small className=" text-second mb-0">Site</small>
                                </small>
                                <small className="text-white ">boimamikom.com</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pe-2">
                    <div className="card card-glass bg-transparent mb-2">
                        <div className="d-flex justify-content-start px-3 py-2">
                            <div className="d-flex align-items-center">

                                <i className="fa-brands fa-github fa-xl text-utama me-2"></i>
                            </div>

                            <div className=" d-flex align-items-start flex-column ps-1">
                                <small>
                                    <small className=" text-second mb-0">Github</small>
                                </small>
                                <small className="text-white ">Click to open</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pe-2">
                    <div className="card card-glass bg-transparent mb-2">
                        <div className="d-flex justify-content-start px-3 py-2">
                            <div className="d-flex align-items-center">

                                <i className="fa-brands fa-figma fa-xl text-utama me-2"></i>
                            </div>

                            <div className=" d-flex align-items-start flex-column ps-1">
                                <small>
                                    <small className=" text-second mb-0">Figma</small>
                                </small>
                                <small className="text-white ">Click to open</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <hr className=' text-second border-1 mt-0 mb-2 ' /> */}
            <span className='text-second'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque accusamus fuga modi hic veniam nihil quis obcaecati quisquam reiciendis, perspiciatis fugit sequi, et sit debitis harum quasi assumenda impedit? Quod. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vero iure, tempora architecto eaque eos velit soluta natus autem rerum laboriosam animi ullam, fuga possimus quod incidunt ab molestias explicabo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia voluptatem numquam dolorum ipsa, error sapiente molestias odit pariatur enim nam neque quaerat fugit consectetur quod ullam tenetur, laborum itaque dolorem.
            </span>
            <div className="mt-3">

            </div>

            <small className='text-second'>Team Partners :</small><br />
            <div className="d-flex justify-content-start flex-wrap mt-1 mb-2">
                <div className="avatar  me-2 mb-2 pull-up" data-popup="tooltip-custom" data-bs-placement="top" aria-label="Blender" data-bs-original-title="Blender">
                    <img src="/img/icon/blender.png" className="rounded-circle" alt="" />
                </div>
                <div className="avatar  me-2 mb-2 pull-up" data-popup="tooltip-custom" data-bs-placement="top" aria-label="Blender" data-bs-original-title="Blender">
                    <img src="/img/icon/blender.png" className="rounded-circle" alt="" />
                </div>
                <div className="avatar  me-2 mb-2 pull-up" data-popup="tooltip-custom" data-bs-placement="top" aria-label="Blender" data-bs-original-title="Blender">
                    <img src="/img/icon/blender.png" className="rounded-circle" alt="" />
                </div>

            </div>
            <small className='text-second'>Software :</small><br />
            <div className="d-flex justify-content-start flex-wrap mt-1 mb-2">
                <div className="avatar avatar-skill me-2 mb-2 pull-up" data-popup="tooltip-custom" data-bs-placement="top" aria-label="Blender" data-bs-original-title="Blender">
                    <img src="/img/icon/blender.png" className="rounded" alt="" />
                </div>
                <div className="avatar avatar-skill me-2 mb-2">
                    <img src="/img/icon/express.png" className="rounded" alt="" />
                </div>
                <div className="avatar avatar-skill me-2 mb-2">
                    <img src="/img/icon/figma.png" className="rounded" alt="" />
                </div>
                <div className="avatar avatar-skill me-2 mb-2">
                    <img src="/img/icon/js.png" className="rounded" alt="" />
                </div>
                <div className="avatar avatar-skill me-2 mb-2">
                    <img src="/img/icon/laravel.png" className="rounded" alt="" />
                </div>
            </div>

            <small className='text-second '>Category :</small>
            <div className="d-flex flex-wrap mt-1">
                <button className='btn btn-sm btn-tag-detail  text-second'>
                    <small>
                        Full Stack
                    </small>
                </button>
            </div>
        </div>
        </div >
    )
}
