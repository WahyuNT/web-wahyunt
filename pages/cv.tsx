import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import Profile from "@/components/Profile";
import Aboute from "@/components/AbouteComp";
import Sidebar from "@/components/Sidebar";
import ResumeComp from "@/components/ResumeComp";
import { color } from "framer-motion";

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
              <div
                className="card p-2 card-bg w-100  "
                style={{ height: "89vh" }}
              >
                <iframe
                  height={700}
                  title="Embedded Google Document"
                  className="text-white overflow-y-hidden"
                  src="https://docs.google.com/document/d/e/2PACX-1vSWpmCVEcJQoz_lwximFeril5DjY__ukNsd33Y8bvLTOcLUBgNT9B5IvFwAOkbKzAobzS7s6RCQVqvh/pub?embedded=true"
                  style={{ overflow: "hidden" }}
                ></iframe>
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
      </div>
    </>
  );
}
