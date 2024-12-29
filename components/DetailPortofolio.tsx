import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Console } from "console";
import Image from "next/image";
import { Tooltip, Button } from "@nextui-org/react";

export default function DetailPortofolio() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const router = useRouter();
  const { slug } = router.query;
  const [portofolio, setPortofolio] = useState({
    _id: "",
    icon_company: "",
    cover: "",
    title: "",
    desc: "",
    desc_company: "",
    company: "",
    purpose: "",
    date: "",
    slug: "",
    link: "",
    github: "",
    figma: "",
    type: [],
    software: [],
  });
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          // Pastikan slug tidak undefined
          const responsePortofolio = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/portofolio/detail/${slug}`
          );
          setPortofolio(responsePortofolio.data.data);
          const id = responsePortofolio.data.data._id;
          console.log(responsePortofolio.data.data);
          if (id) {
            const responseImage = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/api/portofolio/image/list/${id}`
            );
            setImage(responseImage.data.data);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [slug]);
  return (
    <div>
      <div className="card-body  px-1" style={{ maxHeight: "100%" }}>
        <div className="d-flex align-items-center justify-content-start mb-3">
          <Link href="/portofolio">
            <button className="btn card-sosmed btn-icon me-2 text-utama">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </Link>
          <div className="col ">
            <div className="d-flex justify-content-center ">
              <div className="card h-100 bg-transparent card-border px-3">
                <div className="d-flex justify-content-center align-align-items-center">
                  <h5 className="text-utama my-1">
                    <b>{portofolio.title}</b>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" slider-container px-4">
          {image && image.length > 0 && (
            <Slider {...settings}>
              {image.map((img: { image_name: string; video_link?: string }) => {
                return (
                  <div key={img.image_name}>
                    {img.video_link ? (
                      <div className="px-1">
                        <div className="bg-transparent card-glass p-2">
                          <div className="card bg-transparent p-1">
                            <iframe
                              title="video"
                              width="auto"
                              height="218px"
                              src={img.video_link}
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="px-1">
                        <div className="bg-transparent card-glass p-2">
                          <div className="card bg-transparent p-1">
                            <Image
                              height={0}
                              width={0}
                              placeholder="blur"
                              blurDataURL={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/images/portofolio/${img.image_name}`}
                              sizes="100vw"
                              src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/images/portofolio/${img.image_name}`}
                              className="detail-porto-image"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </Slider>
          )}
        </div>

        <div className="d-flex justify-content-start mt-3 mb-2 flex-wrap">
          <div className="pe-2">
            <div className="card card-glass bg-transparent mb-2">
              <div className="d-flex justify-content-start px-3 py-2">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-calendar-alt fa-xl text-utama me-2"></i>
                </div>

                <div className=" d-flex align-items-start flex-column ps-1">
                  <small>
                    <small className=" text-second mb-0">Date</small>
                  </small>
                  <small className="text-white ">{portofolio.date}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="pe-2">
            <div className="card card-glass bg-transparent mb-2">
              <div className="d-flex justify-content-start px-3 py-2">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-rocket fa-xl text-utama me-2"></i>
                </div>
                <div className=" d-flex align-items-start flex-column ps-1">
                  <small>
                    <small className=" text-second mb-0">Purpose</small>
                  </small>
                  <small className="text-white ">{portofolio.purpose}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="pe-2">
            <a
              href={portofolio.link}
              target="_blank"
              className="text-decoration-none"
            >
              <div className="card card-glass bg-transparent mb-2">
                <div className="d-flex justify-content-start px-3 py-2">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-globe fa-xl text-utama me-2"></i>
                  </div>

                  <div className=" d-flex align-items-start flex-column ps-1">
                    <small>
                      <small className=" text-second mb-0">Site</small>
                    </small>
                    <small className="text-white ">Click to open</small>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {portofolio.github && (
            <a href={portofolio.github} className="text-decoration-none">
              <div className="pe-2">
                <div className="card card-glass bg-transparent mb-2">
                  <div className="d-flex justify-content-start px-3 py-2">
                    <div className="d-flex align-items-center">
                      <i className="fa-brands fa-github fa-xl text-utama me-2"></i>
                    </div>

                    <div className=" d-flex align-items-start flex-column ps-1">
                      <small>
                        <small className=" text-second mb-0">Github</small>
                      </small>
                      <small className="text-white ">Click to open</small>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          )}
          {portofolio.figma && (
            <a href={portofolio.github} className="text-decoration-none">
              <div className="pe-2">
                <div className="card card-glass bg-transparent mb-2">
                  <div className="d-flex justify-content-start px-3 py-2">
                    <div className="d-flex align-items-center">
                      <i className="fa-brands fa-figma fa-xl text-utama me-2"></i>
                    </div>

                    <div className=" d-flex align-items-start flex-column ps-1">
                      <small>
                        <small className=" text-second mb-0">Figma</small>
                      </small>
                      <small className="text-white ">Click to open</small>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          )}
        </div>
        {/* <hr className=' text-second border-1 mt-0 mb-2 ' /> */}
        <small className="text-second">Description :</small>
        <br />
        <span className="text-white ">{portofolio.desc}</span>
        <div className="mt-3"></div>

        {/* <small className='text-second'>Team Partners :</small><br />
                <div className="d-flex justify-content-start flex-wrap mt-1 mb-2">
                    <div className="avatar  me-2 mb-2 pull-up" data-popup="tooltip-custom" data-bs-placement="top" aria-label="Blender" data-bs-original-title="Blender">
                        <img src="/img/icon/blender.png" className="rounded-circle" alt="" />
                    </div>
                    <div className="avatar  me-2 mb-2 pull-up" data-popup="tooltip-custom" data-bs-placement="top" aria-label="Blender" data-bs-original-title="Blender">
                        <img src="/img/icon/blender.png" className="rounded-circle" alt="" />
                    </div>
                    <div className="avatar  me-2 mb-2 pull-up" data-popup="tooltip-custom" data-bs-placement="top" aria-label="Blender" data-bs-original-title="Blender">
                        <img src="/img/icon/blender.png" className="rounded-circle" alt="" />
                    </div>

                </div> */}
        <small className="text-second">Tools :</small>
        <br />
        <div className="d-flex justify-content-start align-items-center flex-wrap mt-1 mb-2">
          {portofolio.software.map((software: string) => (
            <div className="avatar  d-flex justify-content-start align-items-center   me-2 mb-2 ">
              {/* <img src={software} className="rounded" alt="" /> */}
              <Tooltip
                className="text-white rounded-pill px-2 "
                placement="top"
                style={{
                  backgroundColor: "#242624",
                  color: "#ffffff",
                  borderRadius: "30px",
                }}
                content={
                  software
                    .split(".")[0]
                    .replace(/_/g, " ")
                    .charAt(0)
                    .toUpperCase() +
                  software.split(".")[0].replace(/_/g, " ").slice(1)
                }
              >
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="img-tools "
                  src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/images/skills/${software}`}
                  alt="skill"
                />
              </Tooltip>
            </div>
          ))}
        </div>

        <small className="text-second ">Category :</small>
        <div className="d-flex flex-wrap mt-1 mb-4">
          {portofolio.type.map((typeItem) => (
            <button className="btn btn-sm btn-tag-detail me-2 text-second">
              <small>{typeItem}</small>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
