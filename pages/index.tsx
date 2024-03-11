import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
// import styles from "@/styles/Home.module.css";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="section-primary">
        <div className="container px-5 pt-5 ">
          <div className="d-flex justify-content-center gap-3">
            <div className="col-3  ">
              <div className="card card-bg w-100 p-3">
                <div className=" d-flex justify-content-center align-items-center">
                  <img src="https://avatars.githubusercontent.com/u/83133470?v=4" className="avatar-profile" alt="icon" />
                </div>
                <h5 className="text-white text-center mt-3 ">Wahyu NT</h5>
                <div className="d-flex justify-content-center">

                  <hr className="mt-3 text-white text-center" style={{ width: 230 }} />
                </div>
                <div className="d-flex px-3 justify-content-center align-items-start flex-column">
                  <div className="card w-100 bg-transparent mb-3">
                    <div className="d-flex justify-content-start">
                      <div className="col-2 card-sosmed d-flex align-items-center justify-content-center me-2">
                        <i className="fa-solid fa-envelope  text-white"></i>
                      </div>
                      <div className=" d-flex align-items-start flex-column">

                        <small className=" text-muted mb-0">Email</small>
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

                        <small className=" text-muted mb-0">Website</small>
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

                        <small className=" text-muted mb-0">Github</small>
                        <small className="text-white ">Wahyu NT  </small>
                      </div>
                    </div>
                  </div>
                  <div className="card w-100 bg-transparent mb-3">
                    <div className="d-flex justify-content-start">
                      <div className="col-2 card-sosmed d-flex align-items-center justify-content-center me-2">
                        <i className="fa-brands fa-linkedin-in text-white"></i>
                      </div>
                      <div className=" d-flex align-items-start flex-column">

                        <small className=" text-muted mb-0">LinkedIn</small>
                        <small className="text-white ">Wahyu Nusantara  </small>
                      </div>
                    </div>
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
              </a>
            </div>
            <div className="col-8 ">
              <div className="card p-2 card-bg w-100" style={{ height: "89vh" }}>
                <div className="overflow-auto overflow-hide">
                  <div className="card-body " style={{ maxHeight: "100%" }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">

                      <h5 className="text-white text-center mb-0"><b>My Project</b></h5>
                      <button className="btn text-primary rounded-pill">See More...</button>
                    </div>
                    <div className="d-flex gap-2 mb-3">

                      <div className="div">
                        <div className=" bg-transparent card-doing p-2">
                          <div className="card bg-transparent  card-banner">
                            <img src="https://i.pinimg.com/564x/76/c3/fb/76c3fbfd8467ac598d0e4cb72e71f62a.jpg" className="banner-image " alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="div">
                        <div className=" bg-transparent card-doing p-2">
                          <div className="card bg-transparent  card-banner">
                            <img src="https://i.pinimg.com/564x/53/da/bc/53dabc0fc56668f8383507de9dee7b90.jpg" className="banner-image " alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="div">
                        <div className=" bg-transparent card-doing p-2">
                          <div className="card bg-transparent  card-banner">
                            <img src="https://i.pinimg.com/564x/87/ae/71/87ae710e5bc771a02893ad7b911cbb14.jpg" className="banner-image " alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="div">
                        <div className=" bg-transparent card-doing p-2">
                          <div className="card bg-transparent  card-banner">
                            <img src="https://i.pinimg.com/564x/d7/fb/95/d7fb95f5d8ebd333665e4b9d33c2ce2b.jpg" className="banner-image " alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="div">
                        <div className=" bg-transparent card-doing p-2">
                          <div className="card bg-transparent  card-banner">
                            <img src="https://i.pinimg.com/564x/93/ce/47/93ce478770c0a3750f860a5e488d00c3.jpg" className="banner-image " alt="" />
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="d-flex">

                    </div>
                    <h5 className="text-white mt-2"><b>About Me</b></h5>
                    <p className="text-muted">Hello, I'm Wahyu Nusantara. I'm a fresh graduate from AMIKOM University Yogyakarta. With a background
                      in UI/UX design, 3D Modeling, Game development, and Web development, I have a great interest in the
                      world of programming. My expertise spans various languages and frameworks, including C#, JavaScript,
                      PHP, Laravel, React.js, and Express.js. Additionally, I am proficient in managing data structure. </p>
                    <h5 className="text-white mt-3"><b>Hard Skill</b></h5>
                    <div className="d-flex justify-content-start flex-wrap ">
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
                      <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/react.png" className="rounded" alt="" />
                      </div>
                      <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/unity.png" className="rounded" alt="" />
                      </div>
                      <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/vue.png" className="rounded" alt="" />
                      </div>
                      <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/ue.png" className="rounded" alt="" />
                      </div>
                      <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/corel.png" className="rounded" alt="" />
                      </div>
                      <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/mongo.png" className="rounded" alt="" />
                      </div>
                      <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/premiere.png" className="rounded" alt="" />
                      </div>
                      <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/ae.png" className="rounded" alt="" />
                      </div>
                      <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/ps.png" className="rounded" alt="" />
                      </div>


                    </div>
                    <h5 className="text-white mt-3"><b>What I'm Doing</b></h5>
                    <div className="d-flex justify-content-start flex-wrap">
                      <div className="col-4 pe-2 mb-2">
                        <div className="card-doing"><div className="meta">
                          <div className="p-3">
                            <div className="d-flex ">
                              <div className="col-2 ">
                                <i className="fa-solid fa-globe fa-xl text-white"></i>
                              </div>
                              <div className="col d-flex align-items-start flex-wrap">

                                <h6 className="text-white mb-0">Web Developer</h6>
                                <small className="text-muted text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, facere  </small>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="col-4 pe-2 mb-2">
                        <div className="card-doing"><div className="meta">
                          <div className="p-3">
                            <div className="d-flex ">
                              <div className="col-2 ">
                                <i className="fa-solid fa-puzzle-piece fa-xl text-white"></i>
                              </div>
                              <div className="col d-flex align-items-start flex-wrap">

                                <h6 className="text-white mb-0">Game Developer</h6>
                                <small className="text-muted text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, facere  </small>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="col-4 pe-2 mb-2">
                        <div className="card-doing"><div className="meta">
                          <div className="p-3">
                            <div className="d-flex ">
                              <div className="col-2 ">
                                <i className="fa-solid fa-pen-nib fa-xl text-white"></i>
                              </div>
                              <div className="col d-flex align-items-start flex-wrap">

                                <h6 className="text-white mb-0">UI/UX</h6>
                                <small className="text-muted text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, facere  </small>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="col-4 pe-2 mb-2">
                        <div className="card-doing"><div className="meta">
                          <div className="p-3">
                            <div className="d-flex ">
                              <div className="col-2 ">
                                <i className="fa-solid fa-palette fa-xl text-white"></i>
                              </div>
                              <div className="col d-flex align-items-start flex-wrap">

                                <h6 className="text-white mb-0">Graphic Design</h6>
                                <small className="text-muted text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, facere  </small>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="col-4 pe-2 mb-2">
                        <div className="card-doing"><div className="meta">
                          <div className="p-3">
                            <div className="d-flex ">
                              <div className="col-2 ">
                                <i className="fa-solid fa-cubes fa-xl text-white"></i>
                              </div>
                              <div className="col d-flex align-items-start flex-wrap">

                                <h6 className="text-white mb-0">3D Modelling</h6>
                                <small className="text-muted text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, facere  </small>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="col-4 pe-2 mb-2">
                        <div className="card-doing"><div className="meta">
                          <div className="p-3">
                            <div className="d-flex ">
                              <div className="col-2 ">
                                <i className="fa-solid fa-film fa-xl text-white"></i>
                              </div>
                              <div className="col d-flex align-items-start flex-wrap">

                                <h6 className="text-white mb-0">Motion Graphic</h6>
                                <small className="text-muted text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, facere  </small>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

            </div>
            <div className="col">
              <div className="card card-bg  p-3">
                <div className="d-flex align-items-start justify-content-center flex-wrap">
                  <div className="col d-flex justify-content-center mb-1">

                    <button className="btn btn-primary p-3 btn-icon ">
                      <i className="fa-solid fa-user text-white"></i>
                    </button>
                  </div>
                  <div className="col d-flex justify-content-center mb-1">

                    <button className="btn  p-3 btn-icon ">
                      <i className="fa-solid fa-briefcase text-white"></i>
                    </button>
                  </div>
                  <div className="col d-flex justify-content-center mb-1">

                    <button className="btn  p-3 btn-icon ">
                      <i className="fa-solid fa-images text-white"></i>
                    </button>
                  </div>
                  <div className="col d-flex justify-content-center mb-1">

                    <button className="btn  p-3 btn-icon ">
                      <i className="fa-solid fa-newspaper text-white"></i>
                    </button>
                  </div>
                  <div className="col d-flex justify-content-center mb-1">

                    <button className="btn  p-3 btn-icon ">
                      <i className="fa-solid fa-file-invoice text-white"></i>
                    </button>
                  </div>
                  <div className="col d-flex justify-content-center mb-1">

                    <button className="btn  p-3 btn-icon ">
                      <i className="fa-solid fa-award text-white"></i>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div >


    </>
  );
}
