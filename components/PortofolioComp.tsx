import axios from 'axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function PortofolioComp() {
    const [portofolio, setPortofolio] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responsePortofolio = await axios.get('https://portodb.wahyunt.me/api/portofolio');
                setPortofolio(responsePortofolio.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div><div className="card-body  px-1" style={{ maxHeight: "100%" }}>

            <div className="d-flex">

            </div>
            <h4 className="text-utama mt-2 text-center"><b>Portofolio</b></h4>
            <div className="d-flex  flex-wrap">

                {portofolio.map((item: { _id: string, title: string, desc: string, purpose: string, icon_company: string, cover: string, company: string, desc_company: string, date: string, slug: string, link: string, figma: string, github: string, software: [] }) => {
                    return (
                        <div className="col-4 mb-2 px-2">
                            <div className=" bg-transparent card card-glass card-porto ">
                                <div className="div px-3 pt-3">

                                    <div className="card bg-transparent  card-banner flex-column">
                                        <div className="card bg-transparent">

                                            <img src={item.cover} className="cover-image img-porto" alt="" />

                                            <div className="overlay-visit   position-absolute  start-50  translate-middle-x">
                                                <a href="https://fontawesome.com/icons/arrow-up-right-from-square?f=classic&s=solid" target='_blank' className='text-decoration-none text-white btn-visit'>
                                                    <div className="d-flex justify-content-center ">
                                                        {item.link && (
                                                            <a href={item.link} target='_blank' className='text-decoration-none'>

                                                                <div className="card rounded-pill bg-dark text-white  px-3 py-1 text-decoration-none">
                                                                    <div className="d-flex align-items-center ">
                                                                        <i className="fa-solid fa-arrow-up-right-from-square me-1 fa-xs"></i>
                                                                        <small >
                                                                            Visit Site
                                                                        </small>
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
                                                                {/* <Image  src= width={15} height={15} className="rounded"
                                                                    alt="skill" /> */}
                                                       

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

                                        <h5 className='text-utama fw-bold mb-0 '>{item.title}</h5>

                                    </div>
                                    <div className="card w-100 bg-transparent ">
                                        <div className="d-flex justify-content-start align-items-center mt-2">
                                            <div className="col-2   d-flex align-items-center justify-content-center me-2">
                                                <div className="card bg-transparent ">
                                                    <img src={item.icon_company} className="cover-ava " alt="" />
                                                </div>
                                            </div>
                                            <div className=" d-flex align-items-start flex-column ">
                                                <small className="text-white ">{item.company} </small>
                                                <small>

                                                    <small className=" text-second mb-0">{item.purpose}</small>
                                                </small>
                                            </div>

                                        </div>
                                    </div>
                                    <hr className='text-second border-1 my-2' />
                                    <div className="d-flex justify-content-start flex-wrap mb-1 gap-1">

                                        <button className='btn btn-xs btn-tag  text-second'>
                                            <small>
                                                Full Stack
                                            </small>
                                        </button>
                                        <button className='btn btn-xs btn-tag  text-second'>
                                            <small>
                                                Laravel
                                            </small>
                                        </button>
                                        <button className='btn btn-xs btn-tag  text-second'>
                                            <small>
                                                Unreal Engine
                                            </small>
                                        </button>
                                        <button className='btn btn-xs btn-tag  text-second'>
                                            <small>
                                                HTML
                                            </small>
                                        </button>
                                    </div>
                                    <hr className='text-second border-1 my-3' />
                                    <div className="d-flex justify-content-between gap-2 mt-1">
                                        {item.figma || item.github && (
                                            <div className="col d-flex gap-2 ">
                                                {item.github && (
                                                    <div className="col">
                                                        <button className='btn btn-outline-utama btn-border w-100 rounded-pill text-white w-50'>
                                                            <i className="fa-brands fa-github "></i>
                                                        </button>
                                                    </div>
                                                )}
                                                {item.figma && (
                                                    <div className="col">

                                                        <button className='btn btn-outline-utama btn-border w-100 rounded-pill text-white w-50'>
                                                            <i className="fa-brands fa-figma "></i>

                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        <div className="col ">

                                            <button className='btn btn-outline-utama btn-border rounded-pill text-white w-100 '>
                                                Details

                                            </button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    )
                })}
            </div>

        </div></div >
    )
}
