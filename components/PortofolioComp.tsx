import Image from 'next/image'
import React from 'react'

export default function PortofolioComp() {
    return (
        <div><div className="card-body  px-1" style={{ maxHeight: "100%" }}>

            <div className="d-flex">

            </div>
            <h4 className="text-white mt-2 text-center"><b>Portofolio</b></h4>
            <div className="d-flex  flex-wrap">


                <div className="col-4 mb-2 px-2">
                    <div className=" bg-transparent card card-glass card-porto ">
                        <div className="div px-3 pt-3">

                            <div className="card bg-transparent  card-banner flex-column">
                                <div className="card bg-transparent">

                                    <img src="https://i.pinimg.com/564x/d7/fb/95/d7fb95f5d8ebd333665e4b9d33c2ce2b.jpg" className="cover-image img-porto" alt="" />

                                    <div className="overlay-visit   position-absolute  start-50  translate-middle-x">
                                        <a href="https://fontawesome.com/icons/arrow-up-right-from-square?f=classic&s=solid" target='_blank' className='text-decoration-none text-white btn-visit'>
                                            <div className="d-flex justify-content-center ">

                                                <div className="card rounded-pill bg-dark   px-3 py-1">
                                                    <div className="d-flex align-items-center ">

                                                        <i className="fa-solid fa-arrow-up-right-from-square me-1 fa-xs"></i>
                                                        <small>

                                                            Visit Site
                                                        </small>
                                                    </div>

                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="overlay-software position-absolute  start-50 translate-middle-x">

                                        <div className="d-flex justify-content-center">

                                            <div className="card rounded-pill bg-dark   ">
                                                <div className="card-body p-1">

                                                    <div className="d-flex gap-1 px-1">

                                                        <button className='btn btn-icon text-white'>
                                                            <i className="fa-brands fa-github "></i>

                                                        </button>
                                                        <button className='btn btn-icon text-white'>
                                                            <i className="fa-brands fa-figma "></i>

                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="div px-3 pb-3">
                            <div className="d-flex justify-content-between align-items-center mt-2">

                                <small className='text-white fw-bold '>Judul Karya</small>

                            </div>
                            <div className="card w-100 bg-transparent ">
                                <div className="d-flex justify-content-start align-items-center mt-2">
                                    <div className="col-2   d-flex align-items-center justify-content-center me-2">
                                        <div className="card bg-transparent ">
                                            <img src="https://ih1.redbubble.net/image.4529980642.7761/st,small,507x507-pad,600x600,f8f8f8.jpg" className="cover-ava " alt="" />
                                        </div>
                                    </div>
                                    <div className=" d-flex align-items-start flex-column ">
                                        <small className="text-white ">Boim Amikom  </small>
                                        <small className=" text-second mb-0">Event</small>
                                    </div>

                                </div>
                            </div>
                            <hr className='text-second border-1 my-2' />
                            <div className="d-flex justify-content-start flex-wrap mb-1 gap-1">

                                <button className='btn btn-xs btn-tag  text-second'>
                                    <small>
                                        Full Stack
                                    </small>
                                </button>
                                <button className='btn btn-xs btn-tag  text-second'>
                                    <small>
                                        Laravel
                                    </small>
                                </button>
                                <button className='btn btn-xs btn-tag  text-second'>
                                    <small>
                                        Unreal Engine
                                    </small>
                                </button>
                                <button className='btn btn-xs btn-tag  text-second'>
                                    <small>
                                        HTML
                                    </small>
                                </button>
                            </div>
                            <hr className='text-second border-1 my-2' />
                            <div className="d-flex justify-content-between gap-2 mt-1">
                                <div className="col d-flex gap-2 ">

                                    <button className='btn btn-border  rounded-pill text-white w-50'>
                                        <i className="fa-brands fa-github "></i>

                                    </button>
                                    <button className='btn btn-border  rounded-pill text-white w-50'>
                                        <i className="fa-brands fa-figma "></i>

                                    </button>
                                </div>
                                <div className="col ">

                                    <button className='btn btn-border rounded-pill text-white w-100 '>
                                        Details

                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </div></div >
    )
}
