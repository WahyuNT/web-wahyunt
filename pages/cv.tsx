import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import Profile from "@/components/Profile";
import Aboute from "@/components/AbouteComp";
import Sidebar from "@/components/Sidebar";
import ResumeComp from "@/components/ResumeComp";

const inter = Inter({ subsets: ["latin"] });

export default function cv() {
    return (
        <>
            <div className="section-primary ">
                <div className="container   px-lg-1 pt-lg-5 pt-3 ">
                    <div className="d-flex  gap-3  flex-wrap flex-lg-nowrap ">
                        <div className="col ">
                            <Profile />
                        </div>
                        <div className="col-lg-9 col-12 col-sm-12 ">
                            <div className="card p-2 card-bg w-100  " style={{ height: "89vh" }}>
                            <iframe style={{ borderRadius: "10px" }} src="https://drive.google.com/file/d/1UZhX1AN-anWVK-3LVKy1X2uVRggv8Ks-/preview" height="100%" width={"800px"} allow="autoplay"></iframe>
                            </div>
                        </div>
                        <div className="col  mobile">
                            <div className=" d-flex justify-content-center">

                                <div className="card card-overlay-bg bar p-3  ">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>

                        <div className="col desktop ">
                            <div className="card card-bg  p-3">
                                <Sidebar />
                            </div>
                        </div>
                    </div>

                </div>
            </div >




        </>
    );
}
