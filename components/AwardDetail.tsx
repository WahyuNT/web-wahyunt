import { width } from '@fortawesome/free-solid-svg-icons/fa0'
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Console } from 'console';

export default function AwardDetail() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,

    };

    const router = useRouter();
    const { slug } = router.query;
    const [award, setAward] = useState({ _id: '', title: '', desc: '', icon_company: '', cover: '', company: '', desc_company: '', date: '', slug: '' }); // Ganti array dengan objek tunggal
    const [image, setImage] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (slug) { // Pastikan slug tidak undefined
                    const responseAward = await axios.get(`https://portodb.wahyunt.me/api/award/detail/${slug}`);
                    setAward(responseAward.data.data);
                    const id = responseAward.data.data._id;
                    if (id) {
                        const responseImage = await axios.get(`https://portodb.wahyunt.me/api/award/image/list/${id}`);
                        setImage(responseImage.data.data);
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [slug]);

    return (
        <div className='p-2'>
            <div className="card-body  px-1" style={{ maxHeight: "100%" }}>

                <div className="d-flex align-items-center justify-content-start mb-0">
                    <Link href="/award">
                        <button className='btn card-sosmed btn-icon me-2 text-utama'>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    </Link>
                    <div className="col ">
                        <div className="d-flex justify-content-center ">
                            <div className="card h-100 bg-transparent card-border px-3">
                                <div className="d-flex justify-content-center align-align-items-center">
                                    <h5 className="text-utama my-1"><b>{award.title}</b></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="card card-glass bg-transparent mb-3 mt-1 p-1">
                <div className="d-flex justify-content-start px-3 py-2">
                    <div className="d-flex align-items-center">
                        <img src={award.icon_company} style={{ width: "40px", height: "40px" }} alt="skill" className="rounded-pill me-1" ></img>
                    </div>
                    <div className=" d-flex align-items-start flex-column ps-1">
                        <small>
                            <small className=" text-second mb-0">From :</small>
                        </small>
                        <small className="text-white ">{award.company}</small>
                    </div>
                </div>
                <p className='text-second mt-1 mb-2 ms-3'>
                    {award.desc}
                </p>
            </div>

            <div className=" slider-container px-4">
                {image && image.length > 0 && (
                    <Slider {...settings}>
                        {image.map((img: { file_name: string; youtube?: string }) => {
                            return (
                                <div key={img.file_name}>
                                    {img.youtube ? (
                                        <div className="px-1">
                                            <div className="bg-transparent card-glass p-2">
                                                <div className="card bg-transparent p-1">
                                                    <iframe title="video" width="auto" height="218px" src={img.youtube}></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="px-1">
                                            <div className="bg-transparent card-glass p-2">
                                                <div className="card bg-transparent p-1">
                                                    <img src={img.file_name} className="detail-porto-image" alt="" />
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


            {/* <div className="d-flex">
                <div className="col-12 ">
                    <div className="card  bg-transparent ">
                        <img src={award.cover} className='w-100 h-100 award-image' alt="" />
                    </div>
                </div>

            </div> */}



        </div >
    )
}
