import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import Image from "next/image";
import React from "react";

export default function ResumeComp() {
  return (
    <div>
      <div className="card-body " style={{ maxHeight: "100%" }}>
        <div className="d-flex"></div>
        <h4 className="text-utama mt-2 text-center ">
          <b>Resume</b>
        </h4>
        <div className="d-flex justify-content-start mb-3 mt-0">
          <div
            className="card me-2 color-utama"
            style={{ width: "5px", height: "auto" }}
          ></div>
          <h4 className="text-white mt-2 text-white">
            <b>
              <span className="text-utama">Edu</span>cation
            </b>
          </h4>
        </div>
        <div className="d-flex flex-wrap justify-content-start gap-3 ms-3">
          <div className="col-lg-5 col-12 ">
            <div className="card-glass">
              <div className="meta">
                <div className="p-3">
                  <div className="d-flex ">
                    <div className="col-2 d-flex justify-content-center">
                      <img
                        src="/img/experience/logo-amikom.png"
                        style={{ width: "40px", height: "40px" }}
                        alt="skill"
                        className="rounded"
                      ></img>
                    </div>
                    <div className="col d-flex align-items-start flex-column">
                      <div
                        className="card  card-year-campus mb-1 "
                        style={{ borderRadius: "7px" }}
                      >
                        <small
                          className="text-utama"
                          style={{ fontSize: "11px" }}
                        >
                          2020 - 2023
                        </small>
                      </div>
                      <h6 className="text-white mb-0">
                        AMIKOM University Yogyakarta
                      </h6>
                      <small className="text-second">Computer Science</small>
                      <small className="text-second">GPA : 3.99/4.00 </small>
                      <small className="text-utama mt-1">
                        <i className="fa-solid fa-medal me-2 text-utama"></i>
                        Best Graduate
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12 ">
            <div className="card-glass h-100">
              <div className="meta">
                <div className="p-3">
                  <div className="d-flex ">
                    <div className="col-2 d-flex justify-content-center">
                      <img
                        src="/img/experience/tamsis.png"
                        style={{ width: "40px", height: "40px" }}
                        alt="skill"
                        className="rounded"
                      ></img>
                    </div>
                    <div className="col d-flex align-items-start flex-column">
                      <div
                        className="card  card-year-campus mb-1 "
                        style={{ borderRadius: "7px" }}
                      >
                        <small
                          className="text-utama"
                          style={{ fontSize: "11px" }}
                        >
                          2016 - 2019
                        </small>
                      </div>
                      <h6 className="text-white mb-0">SMK Tamansiswa Jetis</h6>
                      <small className="text-second">Multimedia</small>
                      <small className="text-utama mt-1">
                        <i className="fa-solid fa-medal me-2 text-utama"></i>Top
                        10 Best Graduate
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-start mb-3 mt-4">
          <div
            className="card me-2 color-utama"
            style={{ width: "5px", height: "auto" }}
          ></div>
          <h4 className="text-white mt-2 text-white">
            <b>
              <span className="text-utama"> Work</span> Experience
            </b>
          </h4>
        </div>
        <div className="card bg-transparent">
          <div className="card-body">
            <div className="road-map text-white">
              <div className="road-map-wrapper">
                <div className="timeline-row">
                  <div className="timeline-items">
                    <div className="item">
                      <div className="timeline-item timeline-not-done">
                        <div
                          className="timeline-date "
                          data-animation='{"animation":"","duration":"slow","delay":""}'
                        >
                          <span className="date">
                            <small>May 2024 – Jul 2024</small>
                          </span>
                        </div>
                        <div
                          className="timeline-info  ova-invisible"
                          data-animation='{"animation":"ova-move-up","duration":"","delay":100}'
                        >
                          <div className="d-flex justify-content-center">
                            <div className="card bg-transparent mb-1">
                              <img
                                src="/img/experience/horuslogo.png"
                                style={{ width: "100px" }}
                                alt="skill"
                                className="rounded"
                              ></img>
                            </div>
                          </div>
                          <h3 className="timeline-title text-utama">
                            Horus Technology
                          </h3>
                          <ul className="timeline-content">
                            <li>Full Stack Web</li>
                            <li>
                              <small>
                                <i> Intern</i>
                              </small>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="timeline-item timeline-not-done">
                        <div
                          className="timeline-date "
                          data-animation='{"animation":"","duration":"slow","delay":""}'
                        >
                          <span className="date">
                            <small>Jul 2022 - Des 2023</small>
                          </span>
                        </div>
                        <div
                          className="timeline-info animated ova-move-up"
                          data-animation='{{"animation":"ova-move-up","duration":"","delay":100}}'
                        >
                          <div className="card bg-transparent mb-1">
                            <img
                              src="/img/experience/fa.png"
                              style={{ width: "100px" }}
                              alt="skill"
                              className="rounded"
                            ></img>
                          </div>

                          <h3 className="timeline-title text-utama">
                            Forum Asisten
                          </h3>
                          <ul className="timeline-content">
                            <li>Full Stack Web</li>
                            <li>
                              <small>
                                <i> Intern</i>
                              </small>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="timeline-item timeline-not-done">
                        <div
                          className="timeline-date "
                          data-animation='{"animation":"","duration":"slow","delay":""}'
                        >
                          <span className="date">
                            <small>Mar 2023 - Jul 2023</small>
                          </span>
                        </div>
                        <div
                          className="timeline-info animated ova-move-up"
                          data-animation='{"animation":"ova-move-up","duration":"","delay":100}'
                        >
                          <div className="card bg-transparent mb-0">
                            <img
                              src="/img/experience/msv.png"
                              style={{ width: "100px" }}
                              alt="skill"
                              className="rounded"
                            ></img>
                          </div>
                          <h3 className="timeline-title text-utama">
                            MSV Studio
                          </h3>
                          <ul className="timeline-content">
                            <li>3D Modelling</li>
                            <li>
                              <small>
                                <i> Intern</i>
                              </small>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline-row">
                  <div className="timeline-items">
                    <div className="item">
                      <div className="timeline-item timeline-not-done">
                        <div
                          className="timeline-date "
                          data-animation='{"animation":"","duration":"slow","delay":""}'
                        >
                          <span className="date">
                            <small>May 2019 - Aug 2020</small>
                          </span>
                        </div>
                        <div
                          className="timeline-info  ova-invisible"
                          data-animation='{"animation":"ova-move-up","duration":"","delay":100}'
                        >
                          <div className="d-flex justify-content-center">
                            <div className="card bg-transparent mb-1">
                              <img
                                src="/img/experience/sci.png"
                                style={{ width: "100px" }}
                                alt="skill"
                                className="rounded"
                              ></img>
                            </div>
                          </div>
                          <h3 className="timeline-title text-utama">
                            PT SIAP CETAK INSPIRATION
                          </h3>
                          <ul className="timeline-content">
                            <li>Graphic Design</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="timeline-item timeline-not-done">
                        <div
                          className="timeline-date "
                          data-animation='{"animation":"","duration":"slow","delay":""}'
                        >
                          <span className="date">
                            <small>Jul 2018 - Sep 2018</small>
                          </span>
                        </div>
                        <div
                          className="timeline-info ova-invisible"
                          data-animation='{"animation":"ova-move-up","duration":"","delay":300}'
                        >
                          <div className="card bg-transparent mb-1">
                            <img
                              src="/img/experience/aditv.png"
                              style={{ width: "100px" }}
                              alt="skill"
                              className="rounded"
                            ></img>
                          </div>
                          <h3 className="timeline-title text-utama">
                            ADiTV Jogja
                          </h3>
                          <ul className="timeline-content">
                            <li>News Producer</li>
                            <li>
                              <small>
                                <i> Intern</i>
                              </small>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-start mb-3 mt-4">
          <div
            className="card me-2 color-utama"
            style={{ width: "5px", height: "auto" }}
          ></div>
          <h4 className="text-white mt-2 text-white">
            <b>
              <span className="text-utama">Project</span> And Volunteer
            </b>
          </h4>
        </div>
        <div className="d-flex justify-content-start flex-wrap">
          <div className="col-lg-6 col-12 ps-3 mb-3">
            <div className="card-glass h-100">
              <div className="meta">
                <div className="p-3">
                  <div className="d-flex ">
                    <div className="col-2 d-flex justify-content-center">
                      <img
                        src="/img/icon/boim2024.png"
                        style={{ width: "40px", height: "40px" }}
                        alt="skill"
                        className="rounded"
                      ></img>
                    </div>
                    <div className="col d-flex align-items-start flex-column">
                      <h6 className="text-utama fw-bold  mb-0">
                        BOIM AMIKOM 2024{" "}
                      </h6>
                      <small className="text-white mb-1">WEB Development</small>
                      <small className="mb-0 text-second">
                        <ul className="ps-4">
                          <li>
                            Developing the previous website and adapting the
                            design style from 2023 to 2024.
                          </li>
                          <li>
                            Input the artworks data of BOIM 2024 participants.
                          </li>
                        </ul>
                      </small>
                      <div
                        className="card  card-year-volunteer mb-1 "
                        style={{ borderRadius: "7px" }}
                      >
                        <small className="" style={{ fontSize: "11px" }}>
                          Sep 2023 - Maret 2024
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 ps-3 mb-3">
            <div className="card-glass h-100">
              <div className="meta">
                <div className="p-3">
                  <div className="d-flex ">
                    <div className="col-2 d-flex justify-content-center">
                      <img
                        src="/img/icon/boim2023.png"
                        style={{ width: "40px", height: "40px" }}
                        alt="skill"
                        className="rounded"
                      ></img>
                    </div>
                    <div className="col d-flex align-items-start flex-column">
                      <h6 className="text-utama mb-0 fw-bold">
                        BOIM AMIKOM 2023{" "}
                      </h6>
                      <small className="text-white mb-1">WEB Development</small>
                      <small className="mb-0 text-second">
                        <ul className="ps-4">
                          <li>
                            Designing the UI for the BOIM Amikom 2023 website.
                          </li>
                          <li>Developing a full-stack website with Laravel.</li>
                        </ul>
                      </small>
                      <div
                        className="card  card-year-volunteer mb-0 "
                        style={{ borderRadius: "7px" }}
                      >
                        <small className="" style={{ fontSize: "11px" }}>
                          Sep 2022 - Mar 2023
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 ps-3 mb-3">
            <div className="card-glass h-100">
              <div className="meta">
                <div className="p-3">
                  <div className="d-flex ">
                    <div className="col-2 d-flex justify-content-center">
                      <img
                        src="/img/icon/expo2022.png"
                        style={{ width: "40px", height: "40px" }}
                        alt="skill"
                        className="rounded"
                      ></img>
                    </div>
                    <div className="col d-flex align-items-start flex-column">
                      <h6 className="text-utama mb-0 fw-bold">
                        EXPO AMIKOM 2022
                      </h6>
                      <small className="text-white mb-1">
                        Equipment Division and Web
                      </small>
                      <small className="mb-0 text-second">
                        <ul className="ps-4">
                          <li>
                            Developing the user interface design for the Expo
                            AMIKOM 2022 website.
                          </li>
                          <li>
                            Preparing the equipment needed for the Expo AMIKOM
                            2022 event.
                          </li>
                        </ul>
                      </small>
                      <div
                        className="card  card-year-volunteer mb-1 "
                        style={{ borderRadius: "7px" }}
                      >
                        <small className="" style={{ fontSize: "11px" }}>
                          Aug 2022 - Okt 2022
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 ps-3 mb-3">
            <div className="card-glass h-100">
              <div className="meta">
                <div className="p-3">
                  <div className="d-flex ">
                    <div className="col-2 d-flex justify-content-center">
                      <img
                        src="/img/icon/pemilwa.png"
                        style={{ width: "40px", height: "40px" }}
                        alt="skill"
                        className="rounded"
                      ></img>
                    </div>
                    <div className="col d-flex align-items-start flex-column">
                      <h6 className="text-utama mb-0 fw-bold">
                        Pemilwa AMIKOM 2022
                      </h6>
                      <small className="text-white mb-1">Graphic Design</small>
                      <small className="mb-0 text-second">
                        <ul className="ps-4">
                          <li>Creating design for use on Instagram feed.</li>
                          <li>
                            Creating designs for banners, ID cards, and
                            lanyards.
                          </li>
                        </ul>
                      </small>
                      <div
                        className="card  card-year-volunteer mb-1 "
                        style={{ borderRadius: "7px" }}
                      >
                        <small className="" style={{ fontSize: "11px" }}>
                          Nov 2022 - Jan 2023
                        </small>
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
  );
}
