import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="section-primary">

        <div className="container pt-5">

          <div className="d-flex justify-content-center gap-3">
            <div className="col-3 ">

              <div className="card card-glass w-100 p-5">
                <div className=" d-flex justify-content-center align-items-center">
                  <div className="avatar avatar-profile">
                    <img src="https://avatars.githubusercontent.com/u/83133470?v=4" alt="" className="rounded-circle" />
                  </div>

                </div>
                <h5 className="text-white text-center">Wahyu NT</h5>
                <hr className="" />
                <div className="d-flex">
                  <div className="me-2">
                    <span className="badge bg-label-info p-2">  <i className="fa-regular fa-envelope"></i></span>
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
                  sadas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
