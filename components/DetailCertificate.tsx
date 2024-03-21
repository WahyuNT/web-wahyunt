import { width } from '@fortawesome/free-solid-svg-icons/fa0'
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react'

export default function DetailCertificate() {
    const router = useRouter();
    const { slug } = router.query;
    const [certificate, setCertificate] = useState({ title: '', image: '', company: '', year: '', credential: '', file_name: '' }); // Ganti array dengan objek tunggal

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (slug) { // Pastikan slug tidak undefined
                    const responseCertificate = await axios.get(`https://portodb.wahyunt.me/api/certificate/detail/${slug}`);
                    setCertificate(responseCertificate.data.data);
                    console.log(responseCertificate.data.data);
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

                <div className="d-flex align-items-center justify-content-start mb-3">
                    <Link href="/certificate">
                        <button className='btn card-sosmed btn-icon me-2 text-utama'>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    </Link>
                    <div className="col ">
                        <div className="d-flex justify-content-center ">
                            <div className="card h-100 bg-transparent card-border px-3">
                                <div className="d-flex justify-content-center align-align-items-center">
                                    <h5 className="text-utama my-1"><b>{certificate.title}</b></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="d-flex">
                <div className="col pe-3">
                    <div className="card  bg-transparent ">
                        <img src={certificate.image} className='w-100 certificate-image' alt="" />
                    </div>
                </div>
                <div className="col-3">
                    <div className="card card-glass bg-transparent" style={{ borderRadius: "15px" }}>
                        <div className="card-body pb-0 text-second">
                            <small className='text-white text-utama fw-bold'>Detail :</small>
                            <ul className='list-unstyled mb-3'>
                                <li >
                                    <i className="fa-solid text-second fa-sm fa-building me-2"></i><small>{certificate.company}</small>
                                </li>
                                <li>
                                    <i className="fa-solid text-second fa-sm fa-calendar-days me-2"></i><small>{certificate.year}</small>
                                </li>
                                {certificate.credential && (

                                    <li>
                                        <i className="fa-solid text-second fa-sm fa-hashtag me-2"></i><small>{certificate.credential}</small>
                                    </li>
                                )}
                            </ul>
                            <div className="d-flex justify-content-center">
                                <button className='btn btn-primary  mb-3 rounded-pill btn-xs text-dark px-3 py-2 '><i className="fa-solid fa-file-arrow-down me-1"></i>Download PDF</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
