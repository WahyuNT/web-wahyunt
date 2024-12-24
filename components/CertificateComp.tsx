import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CertificateComp() {
  const [certificate, setCertificate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const responseCertificate = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/certificate`
        );
        setCertificate(responseCertificate.data.data);
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
          <b>Certificate</b>
        </h4>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <span className="loader mt-5 "></span>
          </div>
        ) : (
          <div className="d-flex  flex-wrap">
            {certificate.map(
              (item: {
                slug: string;
                image: string;
                title: string;
                company: string;
                year: string;
                credential: string;
              }) => {
                return (
                  <div className="col-lg-4 col-12 mb-1 p-2">
                    <div className=" bg-transparent card h-100 card-glass card-porto pb-2">
                      <div className="card bg-transparent  card-banner flex-column">
                        <div className="card bg-transparent pt-3 px-3">
                          <img
                            src={`https://portodb.wahyunt.me/static/images/certificate/${item.image}`}
                            className="cover-certificate mb-2"
                            alt=""
                          />
                        </div>
                        <div className="px-3">
                          <p className="text-utama fw-bold mt-0 mb-0">
                            {item.title}{" "}
                          </p>
                          <div className="d-flex align-items-center">
                            <div className="col">
                              <p
                                className="text-second mb-1 mt-1"
                                style={{ fontSize: "13px" }}
                              >
                                <i className="fa-solid fa-building me-1"></i>
                                {item.company} <br />
                                <i className="fa-solid fa-calendar-days me-1"></i>
                                {item.year} <br />
                                {item.credential && (
                                  <React.Fragment>
                                    <i className="fa-solid fa-hashtag me-1"></i>
                                    {item.credential}
                                  </React.Fragment>
                                )}
                              </p>
                            </div>
                            <div className="div">
                              <Link href={`/certificate/detail/${item.slug}`}>
                                <button className="btn btn-icon btn-open-certificate  p-2">
                                  <i className="fa-solid  fa-arrow-right-from-bracket  fa"></i>
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-start align-items-center mt-2"></div>
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
