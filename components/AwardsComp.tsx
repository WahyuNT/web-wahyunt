import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function AwardComp() {
  const [awards, setAward] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const responseAward = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL_IMAGE}/api/awards`
        );
        setAward(responseAward.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="card-body  px-1" style={{ maxHeight: "100%" }}>
        <div className="d-flex"></div>
        <h4 className="text-utama mt-2 text-center">
          <b>Awards</b>
        </h4>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <span className="loader mt-5 "></span>
          </div>
        ) : (
          <div className="d-flex  flex-wrap">
            {awards.map(
              (item: {
                title: string;
                cover: string;
                desc: string;
                icon_company: string;
                company: string;
                desc_company: string;
                date: string;
                slug: string;
              }) => {
                return (
                  <div className="col-lg-4 col-12 mb-1 p-2">
                    <div className=" bg-transparent card h-100 card-glass card-porto pb-2">
                      <div className="card bg-transparent card-body p-0 card-banner flex-column">
                        <div className="card bg-transparent">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                              width: "auto",
                              height: "150px",
                              objectFit: "cover",
                              aspectRatio: "16/9",
                              borderTopRightRadius: "15px",
                              borderTopLeftRadius: "15px",
                            }}
                            src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/images/awards/${item.cover}`}
                            className="cover-awards mb-2"
                            alt=""
                          />
                        </div>
                        <div className="d-flex justify-content-center ">
                          <div className="card bg-transparent ">
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="cover-ava-awards"
                              src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/images/awards/${item.icon_company}`}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="div ">
                          <div className="px-3 text-center">
                            <br />
                            <p className="text-white text-utama fw-bold mt-1 mb-0">
                              {item.title}
                            </p>
                            <p
                              className="text-second mb-1 mt-1"
                              style={{ fontSize: "13px" }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer p-0">
                        <div className="px-3  ">
                          <hr className=" mb-0  mt-1 border-2 color-border" />
                        </div>
                        <Link
                          href={`/awards/detail/${item.slug}`}
                          className="text-decoration-none"
                        >
                          <div className=" text-link">
                            <div className="d-flex justify-content-between align-items-center mt-2  px-3 pb-1 ">
                              <small className=" fw-bold  ">Read More</small>
                              <i className="fa-solid fa-caret-right ms-1 fa-sm"></i>
                            </div>
                          </div>
                        </Link>
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
