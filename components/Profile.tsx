import React from 'react'

export default function Profile() {
    return (
        <div><div className="card card-bg w-100 p-3">
            <div className=" d-flex justify-content-center align-items-center mt-4">
                <img src="https://avatars.githubusercontent.com/u/83133470?v=4" className="avatar-profile" alt="icon" />
            </div>
            <h5 className="text-white text-center mt-3 ">Wahyu NT</h5>
            <div className="d-flex justify-content-center">

                <hr className="mt-0 text-white text-center" style={{ width: 230 }} />
            </div>
            <div className="d-flex px-3 justify-content-center align-items-start flex-column">
                <div className="card w-100 bg-transparent mb-3">
                    <div className="d-flex justify-content-start">
                        <div className="col-2 card-sosmed d-flex align-items-center justify-content-center me-2">
                            <i className="fa-solid fa-envelope  text-white"></i>
                        </div>
                        <div className=" d-flex align-items-start flex-column">

                            <small className=" text-second mb-0">Email</small>
                            <small className="text-white ">wahyuntx28@gmail.com  </small>
                        </div>
                    </div>
                </div>
                <div className="card w-100 bg-transparent mb-3">
                    <div className="d-flex justify-content-start">
                        <div className="col-2 card-sosmed d-flex align-items-center justify-content-center me-2">
                            <i className="fa-solid fa-globe  text-white"></i>
                        </div>
                        <div className=" d-flex align-items-start flex-column">

                            <small className=" text-second mb-0">Website</small>
                            <small className="text-white ">wahyunt.me  </small>
                        </div>
                    </div>
                </div>
                <div className="card w-100 bg-transparent mb-3">
                    <div className="d-flex justify-content-start">
                        <div className="col-2 card-sosmed d-flex align-items-center justify-content-center me-2">
                            <i className="fa-brands fa-github text-white"></i>
                        </div>
                        <div className=" d-flex align-items-start flex-column">

                            <small className=" text-second mb-0">Github</small>
                            <small className="text-white ">Wahyu NT  </small>
                        </div>
                    </div>
                </div>
                <div className="card w-100 bg-transparent mb-3 ">
                    <div className="d-flex justify-content-start">
                        <div className="col-2 card-sosmed d-flex align-items-center justify-content-center me-2">
                            <i className="fa-brands fa-linkedin-in text-white"></i>
                        </div>
                        <div className=" d-flex align-items-start flex-column">

                            <small className=" text-second mb-0">LinkedIn</small>
                            <small className="text-white ">Wahyu Nusantara  </small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">


            </div>
            <div className="d-flex justify-content-center flex-wrap gap-2">
                <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                    <i className="fa-brands fa-instagram fa-sm text-white "></i>
                </div>
                <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                    <i className="fa-brands fa-facebook fa-sm text-white "></i>
                </div>
                <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                    <i className="fa-brands fa-dribbble fa-sm text-white "></i>
                </div>
                <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                    <i className="fa-brands fa-youtube fa-sm text-white "></i>
                </div>
                <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                    <i className="fa-brands fa-discord fa-sm text-white "></i>
                </div>
                <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                    <i className="fa-brands fa-steam fa-sm text-white "></i>
                </div>
            </div>

        </div>

            <a href="" className="text-decoration-none">
                <div className="card card-bg mt-3">
                    <div className="card-body align-items-center d-flex justify-content-center">
                        <i className="fa-solid fa-download text-white me-2"></i>
                        <p className="text-white m-0">Download CV</p>
                    </div>
                </div>
            </a></div>
    )
}
