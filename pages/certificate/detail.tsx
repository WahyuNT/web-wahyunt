import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import DetailPortofolio from "@/components/DetailPortofolio";
import DetailCertificate from "@/components/DetailCertificate";


// import styles from "@/styles/Home.module.css";



const inter = Inter({ subsets: ["latin"] });

export default function Detail() {
    return (
        <>
            <div className="section-primary">
                <div className="container px-5 pt-5 ">
                    <div className="d-flex justify-content-center gap-3">
                        <div className="col  ">
                            <Profile />
                        </div>
                        <div className="col-9 ">
                            <div className="card p-2 card-bg w-100" style={{ height: "89vh" }}>
                                <div className="overflow-auto overflow-hide">
                                    <DetailCertificate />
                                </div>
                            </div>
                        </div>
                        <div className="col">
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
