import Image from 'next/image'
import React from 'react'

export default function ResumeComp() {
    return (
        <div>
            <div className="card-body " style={{ maxHeight: "100%" }}>

                <div className="d-flex">

                </div>
                <h4 className="text-utama mt-2 text-center "><b>Resume</b></h4>
                <h5 className='text-white'>Education</h5>
                <div className="col-5 ">

                    <div className="card-glass"><div className="meta">
                        <div className="p-3">
                            <div className="d-flex ">
                                <div className="col-2 d-flex justify-content-center">
                                    <Image className='me-2' src="logo-amikom.svg" width={30} height={30} alt="" />
                                </div>
                                <div className="col d-flex align-items-start flex-column">
                                    <div className="card text-white bg-transparent border-1 card-glass px-2 py-1 mb-1 " style={{ borderRadius: "7px" }}>
                                        <small style={{ fontSize: "11px" }}>
                                            2020 - 2023
                                        </small>
                                    </div>
                                    <h6 className="text-white mb-0">AMIKOM University Yogyakarta</h6>
                                    <small className='text-second'>Computer Science</small>
                                    <small className='text-second'>GPA : 3.99/4.00 </small>
                                    <div className="d-flex justify-content-start flex-wrap">

                                        <small className='text-second mt-1'>Achievement :</small>
                                        <div className="d-flex justify-content-center flex-wrap gap-2">
                                            <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                                                <i className="fa-brands fa-instagram fa-sm text-white "></i>
                                            </div>
                                            <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                                                <i className="fa-brands fa-facebook fa-sm text-white "></i>
                                            </div>
                                            <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                                                <i className="fa-brands fa-dribbble fa-sm text-white "></i>
                                            </div>
                                            <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                                                <i className="fa-brands fa-youtube fa-sm text-white "></i>
                                            </div>
                                            <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                                                <i className="fa-brands fa-discord fa-sm text-white "></i>
                                            </div>
                                            <div className="card-sosmed-mini d-flex justify-content-center align-items-center p-1">
                                                <i className="fa-brands fa-steam fa-sm text-white "></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <h5 className='text-white mt-3'>Work Experience</h5>
                <div className="card bg-transparent">

                    <div className="card-body">

                        <div className="road-map text-white">
                            <div className="road-map-wrapper">


                                <div className="timeline-row">
                                    <div className="timeline-items">
                                        <div className="item">
                                            <div className="timeline-item timeline-not-done">
                                                <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                                    <span className="date">-</span>
                                                </div>
                                                <div className="timeline-info animated ova-move-up" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:100}">
                                                    <h3 className="timeline-title">App beta test</h3>
                                                    <ul className="timeline-content">
                                                        <li>Concept Generation</li>
                                                        <li>Team Assemble</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="timeline-item timeline-not-done">
                                                <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                                    <span className="date">- </span>
                                                </div>
                                                <div className="timeline-info animated ova-move-up" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:100}">
                                                    <h3 className="timeline-title">App beta test</h3>
                                                    <ul className="timeline-content">
                                                        <li>Concept Generation</li>
                                                        <li>Team Assemble</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="timeline-row">
                                    <div className="timeline-items">
                                        <div className="item">
                                            <div className="timeline-item timeline-not-done">
                                                <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                                    <span className="date">Nov 2021</span>
                                                </div>
                                                <div className="timeline-info ova-invisible" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:100}">
                                                    <h3 className="timeline-title">Alpha test</h3>
                                                    <ul className="timeline-content">
                                                        <li>Concept Generation</li>
                                                        <li>Team Assemble</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="timeline-item timeline-not-done">
                                                <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                                    <span className="date">Mar 2022</span>
                                                </div>
                                                <div className="timeline-info ova-invisible" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:300}">
                                                    <h3 className="timeline-title">Operational</h3>
                                                    <ul className="timeline-content">
                                                        <li>Concept Generation</li>
                                                        <li>Team Assemble</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div></div>
    )
}
