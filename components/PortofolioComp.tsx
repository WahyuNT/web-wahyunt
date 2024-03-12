import Image from 'next/image'
import React from 'react'

export default function PortofolioComp() {
    return (
        <div><div className="card-body " style={{ maxHeight: "100%" }}>

            <div className="d-flex">

            </div>
            <h4 className="text-white mt-2 text-center"><b>Portofolio</b></h4>
            <div className="d-flex  flex-wrap">


                <div className="col-4 px-1">
                    <div className=" bg-transparent card card-glass card-porto p-3">
                        <div className="card bg-transparent  card-banner flex-column">
                            <div className="card bg-transparent">

                                <img src="https://i.pinimg.com/564x/d7/fb/95/d7fb95f5d8ebd333665e4b9d33c2ce2b.jpg" className="cover-image " alt="" />
                                <div className="overlay-software position-absolute  start-50 translate-middle-x">

                                    <div className="d-flex justify-content-center">

                                        <div className="card rounded-pill bg-dark   ">
                                            <div className="d-flex gap-1 px-1">

                                                <button className='btn btn-icon text-white'>
                                                    <i className="fa-brands fa-github "></i>

                                                </button>
                                                <button className='btn btn-icon text-white'>
                                                    <i className="fa-brands fa-github "></i>

                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-2">

                                <small className='text-white fw-bold '>Judul Karya</small>
                                <button className='btn btn-info align-end btn-xs btn-primary rounded-pill '>
                                    Visit
                                </button>
                            </div>
                            <div className="card w-100 bg-transparent ">
                                <div className="d-flex justify-content-start align-items-center mt-2">
                                    <div className="col-2 card-sosmed d-flex align-items-center justify-content-center me-2">

                                    </div>
                                    <div className=" d-flex align-items-start flex-column ">
                                        <small className="text-white ">Boim Amikom  </small>
                                        <small className=" text-muted mb-0">Event</small>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <hr className='text-muted border-1 my-2' />
                        <div className="d-flex justify-content-start flex-wrap mb-2 gap-1">

                            <button className='btn btn-xs btn-tag  text-muted'>
                                <small>
                                    Full Stack
                                </small>
                            </button>
                            <button className='btn btn-xs btn-tag  text-muted'>
                                <small>
                                    Laravel
                                </small>
                            </button>
                            <button className='btn btn-xs btn-tag  text-muted'>
                                <small>
                                    Unreal Engine
                                </small>
                            </button>
                            <button className='btn btn-xs btn-tag  text-muted'>
                                <small>
                                    HTML
                                </small>
                            </button>
                        </div>
                        {/* <div className="d-flex justify-content-between gap-2">

                            <button className='btn btn-border rounded-pill text-white w-100 '>
                                <i className="fa-brands fa-github me-2"></i>
                                GitHub
                            </button>
                            <button className='btn btn-border rounded-pill text-white w-100 '>
                                <i className="fa-brands fa-figma me-2"></i>
                                Figma
                            </button>
                        </div> */}

                    </div>
                </div>

            </div>

        </div></div >
    )
}
