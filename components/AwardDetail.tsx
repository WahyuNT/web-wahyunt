import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Console } from "console";
import Masonry from "masonry-layout";
import Image from "next/image";

export default function AwardDetail() {
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
  const [isLoading, setIsLoading] = useState(true);
  const [award, setAward] = useState({
    _id: "",
    title: "",
    desc: "",
    icon_company: "",
    cover: "",
    company: "",
    desc_company: "",
    date: "",
    slug: "",
  }); // Ganti array dengan objek tunggal
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (image.length > 0 && typeof window !== "undefined") {
      const Masonry = require("masonry-layout");
      new Masonry(".row", {
        itemSelector: ".col-lg-6",
        percentPosition: true,
      });
    }
  }, [image]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (slug) {
          const responseAward = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/award/detail/${slug}`
          );
          setAward(responseAward.data.data);
          const id = responseAward.data.data._id;

          if (id) {
            const responseImage = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/api/award/image/list/${id}`
            );
            setImage(responseImage.data.data);
            // console.log(responseImage.data.data);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <div className="p-2">
      <div className="card-body  px-1" style={{ maxHeight: "100%" }}>
        <div className="d-flex align-items-center justify-content-start mb-0">
          <Link href="/award">
            <button className="btn card-sosmed btn-icon me-2 text-utama">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </Link>
          <div className="col ">
            <div className="d-flex justify-content-center ">
              <div className="card h-100 bg-transparent card-border px-3">
                <div className="d-flex justify-content-center align-align-items-center">
                  <h5 className="text-utama my-1">
                    <b>{award.title}</b>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-glass bg-transparent mb-3 mt-1 p-1">
        <div className="d-flex justify-content-start px-3 py-2">
          <div className="d-flex align-items-center">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/static/images/award/${award.icon_company}`}
              style={{ width: "40px", height: "40px" }}
              alt="skill"
              className="rounded-pill me-1"
            ></img>
          </div>
          <div className=" d-flex align-items-start flex-column ps-lg-1">
            <small>
              <small className=" text-second mb-0">From :</small>
            </small>
            <small className="text-white ">{award.company}</small>
          </div>
        </div>
        <p className="text-second mt-1 mb-2 ms-3">{award.desc}</p>
      </div>
      <div className="me-lg-3">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <span className="loader mt-5 "></span>
          </div>
        ) : (
          image &&
          image.length > 0 && (
            <div
              className="row "
              style={{ position: "relative" }}
              data-masonry='{"percentPosition": true }'
            >
              {image.map((img: { file_name: string; youtube?: string }) => {
                return (
                  <div
                    style={{ position: "absolute" }}
                    className="col-lg-6 col-12 pe-0 mb-3"
                    key={img.file_name}
                  >
                    {img.youtube ? (
                      <div className="">
                        <div className="bg-transparent card-glass p-2">
                          <div className="card border-0 bg-transparent p-1">
                            <iframe
                              style={{ borderRadius: "8px" }}
                              title="video"
                              width="auto"
                              height="218px"
                              src={img.youtube}
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="">
                        <div className="bg-transparent card-glass p-2">
                          <div className="card border-0 bg-transparent p-1 ">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/static/images/award/${img.file_name}`}
                              alt="Deskripsi gambar"
                              className="w-full h-auto object-cover"
                              width={0}
                              height={0}
                              blurDataURL={img.file_name}
                              sizes="100vw"
                              style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                aspectRatio: "16/9",
                                borderRadius: "8px",
                              }}
                            />{" "}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )
        )}
      </div>
    </div>
  );
}
