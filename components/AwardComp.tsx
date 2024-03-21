import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AwardComp() {
    const [award, setAward] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseCertificate = await axios.get('https://portodb.wahyunt.me/api/award');
                setAward(responseCertificate.data.data);



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
            <h4 className="text-utama mt-2 text-center"><b>Award</b></h4>
            <div className="d-flex  flex-wrap">
                {award.map((item: { title: string, cover: string, desc: string, icon_company: string, company: string, desc_company: string, date: string }) => {
                    return (
                        <div className="col-4 mb-2 p-2">
                            <div className=" bg-transparent card h-100 card-glass card-porto pb-2">
                                <div className="card bg-transparent card-body p-0 card-banner flex-column">
                                    <div className="card bg-transparent">
                                        <img src={item.cover} className="cover-award mb-2" alt="" />
                                    </div>
                                    <div className="d-flex justify-content-center ">
                                        <div className="card bg-transparent ">
                                            <img src={item.icon_company} className="cover-ava-award " alt="" />
                                        </div>
                                    </div>
                                    <div className="div ">

                                        <div className="px-3 text-center">
                                            <br />
                                            <p className='text-white text-utama fw-bold mt-1 mb-0'>{item.title}</p>
                                            <p className='text-second mb-1 mt-1' style={{ fontSize: "13px" }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>


                                </div>
                                <div className="card-footer p-0" >

                                    <div className="px-3  ">

                                        <hr className=' mb-0  mt-1 border-2 color-border' />
                                    </div>
                                    <a href="" className='text-decoration-none text-link'>
                                        <div className="d-flex justify-content-between align-items-center mt-2  px-3 pb-1">
                                            <small className=' fw-bold '>Read More</small>
                                            <i className="fa-solid fa-caret-right ms-1 fa-sm"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div></div>
    )
}
