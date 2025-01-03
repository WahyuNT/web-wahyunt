import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

export default function DetailCertificate() {
  const router = useRouter();
  const { slug } = router.query;
  const [certificate, setCertificate] = useState({
    title: "",
    image: "",
    company: "",
    year: "",
    credential: "",
    file_name: "",
  }); // Ganti array dengan objek tunggal

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          // Pastikan slug tidak undefined
          const responseCertificate = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/certificate/detail/${slug}`
          );
          setCertificate(responseCertificate.data.data);
          console.log(responseCertificate.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <div className="p-2">
      <div className="card-body  px-1" style={{ maxHeight: "100%" }}>
        <div className="d-flex align-items-center justify-content-start mb-lg-3">
          <Link href="/certificate">
            <button className="btn card-sosmed btn-icon me-2 text-utama">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </Link>
          <div className="col ">
            <div className="d-flex justify-content-center ">
              <div className="card h-100 bg-transparent card-border px-3">
                <div className="d-flex justify-content-center align-align-items-center">
                  <h5 className="text-utama my-1">
                    <b>{certificate.title}</b>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex  flex-wrap-reverse flex-lg-wrap   ">
        <div className="col-lg col-12 col-sm-12  pe-lg-3">
          <div className="card  bg-transparent ">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "auto",
                height: "auto",

                borderRadius: "15px",
              }}
              src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/images/certificate/${certificate.image}`}
              className="w-100 certificate-image"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-3 col-12 col-sm-12 mb-3">
          <div
            className="card card-glass bg-transparent"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body pb-0 text-second">
              <small className="text-white text-utama fw-bold">Detail :</small>

              <table>
                <tr>
                  <div className="d-flex align-items-top">
                    <td>
                      {" "}
                      <i className="fa-solid text-second fa-sm fa-building me-2"></i>
                    </td>
                    <td>
                      <small>{certificate.company}</small>
                    </td>
                  </div>
                </tr>
                <tr>
                  <div className="d-flex align-items-top">
                    <td>
                      <i className="fa-solid text-second fa-sm fa-calendar-days me-2"></i>
                    </td>
                    <td>
                      <small>{certificate.year}</small>
                    </td>
                  </div>
                </tr>
                {typeof window !== "undefined" && certificate.credential && (
                  <tr>
                    <div className="d-flex align-items-top">
                      <td>
                        <i className="fa-solid text-second fa-sm fa-hashtag me-2"></i>
                      </td>
                      <td>
                        <small>{certificate.credential}</small>
                      </td>
                    </div>
                  </tr>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
