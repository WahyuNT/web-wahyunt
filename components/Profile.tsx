import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";

export default function Profile() {
  const router = useRouter();
  const postDataDownload = async () => {
    // try {
    //   const response = await fetch(
    //     `${process.env.NEXT_PUBLIC_API_URL}/api/presensi/post`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ page: "download" }),
    //     }
    //   );
    //   // Do something with the response if needed
    // } catch (error) {
    //   console.error("Terjadi kesalahan:", error);
    //   // Do something if an error occurs
    // }
  };
  const handlePostDataDownload = () => {
    postDataDownload();
  };

  useEffect(() => {
    let routerData = "";
    if (window.location.pathname == "/") {
      routerData = "home";
    } else {
      routerData = window.location.pathname.replace("/", "");
    }
    const postData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/presensi/post`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ page: router.query.slug || routerData }),
          }
        );
        // Do something with the response if needed
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        // Do something if an error occurs
      }
    };

    postData();
  }, []);

  return (
    <div>
      <div className="desktop">
        <div className="d-flex flex-wrap ">
          <div className="card card-bg w-100 p-3">
            <div className=" d-flex justify-content-center align-items-center mt-4">
              <img
                src="/img/icon/foto-profil.jpg"
                className="avatar-profile"
                alt="icon"
              />
            </div>
            <Analytics />
            <h5 className="text-utama text-center mt-3 fw-bold">Wahyu NT</h5>
            <div className="d-flex justify-content-center">
              <hr
                className="mt-0 text-second  text-center"
                style={{ width: 195 }}
              />
            </div>
            <div className="d-flex px-3 justify-content-center align-items-start flex-column">
              <a
                href="http://wahyunt.me/"
                target="_blank"
                className="text-decoration-none"
              >
                <div className="card w-100 bg-transparent mb-3">
                  <div className="d-flex justify-content-start">
                    <div className="col-2 card-sosmed btn-icon d-flex align-items-center justify-content-center me-2">
                      <i className="fa-solid fa-globe  "></i>
                    </div>
                    <div className=" d-flex align-items-start flex-column">
                      <small>
                        <small className=" text-second mb-0">Website</small>
                      </small>
                      <small className="text-white ">wahyunt.me </small>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/WahyuNT/"
                target="_blank"
                className="text-decoration-none"
              >
                <div className="card w-100 bg-transparent mb-3">
                  <div className="d-flex justify-content-start">
                    <div className="col-2 card-sosmed btn-icon d-flex align-items-center justify-content-center me-2">
                      <i className="fa-brands fa-github "></i>
                    </div>
                    <div className=" d-flex align-items-start flex-column">
                      <small>
                        <small className=" text-second mb-0">Github</small>
                      </small>
                      <small className="text-white ">WahyuNT </small>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/wahyu-nusantara/"
                target="_blank"
                className="text-decoration-none"
              >
                <div className="card w-100 bg-transparent mb-3 ">
                  <div className="d-flex justify-content-start">
                    <div className="col-2 card-sosmed btn-icon d-flex align-items-center justify-content-center me-2">
                      <i className="fa-brands fa-linkedin-in "></i>
                    </div>
                    <div className=" d-flex align-items-start flex-column">
                      <small>
                        <small className=" text-second mb-0">LinkedIn</small>
                      </small>
                      <small className="text-white ">Wahyu Nusantara </small>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="mailto:wahyuntx28@gmail.com"
                target="_blank"
                className="text-decoration-none"
              >
                <div className="card w-100 bg-transparent mb-3">
                  <div className="d-flex justify-content-start">
                    <div className="col-2 btn-icon card-sosmed d-flex align-items-center justify-content-center me-2">
                      <i className="fa-solid fa-envelope  "></i>
                    </div>
                    <div className=" d-flex align-items-start flex-column">
                      <small>
                        <small className=" text-second mb-0">Email</small>
                      </small>
                      <small className="text-white ">
                        wahyuntx28@gmail.com{" "}
                      </small>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="d-flex justify-content-center"></div>

            <div className="d-flex justify-content-center flex-wrap gap-2">
              <a
                href="https://www.instagram.com/wahyu_nt/"
                target="_blank"
                className="text-decoration-none"
              >
                <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                  <i className="fa-brands fa-instagram fa-sm  "></i>
                </div>
              </a>
              <a
                href="https://www.facebook.com/ntx28"
                target="_blank"
                className="text-decoration-none"
              >
                <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                  <i className="fa-brands fa-facebook fa-sm  "></i>
                </div>
              </a>
              <a
                href="https://dribbble.com/wahyunt"
                target="_blank"
                className="text-decoration-none"
              >
                <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                  <i className="fa-brands fa-dribbble fa-sm  "></i>
                </div>
              </a>
              <a
                href="https://www.youtube.com/channel/UClJgoKaadXYg1rU68KzVo2A"
                target="_blank"
                className="text-decoration-none"
              >
                <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                  <i className="fa-brands fa-youtube fa-sm  "></i>
                </div>
              </a>
              {/* <a href="https://www.youtube.com/channel/UClJgoKaadXYg1rU68KzVo2A" target='_blank' className='text-decoration-none'>
                                <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                                    <i className="fa-brands fa-discord fa-sm  "></i>
                                </div>
                            </a> */}
              <a
                href="https://play.google.com/store/apps/dev?id=7140720691173663103"
                target="_blank"
                className="text-decoration-none"
              >
                <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                  <i className="fa-brands fa-google-play fa-sm  "></i>
                </div>
              </a>
            </div>
          </div>

          <a
            onClick={handlePostDataDownload}
            href="https://drive.google.com/uc?export=download&id=1ETqhq5tP9262U_CzWBgIHBKScU8j1uxu"
            className="text-decoration-none w-100"
          >
            <div className="card card-bg mt-3 text-link text-white w-100">
              <div className="card-body align-items-center d-flex justify-content-center">
                <i className="fa-solid fa-file-arrow-down  me-2"></i>
                <p className=" m-0">Download CV</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="mobile mb-0">
        <div className="d-flex flex-wrap profile-mobile">
          <div className="card card-bg w-100 p-3">
            <div className="d-flex justify-content-between align-items-center">
              <img
                src="https://wahyunt.me/img/icon/foto-profil.jpg"
                className="avatar-profile"
                alt="icon"
              />
              <div className="col  ms-2 d-flex flex-column">
                <h6 className="text-white fw-bold">Wahyu NT</h6>
                <div className="d-flex justify-content-start flex-wrap gap-1">
                  <a
                    href="mailto:wahyuntx28@gmail.com"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                      <i className="fa-solid fa-envelope fa-xs  "></i>
                    </div>
                  </a>
                  <a
                    href="https://github.com/WahyuNT/"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                      <i className="fa-brands fa-github fa-xs  "></i>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/wahyu-nusantara-53026a229/"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                      <i className="fa-brands fa-linkedin fa-xs  "></i>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/wahyu_nt/"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                      <i className="fa-brands fa-instagram fa-xs  "></i>
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/ntx28"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                      <i className="fa-brands fa-facebook fa-xs  "></i>
                    </div>
                  </a>
                  <a
                    href="https://dribbble.com/wahyunt"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                      <i className="fa-brands fa-dribbble fa-xs  "></i>
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UClJgoKaadXYg1rU68KzVo2A"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                      <i className="fa-brands fa-youtube fa-xs  "></i>
                    </div>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/dev?id=7140720691173663103"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                      <i className="fa-brands fa-google-play fa-xs  "></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="div">
                <a
                  onClick={handlePostDataDownload}
                  href="https://drive.google.com/uc?export=download&id=1UZhX1AN-anWVK-3LVKy1X2uVRggv8Ks-"
                >
                  <button
                    className="btn btn-icon btn-outline-primary text-utama "
                    style={{ borderRadius: "8px" }}
                  >
                    <i className="fa-solid fa-download">
                      <small>
                        <small> CV</small>
                      </small>
                    </i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
