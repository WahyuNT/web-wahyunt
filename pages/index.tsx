import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="section-primary">

        <div className="container px-5 pt-5">

          <div className="d-flex justify-content-center gap-3">
            <div className="col-3  ">

              <div className="card card-glass w-100 p-5">
                <div className=" d-flex justify-content-center align-items-center">
                  <img src="https://avatars.githubusercontent.com/u/83133470?v=4" className="avatar-profile" alt="icon" />

                </div>
                <h5 className="text-primary text-center mt-3 ">Wahyu NT</h5>
                <p className=" text-center ">Full Stack Developer</p>
                <hr className="mt-0" />
                <div className="d-flex">
                  <div className="me-2">
                    <button className="btn btn-icon btn-primary"><i className="fa-regular fa-envelope"></i></button>
                  </div>
                  <div className="d-flex flex-column">
                    <small className="text-white">2022</small>
                    <h6 className="mb-0 text-white">$32.5k</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9 ">

              <div className="card card-glass w-100">
                <div className="card-body">
                  <div className="d-flex justify-content-start">
                    <div className="col-4">
                      <div className="card h-100">
                        <div className="card-body">

                        </div>
                      </div>
                    </div>
                    <div className="col-8 d-flex justify-content-start">
                      <div className="col-4 d-flex align-items-start">
                        <div className="div">
                          <div className="card ">
                            <div className="card-body asprect-ratio-1-1">
                              <img src="https://i.pinimg.com/564x/08/77/d3/0877d31bb72f2e9f0dd7e2ce75b6eb3b.jpg" className="asprect-ratio-1-1" alt="" />
                            </div>
                          </div>
                          <div className="card asprect-ratio-1-1">
                            <div className="card-body">

                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                  <h5 className="text-primary"><b>About Me</b></h5>
                  <p className="text-muted">Hello, I'm Wahyu Nusantara. I'm a fresh graduate from AMIKOM University Yogyakarta. With a background
                    in UI/UX design, 3D Modeling, Game development, and Web development, I have a great interest in the
                    world of programming. My expertise spans various languages and frameworks, including C#, JavaScript,
                    PHP, Laravel, React.js, and Express.js. Additionally, I am proficient in managing data structure. </p>
                  <h5 className="text-primary"><b>What I'm Doing</b></h5>
                  <div className="d-flex justify-content-start ">

                    <div className="col-4 pe-2">
                      <div className="card">
                        s
                      </div>
                    </div>
                    <div className="col-4 ps-1 pe-1">
                      <div className="card">
                        s
                      </div>
                    </div>
                    <div className="col-4 ps-2">
                      <div className="card">
                        s
                      </div>
                    </div>
                  </div>
                  <h5 className="text-primary mt-3"><b>Tech Skill</b></h5>
                  <div className="d-flex justify-content-start flex-wrap">

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
