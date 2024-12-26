import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function PortofolioComp() {
  const [portofolio, setPortofolio] = useState([]);
  const [valueFilter, setValueFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleFilterChange = (newValue: any) => {
    setValueFilter(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const responsePortofolio = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/portofolio/?keyword=${valueFilter}`
        );
        console.log(responsePortofolio.data);
        setPortofolio(responsePortofolio.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [valueFilter]);

  return (
    <div>
      <div className="card-body  px-1" style={{ maxHeight: "100%" }}>
        <div className="d-flex"></div>
        <h4 className="text-utama mt-2 text-center">
          <b>Portofolio</b>
        </h4>
        <small className="text-second  mb-2 ms-2">Filter :</small>
        <div className="d-flex flex-wrap mt-1 ms-2">
          <button
            className={`btn btn-xs  text-second me-2 mb-2 ${
              valueFilter === "" ? "btn-tag-active" : "btn-tag"
            }`}
            onClick={() => handleFilterChange("")}
          >
            <small>All</small>
          </button>

          <button
            className={`btn btn-xs  text-second me-2 mb-2 ${
              valueFilter === "game" ? "btn-tag-active" : "btn-tag"
            }`}
            onClick={() => handleFilterChange("game")}
          >
            <small>Game</small>
          </button>

          <button
            className={`btn btn-xs  text-second me-2 mb-2 ${
              valueFilter === "website" ? "btn-tag-active" : "btn-tag"
            }`}
            onClick={() => handleFilterChange("website")}
          >
            <small>Website</small>
          </button>

          <button
            className={`btn btn-xs  text-second me-2 mb-2  ${
              valueFilter === "Multimedia" ? "btn-tag-active" : "btn-tag"
            }`}
            onClick={() => handleFilterChange("Multimedia")}
          >
            <small>Multimedia</small>
          </button>
          <button
            className={`btn btn-xs  text-second me-2 mb-2  ${
              valueFilter === "Interactive Media" ? "btn-tag-active" : "btn-tag"
            }`}
            onClick={() => handleFilterChange("Interactive Media")}
          >
            <small>Interactive Media</small>
          </button>
        </div>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <span className="loader mt-5"></span>
          </div>
        ) : (
          <div className="d-flex  flex-wrap mt-2">
            {portofolio?.map(
              (item: {
                _id: string;
                title: string;
                desc: string;
                purpose: string;
                icon_company: string;
                cover: string;
                company: string;
                desc_company: string;
                date: string;
                slug: string;
                link: string;
                figma: string;
                github: string;
                software: string[];
                type: string[];
              }) => {
                return (
                  <div className="col-lg-4 col-12 mb-3 px-2">
                    <div className=" bg-transparent card card-glass card-porto ">
                      <div className="div px-3 pt-3">
                        <div className="card bg-transparent  card-banner flex-column">
                          <div className="card bg-transparent">
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/static/images/portofolio/${item.cover}`}
                              className="cover-image img-porto"
                              alt=""
                            />

                            <div className="overlay-visit   position-absolute  start-50  translate-middle-x">
                              <a
                                href="https://fontawesome.com/icons/arrow-up-right-from-square?f=classic&s=solid"
                                target="_blank"
                                className="text-decoration-none text-white btn-visit"
                              >
                                <div className="d-flex justify-content-center ">
                                  {item.link && (
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      className="text-decoration-none"
                                    >
                                      <div className="card rounded-pill bg-dark text-white  px-3 py-1 text-decoration-none">
                                        <div className="d-flex align-items-center ">
                                          <i className="fa-solid fa-arrow-up-right-from-square me-1 fa-xs"></i>
                                          <small>Visit Site</small>
                                        </div>
                                      </div>
                                    </a>
                                  )}
                                </div>
                              </a>
                            </div>
                            <div className="overlay-software position-absolute  start-50 translate-middle-x">
                              <div className="d-flex justify-content-center">
                                <div className="card rounded-pill bg-dark   ">
                                  <div className="card-body p-1">
                                    <div className="d-flex gap-2 px-2 py-1">
                                      {item.software.map((softwareItem) => (
                                        // <img src={softwareItem}  className="cover-skill-mini " alt="" />
                                        <Image
                                          src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/static/images/skills/${softwareItem}`}
                                          width={15}
                                          height={15}
                                          className="rounded"
                                          alt="skill"
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="div px-3 pb-3">
                        <div className="d-flex justify-content-between align-items-center mt-2">
                          <h5 className="text-utama fw-bold mb-0 ">
                            {item.title}
                          </h5>
                        </div>
                        <div className="card w-100 bg-transparent ">
                          <div className="d-flex justify-content-start align-items-center mt-2">
                            <div className="col-2   d-flex align-items-center justify-content-center me-2">
                              <div className="card bg-transparent ">
                                <img
                                  src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/static/images/portofolio/${item.icon_company}`}
                                  className="cover-ava "
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className=" d-flex align-items-start flex-column ">
                              <small className="text-white ">
                                {item.company}{" "}
                              </small>
                              <small>
                                <small className=" text-second mb-0">
                                  {item.purpose}
                                </small>
                              </small>
                            </div>
                          </div>
                        </div>
                        <hr className="text-second border-1 my-2" />
                        <div className="d-flex justify-content-start flex-wrap mb-1 gap-1">
                          {item.type.map((typeItem) => (
                            <button className="btn btn-xs btn-tag  text-second">
                              <small>{typeItem}</small>
                            </button>
                          ))}
                        </div>
                        <hr className="text-second border-1 my-2" />
                        <div className="d-flex justify-content-between gap-2 mt-1">
                          {item.figma ||
                            (item.github && (
                              <div className="col d-flex gap-2 ">
                                {item.github && (
                                  <div className="col">
                                    <button className="btn btn-outline-utama btn-border w-100 rounded-pill text-white w-50">
                                      <i className="fa-brands fa-github "></i>
                                    </button>
                                  </div>
                                )}
                                {item.figma && (
                                  <div className="col">
                                    <button className="btn btn-outline-utama btn-border w-100 rounded-pill text-white w-50">
                                      <i className="fa-brands fa-figma "></i>
                                    </button>
                                  </div>
                                )}
                              </div>
                            ))}
                          <div className="col ">
                            <Link href={`/portofolio/detail/${item.slug}`}>
                              <button className="btn btn-outline-utama btn-border rounded-pill text-white w-100 ">
                                Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
    </div>
  );
}
