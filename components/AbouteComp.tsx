import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function AbouteComp() {
  const [about, setAbout] = useState([]);
  const [skill, setSkill] = useState([]);
  const [doing, setDoing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const responseAbout = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/posts`
        );
        setAbout(responseAbout.data.data);

        const responseSkill = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/skills`
        );
        setSkill(responseSkill.data.data);

        const responseDoing = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/doings`
        );
        setDoing(responseDoing.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="card-body " style={{ maxHeight: "100%" }}>
        <div className="d-flex justify-content-start mb-2 mt-0">
          <div
            className="card me-2 color-utama"
            style={{ width: "5px", height: "auto" }}
          ></div>
          <h4 className="text-white mt-2 text-white">
            <b>
              <span className="text-utama">About</span> Me
            </b>
          </h4>
        </div>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <span className="loader"></span>
          </div>
        ) : (
          
                  about.map((item: { desc: string }) => {
                    return <p className="text-second ps-3">{item.desc}</p>;
                  })
         
        )}

        <div className="d-flex justify-content-start mb-3">
          <div
            className="card me-2 color-utama"
            style={{ width: "5px", height: "auto" }}
          ></div>
          <div className="d-flex align-items-start flex-wrap">
            <h4 className="text-white mt-2 text-white">
              <b>
                <span className="text-utama">Hard </span> Skill
              </b>
            </h4>
          </div>
        </div>

        <div className="d-flex justify-content-start flex-wrap ps-3">
          {skill.map((item: { icon: string }) => (
            <div className="avatar btn-icon avatar-skill me-2 mb-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/static/images/skills/${item.icon}`}
                width={40}
                height={40}
                className="rounded"
                alt="skill"
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-start mb-3 mt-3">
          <div
            className="card me-2 color-utama"
            style={{ width: "5px", height: "auto" }}
          ></div>
          <div className="d-flex align-items-start flex-wrap">
            <h4 className=" mt-2  text-white">
              {" "}
              <b>
                <span className="text-utama">What</span> I'm Doing
              </b>
            </h4>
          </div>
        </div>
        <div className="d-flex justify-content-start flex-wrap ps-3">
          {doing.map((item: { title: string; icon: string; desc: string }) => {
            return (
              <div className="col-lg-4 col-sm-6 col-12 pe-2 mb-2">
                <div className="card-glass h-100">
                  <div className="meta">
                    <div className="p-3">
                      <div className="d-flex ">
                        <div className="col-2 ">
                          <i className={`fa-xl ${item.icon} text-utama`}></i>
                        </div>
                        <div className="col d-flex align-items-start flex-wrap">
                          <h6 className="text-white fw-bold mb-0 ">
                            {item.title}
                          </h6>
                          <small className="text-second text-wrap">
                            {item.desc}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
