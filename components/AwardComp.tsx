import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function AwardComp() {
  const [award, setAward] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const responseAward = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL_IMAGE}/api/award`
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
          <b>Award</b>
        </h4>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <span className="loader mt-5 "></span>
          </div>
        ) : (
          <div className="d-flex  flex-wrap">
            {award.map(
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
                          <img
                            src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/static/images/award/${item.cover}`}
                            className="cover-award mb-2"
                            alt=""
                          />
                        </div>
                        <div className="d-flex justify-content-center ">
                          <div className="card bg-transparent ">
                            <img
                              src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/static/images/award/${item.icon_company}`}
                              className="cover-ava-award "
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
                          href={`/award/detail/${item.slug}`}
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
